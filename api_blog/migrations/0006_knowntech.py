# Generated by Django 3.0.4 on 2020-04-22 10:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_blog', '0005_workexperiece_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='KnownTech',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language', models.CharField(blank=True, max_length=50)),
                ('skills', models.TextField(blank=True)),
            ],
        ),
    ]
