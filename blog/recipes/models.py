


from django.db import models
from django.conf import settings
import uuid
from django.utils.text import slugify

class Recipe(models.Model):
   
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='recipes'
    )
    
    title = models.CharField(max_length=255,null="false")
    description = models.TextField(null="false")
    slug=models.SlugField(unique=True,null=True,blank=True)
    recipe_image=models.ImageField(upload_to="Recipe",null="False")
    prep_time = models.TimeField(help_text="Preparation time in minutes",null="false")
    cook_time = models.TimeField(help_text="Cooking time in minutes", null="false")
    
    created_at = models.DateTimeField(auto_now_add=True,null="false")
    updated_at = models.DateTimeField(auto_now=True,null="false")

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Recipe, self).save(*args, **kwargs)
        
 

    def __str__(self):
        return self.title
    
class Nutritions(models.Model):
    recipe = models.ForeignKey(
        Recipe,
        on_delete=models.CASCADE,
        related_name='nutritions'
    )
    item = models.CharField(max_length=100 ,null="false")
    quantity = models.IntegerField(null="false")
   

    def __str__(self):
        return f"{self.quantity} : {self.item}..." 


class Ingredient(models.Model):
    recipe = models.ForeignKey(
        Recipe,
        on_delete=models.CASCADE,
        related_name='ingredients'
    )
    item = models.CharField(max_length=100 ,null="false")
    quantity = models.IntegerField(null="false")
   

    def __str__(self):
        return f"{self.quantity} : {self.item}..." 

class Instruction(models.Model):
    recipe = models.ForeignKey(
        Recipe,
        on_delete=models.CASCADE,
        related_name='instructions'
    )
    step_number = models.PositiveIntegerField(null="false")
    description = models.TextField()

    class Meta:
        ordering = ['step_number']

    def __str__(self):
        return f" {self.step_number}: {self.description[:50]}..."