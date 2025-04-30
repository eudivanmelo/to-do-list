from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gerenciar as operações CRUD para o modelo Task.
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer