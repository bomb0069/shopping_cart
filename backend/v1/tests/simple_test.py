import unittest
from unit_test import testUnit

class TestKwan(unittest.TestCase):
    def test(self):
        result = "text"
        actual_result = testUnit("text")
        self.assertEqual(result, actual_result)
