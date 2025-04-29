from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    """
    Serializador para o modelo Task.
    
    Este serializador é usado para converter instâncias do modelo Task para e a partir do formato JSON.
    Ele inclui os seguintes campos:
    - id: O identificador único da tarefa.
    - title: O título da tarefa.
    - description: Uma descrição detalhada da tarefa.
    - completed: Um booleano indicando se a tarefa foi concluída.
    - created_at: O timestamp de quando a tarefa foi criada.
    - updated_at: O timestamp de quando a tarefa foi atualizada pela última vez.
    """
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'completed', 'created_at', 'updated_at']