from modules.tasks.models import Task
from rest_framework import viewsets, permissions
from .serializers import TaskSerializer

# Task Viewset for Router

class TaskViewset(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TaskSerializer