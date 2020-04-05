from django.db import models
import datetime

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    image = models.ImageField('uploadimage', null=True, blank=True)
    filename = models.CharField(max_length=120, null=True, blank=True)
    gist_id = models.CharField(max_length=120, null=True, blank=True)
    gist_filename = models.CharField(max_length=120, null=True, blank=True)
    video_src = models.CharField(max_length=200, null=True, blank=True)
    LANGUAGE = [('Python','python'), ('React', 'react'), ('Both','both')] # add choices tuple
    language_choice = models.CharField(max_length=10, choices=LANGUAGE, null=True, blank=True) # model for choices

    def __str__(self):
        return self.title

class Image(models.Model):
    image = models.ImageField('uploadimage')

class Feature(models.Model):
    content = models.TextField()
    completed = models.BooleanField(default=False)
    date_added = models.DateField(auto_now=True)

class Insight(models.Model):
    content = models.TextField()

# Features/improvements to add to site

#     Insights crud list
#     Add Expand gist functionality
#     Add yellow background for js blue for python (see post 156)
#     Add filters for displaying only python, js or multiple
#     Sort items by date published (see post 155)
#     Pass login form to frontend
#     Inform, then post created
#     Add more info to errors display