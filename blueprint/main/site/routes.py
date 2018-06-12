from flask import Blueprint

mod = Blueprint('site',__name__)

@mod.route('/')
def index():
    return '<h1>Hello from site main page</h1>'