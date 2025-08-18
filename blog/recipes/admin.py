from django.contrib import admin
from .models import Recipe , Ingredient, Instruction,Nutritions
# Register your models here.

@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('id', 'title','slug', 'created_at')
    search_fields = ('title', 'User')
    list_filter = ('title',)
    ordering = ('title',)
   
@admin.register(Instruction)
class InstructionAdmin(admin.ModelAdmin):
    list_display = ('id',  'step_number','description')

@admin.register(Ingredient)
class IngredientAdmin(admin.ModelAdmin):
    list_display = ('id',  'item', 'quantity')

@admin.register(Nutritions)
class nutritionAdmin(admin.ModelAdmin):
    list_display=('id','item','quantity')
