

from rest_framework import serializers
from .models import Recipe, Ingredient, Instruction,Nutritions


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['item', 'quantity']

class nutritionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nutritions
        fields = ['item', 'quantity']

class InstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instruction
        fields = ['step_number', 'description']



class RecipeSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        read_only=True,
        default=serializers.CurrentUserDefault()
        
    )


    name=serializers.CharField(source='user.profile.name')
    user_image=serializers.ImageField(source='user.profile.image')
    username=serializers.CharField(source='user.profile.username')
    ingredients = IngredientSerializer(many=True)
    instructions = InstructionSerializer(many=True)
    nutritions=nutritionSerializer(many=True)

   
    
    
    class Meta:
        model = Recipe
        fields = ['user', 'title','name','user_image','username', 'description','prep_time','slug','cook_time','recipe_image','ingredients', 'instructions','nutritions', 'created_at']

    def create(self, validated_data):
        ingredients_data = validated_data.pop('ingredients')
        instructions_data = validated_data.pop('instructions')
        Nutritions_data= validated_data.pop('nutritions')
        
        recipe = Recipe.objects.create(**validated_data)
        
        for ingredient in ingredients_data:
            Ingredient.objects.create(recipe=recipe, **ingredient)

        for  nutrition in  Nutritions_data:
             Nutritions.objects.create(recipe=recipe, **nutrition)
            
        for instruction in instructions_data:
            Instruction.objects.create(recipe=recipe, **instruction)
            
        return recipe
    
    def get_recipe_image_url(self, obj):
        if obj.recipe_image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.recipe_image.url)
        return None
    
    def get_user_image_url(self,obj):
        if obj.user_image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.user_image.url)
        return None