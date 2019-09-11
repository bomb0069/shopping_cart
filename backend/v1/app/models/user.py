from app import SQL
class User(SQL.model):
    user_id = SQL.Column(SQL.Integer, primary_key=true)
    name = SQL.Column(SQL.String)
    email = SQL.Column(SQL.String)

    def __init__(self, user_id=None, name=None, email=None)
    self.user_id=user_id
    self.name=name
    self.email=email

