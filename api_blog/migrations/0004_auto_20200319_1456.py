# Generated by Django 3.0.4 on 2020-03-19 14:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_blog', '0003_auto_20200319_1315'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='gist_filename',
            field=models.CharField(max_length=120, null=True),
        ),
        migrations.AddField(
            model_name='post',
            name='gist_id',
            field=models.CharField(max_length=120, null=True),
        ),
    ]