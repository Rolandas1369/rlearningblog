from django.contrib import admin

from api_blog.models import Post, Feature, Insight, HtmlStylingChange, TechFeature, TechStack


admin.site.register(Post)
admin.site.register(Insight)
admin.site.register(Feature)
admin.site.register(HtmlStylingChange)
admin.site.register(TechFeature)
admin.site.register(TechStack)