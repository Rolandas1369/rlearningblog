from selenium import webdriver
import unittest

class NewVisitorTest(unittest.TestCase):

    def setUp(self):
        self.browser = webdriver.Firefox()

    def tearDown(self):
        self.browser.quit()

    # test if project works on port 3000 
    def test_home_page(self):
        self.browser.get('http://localhost:3000')
    
    # test if project works on port 8000 
    def test_home_page_8000(self):
        self.browser.get('http://localhost:8000')

if __name__ == '__main__':
    unittest.main(warnings='ignore')