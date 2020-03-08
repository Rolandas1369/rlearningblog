from django.shortcuts import render
from rest_framework import generics

from rest_framework import permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated


from rest_framework.generics import (
    ListAPIView,
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
    DestroyAPIView,
    CreateAPIView
)

from .models import Post

from .serializers import PostSerializer, ImageSerializer

class PostCreateView(CreateAPIView):

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (permissions.AllowAny, )

    authentication_classes = [SessionAuthentication, BasicAuthentication]


class PostListView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetail(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DeletePost(DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (permissions.AllowAny, )


