from django.db import models
from django.contrib.auth.models import User

from django.contrib.auth import get_user_model
User = get_user_model()
# Create your models here.
class Recipe(models.Model):
    User = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    ingredients = models.TextField()
    instructions = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
