from django.urls import path


from .views import (
    PostListView,
    PostDetail,
    DeletePost,
    CreateAPIView,
    PostCreateView,
    FeaturesListView,
    InsightsListView

)

urlpatterns = [
    path('posts/', PostListView.as_view()),
    path('posts/<int:pk>/', PostDetail.as_view()),
    path('posts/delete/<int:pk>/', DeletePost.as_view()),
    path('posts/create/', PostCreateView.as_view()),
    path('features/', FeaturesListView.as_view()),
    path('insights/', InsightsListView.as_view())
]