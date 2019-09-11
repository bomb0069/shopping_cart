from flask import Flask
from flask_sqlalchemy import SQLAlchemy

SQL = SQLAlchemy()

def create_app():
    app = Flask(__name__)

    SQL.init_app(app)
    # from yourapplication.model import db
    # db.init_app(app)

    from app.auth.route import auth_blueprint
    # from yourapplication.views.frontend import frontend
    app.register_blueprint(auth_blueprint)

    return app