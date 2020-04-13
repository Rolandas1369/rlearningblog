# Generated by Django 3.0.3 on 2020-04-13 10:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api_blog', '0020_auto_20200413_1008'),
    ]

    operations = [
        migrations.CreateModel(
            name='TechFeature',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(blank=True)),
                ('experience', models.TextField(blank=True)),
                ('skill', models.CharField(blank=True, max_length=255)),
                ('language_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_blog.TechStack')),
            ],
        ),
        migrations.DeleteModel(
            name='TechFeatures',
        ),
    ]
