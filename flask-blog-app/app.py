from flask import Flask, render_template, url_for, flash, redirect, session, logging, request
from data import Articles
from flask_mysqldb import MySQL
from wtforms import Form, StringField, TextAreaField, PasswordField, validators
from passlib.hash import sha256_crypt
from functools import wraps

app = Flask(__name__)
Articles = Articles()

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
    return render_template('articles.html',articles=Articles)

@app.route('/article/<int:id>')
def article(id):
    return render_template('article.html',id=id)

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
    username = StringField('Username',[validators.Length(min=3,max=10)])
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

@app.route('/dashboard')
@login_required
def dashboard():
    return render_template("dashboard.html")

@app.route('/logout')
def logout():
    session.clear()
    flash("Logout success!!!",'success')
    return redirect(url_for('login'))

if __name__ == "__main__":
    app.run(debug=True,host="127.0.0.1",port=8000)