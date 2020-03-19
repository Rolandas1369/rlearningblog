from rest_framework import serializers

from api_blog.models import Post
from api_blog.models import Image

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'content','image', 'filename', 'gist_id', 'gist_filename')

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('image')