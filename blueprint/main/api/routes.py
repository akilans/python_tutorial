from flask import Blueprint

mod = Blueprint('api',__name__)

@mod.route('/getFriends')
def getFriends():
    return '{"akilan","alex","annachi","jegan"}'