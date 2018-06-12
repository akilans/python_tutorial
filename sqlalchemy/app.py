from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SECRET_KEY'] = 'AKILAN'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@127.0.0.1/flask_blog'
db = SQLAlchemy(app)


class Friends(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    location = db.Column(db.String(255))

    def __repr__(self):
        return '<Friends %r>' % self.name

class Articles(db.Model):
    __tablename__ = 'articles'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    author = db.Column(db.String(255))
    content = db.Column(db.Text)
    created = db.Column(db.String(255))

    def __repr__(self):
        return '<Articles %r>' % self.title


@app.route('/')
def index():
    articles = Articles.query.order_by(Articles.title).all()
    return render_template('index.html',articles=articles)

if __name__== "__main__":
    db.create_all()
    app.run(debug=True,port=8000)