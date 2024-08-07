from django.shortcuts import render
from rest_framework import generics
from rest_framework import viewsets
from .serializers import MusicSerializer, AlbumSerializer, CategorySerializer
#from .permissions import IsAdminOrReadOnly
from rest_framework.permissions import IsAdminUser
#from .paginations import CourseViewSetPagination, UserViewSetPagination

from django.contrib.auth.models import User

from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .models import Music, Album, Category

class MusicList(generics.ListCreateAPIView):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer

class AlbumList(generics.ListCreateAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class MusicDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer

class AlbumDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer