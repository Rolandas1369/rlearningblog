from django.urls import path

from .views import (
    PostListView,
    PostDetail,
    DeletePost,
    CreateAPIView,
    PostCreateView,
    FeaturesListView,
    FeatureCreateView,
    DeleteFeature,
    InsightsListView,
    HtmlStylingChangeSerializerView,
    DeleteInsight,
    InsightCreateView,
    UpdatePostView,
    TechStackView,
    TechFeaturesView,
    WorkExpirienceView
)

urlpatterns = [
    path('posts/', PostListView.as_view()),
    path('posts/<int:pk>/', PostDetail.as_view()),
    path('posts/delete/<int:pk>/', DeletePost.as_view()),
    path('posts/update/<int:pk>/', UpdatePostView.as_view()),
    path('posts/create/', PostCreateView.as_view()),
    
    path('features/', FeaturesListView.as_view()),
    path('features/create/', FeatureCreateView.as_view()),
    path('features/delete/<int:pk>/', DeleteFeature.as_view()),

    path('insights/', InsightsListView.as_view()),
    path('insights/create/', InsightCreateView.as_view()),
    path('insights/delete/<int:pk>/', DeleteInsight.as_view()),

    path('techstack/', TechStackView.as_view()),
    path('techskills/', TechFeaturesView.as_view()),
    path('workexpierence/', WorkExpirienceView.as_view()),
    
    path('html/<int:pk>/',HtmlStylingChangeSerializerView.as_view())
]