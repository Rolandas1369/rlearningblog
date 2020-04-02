from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

import unittest

class NewVisitorTest(unittest.TestCase):

    def setUp(self):
        self.browser = webdriver.Firefox()

    def tearDown(self):
        self.browser.quit()

    # test if project works on port 3000 
    # def test_home_page_3000(self):
    #     self.browser.get('http://localhost:3000')
    #
    # # test if project works on port 8000
    # def test_home_page_8000(self):
    #     self.browser.get('http://localhost:8000')
    #
    # def test_create_page(self):
    #     self.browser.get('http://localhost:8000/create/')

    def test_title_input(self):
        self.browser.get('http://localhost:3000/create/')
        time.sleep(2)
        title_field = self.browser.find_element_by_class_name('form-input')
        time.sleep(2)
        content_field = self.browser.find_element_by_tag_name('textarea')
        time.sleep(2)
        options_field = self.browser.find_element_by_tag_name('select')

        title_field.send_keys('Title')
        content_field.send_keys('Content')
        options_field.send_keys('Python')
        time.sleep(2)

        submit_button = self.browser.find_element_by_id('submit-button')
        submit_button.click()

if __name__ == '__main__':
    unittest.main(warnings='ignore')