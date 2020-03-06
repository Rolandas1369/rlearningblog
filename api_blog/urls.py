from django.urls import path

from .views import (
    PostListView,
    PostDetail,
    DeletePost
    
    
    
)

urlpatterns = [
    path('posts/', PostListView.as_view()),
    path('posts/<int:pk>/', PostDetail.as_view()),
    path('posts/delete/<int:pk>/', DeletePost.as_view()),
    
]