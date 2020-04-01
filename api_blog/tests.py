from django.test import TestCase, Client

# Create your tests here.
class HomePageTest(TestCase):

    def test_uses_home_page(self):
        response = self.client.get('/')
        self.assertTemplateUsed(response, 'index.html')

    def test_uses_create_page(self):
        response = self.client.get('/create/')
        self.assertEqual(response.status_code, 200)

    def test_uses_api_page(self):
        response = self.client.get('/api/')
        self.assertEqual(response.status_code, 404)
    
    def test_user_can_post(self):
        response =  self.client.post('/api/posts/', 
        data={'title': 'some', 'content': 'x', 'language_choice': 'Python'})
        print(response.content)
        self.assertEqual(response.status_code, 201)
    
    


