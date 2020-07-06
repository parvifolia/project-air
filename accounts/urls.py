from django.urls import path, include
from .api import RegisterAPI
from knox import views as knox_views

urlpatterns = [
    path('api/user',include('knox.urls')),
    path('api/user/register', RegisterAPI.as_view()),
]