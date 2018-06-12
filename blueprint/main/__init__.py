from flask import Flask

app = Flask(__name__)

from main.api.routes import mod
from main.site.routes import mod

app.register_blueprint(site.routes.mod)
app.register_blueprint(api.routes.mod,url_prefix='/api')