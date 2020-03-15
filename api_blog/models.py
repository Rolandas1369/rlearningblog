from django.db import models
from precise_bbcode.fields import BBCodeTextField

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=120)
    content = BBCodeTextField()
    image = models.ImageField('uploadimage')
    filename = models.CharField(max_length=120)

    def __str__(self):
        return self.title

class Image(models.Model):
    image = models.ImageField('uploadimage')
    