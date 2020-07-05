from django.urls import path
from .views import Tasks
from rest_framework import routers
from .api import TaskViewset

routers = routers.DefaultRouter()
routers.register('api/tasks', TaskViewset, 'tasks')

urlpatterns = routers.urls

urlpatterns = [
    path('', Tasks.as_view()),
]
