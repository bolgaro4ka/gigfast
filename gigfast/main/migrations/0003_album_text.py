# Generated by Django 5.0.6 on 2024-07-17 09:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_album_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='album',
            name='text',
            field=models.TextField(blank=True, null=True),
        ),
    ]
