from flask import Blueprint

auth_blueprint = Blueprint('auth_blueprint', __name__, url_prefix='/auth')


@auth_blueprint.route('/token')
def validateToken():
    return "Hello", 200