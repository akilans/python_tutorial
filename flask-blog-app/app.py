from flask import Flask, render_template, url_for, flash, redirect, session, logging, request
#from data import Articles
from flask_mysqldb import MySQL
from wtforms import Form, StringField, TextAreaField, PasswordField, validators
from passlib.hash import sha256_crypt
from functools import wraps

app = Flask(__name__)
#Articles = Articles()

app.config['SECRET_KEY'] = "AKILAN"

# config Mysql
app.config['MYSQL_HOST'] = "localhost"
app.config['MYSQL_USER'] = "root"
app.config['MYSQL_PASSWORD'] = "root"
app.config['MYSQL_DB'] = "flask_blog"
app.config['MYSQL_CURSORCLASS'] = "DictCursor"

#Init MYSQL_DB

mysql = MySQL(app)

@app.route('/')
def index():
    return render_template("index.html")
@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/articles')
def articles():
    articles = []
    cur = mysql.connection.cursor()
    cur.execute("SELECT * from articles")
    articles = cur.fetchall()
    cur.close()
    return render_template('articles.html',articles=articles)

@app.route('/article/<int:id>')
def article(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * from articles where id=%s",[id])
    article = cur.fetchone()
    return render_template('article.html',article=article)

class RegisterForm(Form):
    name = StringField('Name',[validators.Length(min=3,max=10)])
    username = StringField('Username',[validators.Length(min=3,max=10)])
    email = StringField('Email',[validators.Length(min=5,max=30)])
    password = PasswordField('Password',[
            validators.data_required(),
            validators.EqualTo('confirm_password',"Password must be same")
            ])
    confirm_password = PasswordField("Confirm Password")

class LoginForm(Form):
    username = StringField('Username',[validators.Length(min=3,max=10,message="Dai enter name")])
    password = PasswordField('Password',[validators.Length(min=3,max=10)])

@app.route('/register',methods = ['GET', 'POST'])
def register():
    register_form = RegisterForm(request.form)

    if request.method == "POST" and register_form.validate():
        name  = register_form.name.data
        user_name = register_form.username.data
        email = register_form.email.data
        password = sha256_crypt.encrypt(str(register_form.password.data))

        cur = mysql.connection.cursor()

        cur.execute("INSERT into users(name,email,user_name,password) VALUES(%s,%s,%s,%s)",
                    (name,email,user_name,password))
        mysql.connection.commit()
        cur.close()

        flash("Registration is success!!!",'success')
        return redirect(url_for('index'))

    return render_template("register.html",register_form=register_form)

@app.route('/login',methods=['GET','POST'])
def login():
    login_form = LoginForm(request.form)
    error = None
    if request.method == "POST" and login_form.validate():
        user_name = login_form.username.data
        password = login_form.password.data

        cur = mysql.connection.cursor()
        result = cur.execute("SELECT * from users where user_name=%s",[user_name])

        if result > 0:
            data = cur.fetchone()
            encrypted_password = data['password']
            if sha256_crypt.verify(password,encrypted_password):
                flash("Login success!!!",'success')
                session['logged_in'] = True
                session['user_name'] = user_name
                return redirect(url_for('dashboard'))

            error = "Login Failed"
            return render_template('login.html',login_form=login_form,error=error)

        error = "user not found!!!"
        cur.close()
        return render_template('login.html',login_form=login_form,error=error)

    return render_template('login.html',login_form=login_form,error=error)

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if "logged_in" not in session:
            flash("Not Authorized!!!",'danger')
            return redirect(url_for('login', next=request.url))
        return f(*args, **kwargs)
    return decorated_function

# Add article form
class AddArticleForm(Form):
    title = StringField("Title",[validators.Length(min=3,max=25)])
    content = TextAreaField("Content",[validators.Length(min=10,max=500)])

@app.route('/dashboard')
@login_required
def dashboard():
    articles = []
    cur = mysql.connection.cursor()
    cur.execute("SELECT * from articles")
    articles = cur.fetchall()
    cur.close()
    return render_template("dashboard.html",articles=articles)


@app.route('/add_article',methods=['GET','POST'])
@login_required
def add_article():
    add_article_form = AddArticleForm(request.form)
    error = None
    if request.method=="POST" and add_article_form.validate():
        title = add_article_form.title.data
        content = add_article_form.content.data
        cur = mysql.connection.cursor()
        cur.execute("INSERT into articles(title,author,content) VALUES(%s,%s,%s)",(title,session['user_name'],content))
        mysql.connection.commit()
        cur.close()
        flash("Article added successfully","success")
        return redirect(url_for('dashboard'))
    else:
        return render_template("add_article.html",add_article_form=add_article_form,error=error)

@app.route('/edit_article/<int:id>',methods=['GET','POST'])
@login_required
def edit_article(id):
    cur = mysql.connection.cursor()
    result = cur.execute("SELECT * from articles where id=%s",[id])
    if result > 0:
        article = cur.fetchone()

        edit_article_form = AddArticleForm(request.form)
        edit_article_form.title.data = article['title']
        edit_article_form.content.data = article['content']
        
        error = None
        if request.method=="POST" and edit_article_form.validate():
            title = request.form['title']
            content = request.form['content']
            
            cur.execute("UPDATE articles set title=%s,content=%s where id=%s",(title,content,id))
            mysql.connection.commit()
            cur.close()
            flash("Article updated successfully","success")
            return redirect(url_for('dashboard'))
        else:
            return render_template("edit_article.html",edit_article_form=edit_article_form,error=error,id=id)
    else:
        flash("Article not exists","danger")
        return redirect(url_for('dashboard'))

@app.route('/delete_article/<int:id>',methods=['GET'])
@login_required
def delete_article(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE from articles where id=%s",[id])
    mysql.connection.commit()
    cur.close()
    flash("Deleted successfully!!!",'success')
    return redirect(url_for('dashboard'))

@app.route('/logout')
@login_required
def logout():
    session.clear()
    flash("Logout success!!!",'success')
    return redirect(url_for('login'))

if __name__ == "__main__":
    app.run(debug=True,host="127.0.0.1",port=8000)