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
    CreateAPIView,
    UpdateAPIView,
    RetrieveAPIView
)

from .models import (
     Post, 
     Feature, 
     Insight, 
     HtmlStylingChange, 
     TechStack, 
     TechFeatures,
     WorkExperiece,
     KnownTech
)
from .serializers import (
    PostSerializer, 
    ImageSerializer, 
    FeatureSerializer, 
    InsightsSerializer,
    HtmlStylingChangeSerializer,
    TechStackSerializer,
    TechFeaturesSerializer,
    WorkExperienceSerializer,
    KnownTechSerializer
)

class PostCreateView(LoginRequiredMixin, CreateAPIView):

    login_url = '/rest-auth/login/'
    redirect_field_name = 'redirect_to'

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (permissions.IsAuthenticated, )

    authentication_classes = [SessionAuthentication, BasicAuthentication]

class UpdatePostView(LoginRequiredMixin, UpdateAPIView):

    login_url = '/rest-auth/login/'
    redirect_field_name = 'redirect_to'

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (permissions.IsAuthenticated, )

class PostListView(ListAPIView):

    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(RetrieveAPIView):
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

class FeatureCreateView(CreateAPIView):
    
    login_url = '/rest-auth/login/'
    redirect_field_name = 'redirect_to'

    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer
    permission_classes = (permissions.IsAuthenticated, )

class DeleteFeature(DestroyAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer

    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (permissions.IsAuthenticated,)



class InsightsListView(ListAPIView):
    queryset = Insight.objects.all()
    serializer_class = InsightsSerializer

class DeleteInsight(DestroyAPIView):
    queryset = Insight.objects.all()
    serializer_class = InsightsSerializer

    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = (permissions.IsAuthenticated,)

class InsightCreateView(CreateAPIView):

    login_url = '/rest-auth/login/'
    redirect_field_name = 'redirect_to'

    queryset = Insight.objects.all()
    serializer_class = InsightsSerializer
    permission_classes = (permissions.IsAuthenticated, )

class HtmlStylingChangeSerializerView(RetrieveUpdateDestroyAPIView):
    queryset = HtmlStylingChange.objects.all()
    serializer_class = HtmlStylingChangeSerializer

# cv
class TechStackView(ListCreateAPIView):
    queryset = TechStack.objects.all()
    serializer_class = TechStackSerializer

class TechFeaturesView(ListCreateAPIView):
    queryset = TechFeatures.objects.all()
    serializer_class = TechFeaturesSerializer

class WorkExpirienceView(ListCreateAPIView):
    queryset = WorkExperiece.objects.all()
    serializer_class = WorkExperienceSerializer

class KnownTechView(ListCreateAPIView):
    queryset = KnownTech.objects.all()
    serializer_class = KnownTechSerializer



