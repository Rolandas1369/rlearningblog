from selenium import webdriver
import unittest
import time
from selenium.webdriver.common.keys import Keys

class NewVisitorTest(unittest.TestCase):

    def setUp(self):
        self.browser = webdriver.Firefox()

    def tearDown(self):
        self.browser.quit()

    def test_home_page(self):
        self.browser.get('http://localhost:3000')
    
    def test_home_page_8000(self):
        self.browser.get('http://localhost:8000')

if __name__ == '__main__':
    unittest.main(warnings='ignore')