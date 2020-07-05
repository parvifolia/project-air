from rest_framework import serializers
from modules.tasks.models import Task

# Serializer for our Task app

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'