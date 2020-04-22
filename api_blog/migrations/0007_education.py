# Generated by Django 3.0.4 on 2020-04-22 16:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_blog', '0006_knowntech'),
    ]

    operations = [
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('related_to', models.CharField(blank=True, max_length=50)),
                ('description', models.TextField()),
                ('completed_on', models.CharField(blank=True, max_length=50)),
            ],
        ),
    ]
