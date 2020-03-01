from django.urls import path

from .views import (
    PostListView,
)

urlpatterns = [
    path('api/', PostListView.as_view()),
]