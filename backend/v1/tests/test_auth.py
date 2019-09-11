import unittest
from unit_test import testUnit

class TestAuth(unittest.TestCase):
    def test(self):
        token = "token"
        result = {
            "uer_id": 1,
            "name": "rittichai",
            "email": "rittichai@"
        }
        actual_result = validateToken(token)        
        self.assertEqual(result, actual_result)

if __name__ == "__main__":
     unittest.main()
