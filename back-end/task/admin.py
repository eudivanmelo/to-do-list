from django.contrib import admin
from .models import Task

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'completed', 'created_at', 'updated_at')
    search_fields = ('title',)
    list_filter = ('completed', 'created_at')
    ordering = ('-created_at',)
    date_hierarchy = 'created_at'