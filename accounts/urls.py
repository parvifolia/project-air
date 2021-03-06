from django.urls import path, include
from .api import RegisterAPI, LoginAPI , UserAPI
from knox import views as knox_views

urlpatterns = [
    path('api/user',include('knox.urls')),
    path('api/user/register', RegisterAPI.as_view()),
    path('api/user/login', LoginAPI.as_view()),
    path('api/user/auth', UserAPI.as_view()),

    # Destroy the current user TOKEN with knox logout
    path('api/user/logout', knox_views.LogoutView.as_view(),name='knox_logout')
]