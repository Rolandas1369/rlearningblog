# Generated by Django 3.0.3 on 2020-04-04 20:42

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_blog', '0014_auto_20200404_2039'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feature',
            name='completed',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='feature',
            name='date_added',
            field=models.DateTimeField(default=datetime.date),
        ),
    ]
