# Generated by Django 3.0.3 on 2020-04-25 10:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_blog', '0008_auto_20200422_1844'),
    ]

    operations = [
        migrations.AlterField(
            model_name='education',
            name='related_to',
            field=models.CharField(max_length=200, verbose_name=models.ManyToManyField(to='api_blog.KnownTech')),
        ),
    ]