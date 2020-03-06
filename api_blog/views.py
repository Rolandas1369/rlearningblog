from django.shortcuts import render
from rest_framework import generics

from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response

from rest_framework.generics import (
    ListAPIView,
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
    DestroyAPIView,
    CreateAPIView
)

from .models import Post

from .serializers import PostSerializer, ImageSerializer

# Create your views here.
class PostListView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CreateAPIView(CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer 

class PostDetail(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DeletePost(DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


