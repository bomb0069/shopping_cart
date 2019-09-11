from flask_script import Manager, Server
import unittest
from flask import Flask
from app import create_app
app = Flask(__name__)
# configure your app

manager = Manager(app)
manager.add_command("runserver", Server(host="0.0.0.0", port=5000))

@app.route('/token')
def hello():
    return "hello"

@manager.command
def test():
    tests = unittest.TestLoader().discover('tests', pattern='*.py')
    unittest.TextTestRunner(verbosity=1).run(tests)

if __name__ == "__main__":
    manager.run()