from rest_framework import serializers

from api_blog.models import (
     Post, 
     Image, 
     Feature, 
     Insight, 
     HtmlStylingChange, 
     TechStack, 
     TechFeatures,
     WorkExperiece,
     KnownTech
)

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'content','image', 'filename', 'gist_id', 'gist_filename', 
                  'video_src', 'language_choice') # add 'language_choice to serializers'

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('image')

class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = ('__all__')

class InsightsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Insight
        fields = ('__all__')

class HtmlStylingChangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = HtmlStylingChange
        fields = ('__all__')

# Cv related
class TechStackSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechStack
        fields = ('__all__')

class TechFeaturesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechFeatures
        fields = ('__all__')

class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperiece
        fields = ('__all__')

class KnownTechSerializer(serializers.ModelSerializer):
    class Meta:
        model = KnownTech
        fields = ('__all__')