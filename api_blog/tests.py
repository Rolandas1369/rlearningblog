from django.test import TestCase
from .models import Post
from django.contrib.auth.models import User
from django.contrib import auth

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
    
    # def test_user_can_post(self):
    #     response =  self.client.post('/api/posts/',
    #     data={'title': 'some', 'content': 'x', 'language_choice': 'Python'})
    #     print(response.content)
    #     self.assertEqual(response.status_code, 201)
    
    
class ItemModelTest(TestCase):

    def auth_user(self):
        ''' Create and login user helper function '''
        User.objects.create_user('john', 'lennon@thebeatles.com', 'johnpassword')
        user_response = self.client.post('/rest-auth/login/', {'username': 'john',
                                                               'password': 'johnpassword'})
        return user_response

    def test_saving_data_to_db(self):
        ''' Create required data posts it to db checks data len and title'''
        first_item = Post()
        first_item.title = 'text'
        first_item.content = 'Content'
        first_item.language_choice = 'Python'
        first_item.save()

        second_item = Post()
        second_item.title = 'text2'
        second_item.content = 'Content2'
        second_item.language_choice = 'Python'
        second_item.save()

        saved_items = Post.objects.all()
        self.assertEqual(len(saved_items), 2)

        first_saved_item_title = saved_items[0].title
        self.assertEqual(first_saved_item_title, 'text')

    def test_authenticated_user_can_post(self):
        ''' Create user, login user, post data to api '''
        user_response = self.auth_user()
        self.assertEquals(user_response.status_code, 200)
        post_response = self.client.post('/api/posts/create/', data={'title': 'some',
                                                                     'content': 'x',
                                                                     'language_choice': 'Python'})
        self.assertEquals(post_response.status_code, 201)




