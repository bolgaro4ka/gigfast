from django.contrib import admin
from .models import Music, Album, Category
# Register your models here.


@admin.register(Music)
class MusicAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'likes')


@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    list_display = ('title', 'likes')
    filter_horizontal = ('songs',)


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)

    filter_horizontal = ('albums',)