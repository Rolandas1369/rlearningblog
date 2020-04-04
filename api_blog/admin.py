from django.contrib import admin

from api_blog.models import Post, Feature, Insight


admin.site.register(Post)
admin.site.register(Insight)
admin.site.register(Feature)