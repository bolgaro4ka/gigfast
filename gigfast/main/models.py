from django.db import models
from datetime import datetime

# Create your models here.
class Music(models.Model):
    title = models.CharField(max_length=100)
    file = models.FileField(upload_to="music/")
    author = models.CharField(max_length=100)
    picture = models.ImageField(upload_to="music/pic/", blank=True, null=True)
    likes = models.IntegerField(default=0)

    def __str__(self):
        return self.title
    
class Album(models.Model):
    title = models.CharField(max_length=100)
    picture = models.ImageField(upload_to="album/pic/", blank=True, null=True)
    songs = models.ManyToManyField(Music, related_name="albums")
    likes = models.IntegerField(default=0)
    date = models.DateField(auto_now_add=True, null=True, blank=True)

    def __str__(self):
        return self.title
