from django.urls import path

from .views import (
    PostListView,
    PostDetail
)

urlpatterns = [
    path('posts/', PostListView.as_view()),
    path('posts/<int:pk>/', PostDetail.as_view()),
]