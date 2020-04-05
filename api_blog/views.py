from django.shortcuts import render
from rest_framework import generics

from rest_framework import permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.decorators import login_required



from django.contrib.auth.mixins import LoginRequiredMixin

from rest_framework.generics import (
    ListAPIView,
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
    DestroyAPIView,
    CreateAPIView
)

from .models import Post, Feature, Insight

from .serializers import PostSerializer, ImageSerializer, FeatureSerializer, InsightsSerializer


class PostCreateView(LoginRequiredMixin, CreateAPIView):

    login_url = '/rest-auth/login/'
    redirect_field_name = 'redirect_to'

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (permissions.IsAuthenticated, )

    authentication_classes = [SessionAuthentication, BasicAuthentication]

class PostListView(ListAPIView):

    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DeletePost(DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (permissions.IsAuthenticated, )

class FeaturesListView(ListAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer

class FeatureCreateView(LoginRequiredMixin, CreateAPIView):
    
    login_url = '/rest-auth/login/'
    redirect_field_name = 'redirect_to'

    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer
    permission_classes = (permissions.IsAuthenticated, )

class InsightsListView(ListAPIView):
    queryset = Insight.objects.all()
    serializer_class = InsightsSerializer


