from flask_script import Manager
import unittest
from flask import Flask

app = Flask(__name__)
# configure your app

manager = Manager(app)

@manager.command
def test():
    tests = unittest.TestLoader().discover('tests', pattern='*.py')
    unittest.TextTestRunner(verbosity=1).run(tests)

if __name__ == "__main__":
    manager.run()