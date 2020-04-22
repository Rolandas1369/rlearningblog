from django.db import models
import datetime

# Migrations
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

class HtmlStylingChange(models.Model):
    background_color = models.CharField(max_length=200)

class TechStack(models.Model):
    language = models.CharField(max_length=255)
    using_from = models.IntegerField()

    def __str__(self):
        return self.language

class TechFeatures(models.Model):
    language_category = models.ForeignKey(TechStack, on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    experience = models.TextField(blank=True)
    skill = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.experience

class WorkExperiece(models.Model):
    worked_from = models.CharField(blank=True, max_length=50)
    description = models.TextField(blank=True)
    skills_used = models.TextField(blank=True)
    links = models.TextField(blank=True)
    image = models.ImageField('uploadimage', null=True, blank=True)

    def __str__(self):
        return self.worked_from

class KnownTech(models.Model):
    language = models.CharField(blank=True, max_length=50)
    skills = models.TextField(blank=True)

    def __str__(self):
        return self.language

class Education(models.Model):
    related_to = models.CharField(blank=True, max_length=50)
    description = models.TextField()
    completed_on = models.CharField(blank=True, max_length=50)

    def __str__(self):
        return self.related_to