from flask import Flask

def create_app():
    app = Flask(__name__)

    # from yourapplication.model import db
    # db.init_app(app)

    from app.auth.route import auth_blueprint
    # from yourapplication.views.frontend import frontend
    app.register_blueprint(auth_blueprint)

    return app