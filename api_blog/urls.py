from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import ensure_csrf_cookie


from .views import (
    PostListView,
    PostDetail,
    DeletePost,
    CreateAPIView 
)

urlpatterns = [
    path('posts/', PostListView.as_view()),
    path('posts/<int:pk>/', PostDetail.as_view()),
    path('posts/delete/<int:pk>/', DeletePost.as_view()),
    path('posts/create/', CreateAPIView.as_view())
    
]