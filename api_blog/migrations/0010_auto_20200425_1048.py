# Generated by Django 3.0.3 on 2020-04-25 10:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_blog', '0009_auto_20200425_1032'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='education',
            name='related_to',
        ),
        migrations.AddField(
            model_name='education',
            name='related_to',
            field=models.ManyToManyField(max_length=200, to='api_blog.KnownTech'),
        ),
    ]
