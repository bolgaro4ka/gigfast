from django.db import models
from datetime import datetime

# Create your models here.
class Music(models.Model):
    title = models.CharField(max_length=100, verbose_name="Название")
    file = models.FileField(upload_to="music/", verbose_name="Файл")
    author = models.CharField(max_length=100, verbose_name="Автор")
    picture = models.ImageField(upload_to="music/pic/", blank=True, null=True, verbose_name="Обложка")
    likes = models.IntegerField(default=0, verbose_name="Лайки")

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ["-id"]
        verbose_name = "Музыка"
        verbose_name_plural = "Музыка"
    
class Album(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True, verbose_name="Название")
    picture = models.ImageField(upload_to="album/pic/", blank=True, null=True, verbose_name="Обложка")
    songs = models.ManyToManyField(Music, related_name="albums", verbose_name="Песни")
    likes = models.IntegerField(default=0, verbose_name="Лайки")
    text = models.TextField(blank=True, null=True, verbose_name="Описание")
    date = models.DateField(auto_now_add=True, null=True, blank=True, verbose_name="Дата создания")

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ["-id"]
        verbose_name = "Альбом"
        verbose_name_plural = "Альбомы"

class Category(models.Model):
    name = models.CharField(max_length=100, verbose_name="Название",)
    albums = models.ManyToManyField(Album, related_name="categories", verbose_name="Альбомы")

    def __str__(self):
        return self.name
    
    class Meta:
        ordering = ["-id"]
        verbose_name = "Категория"
        verbose_name_plural = "Категории"