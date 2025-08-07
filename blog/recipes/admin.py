from django.contrib import admin
from .models import Recipe
# Register your models here.

@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('id', 'User', 'title', 'created_at')
    search_fields = ('title', 'User')
    list_filter = ('title',)
    ordering = ('title',)
   
