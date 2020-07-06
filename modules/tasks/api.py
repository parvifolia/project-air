from modules.tasks.models import Task
from rest_framework import viewsets, permissions
from .serializers import TaskSerializer

# Task Viewset for Router
class TaskViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = TaskSerializer

    def get_queryset(self):
        return self.request.user.tasks.all()

    #save the owner when request made
    def perform_create(self,serializer):
        serializer.save(owner=self.request.user)