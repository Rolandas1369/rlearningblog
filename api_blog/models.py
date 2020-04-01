from django.db import models

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
    