from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    image = models.ImageField('uploadimage', null=True)
    filename = models.CharField(max_length=120, null=True)
    gist_id = models.CharField(max_length=120, null=True)
    gist_filename = models.CharField(max_length=120, null=True)

    def __str__(self):
        return self.title

class Image(models.Model):
    image = models.ImageField('uploadimage')
    