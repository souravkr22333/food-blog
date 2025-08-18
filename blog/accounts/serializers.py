from ast import Import
from accounts.models import User,UserProfile
from rest_framework import serializers
from recipes.serializers import  IngredientSerializer,InstructionSerializer
from recipes.models import Recipe

class Userserializer(serializers.ModelSerializer):
    password= serializers.CharField(max_length=55,write_only=True, style={'input_type':"password"})
    class Meta:
        model=User
        fields=['id','username','email','password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
        )
        return user
    



class RecipeSerializer(serializers.ModelSerializer):
   

    class Meta:
        model = Recipe
        fields = ['title',  'recipe_image','slug']

class UserProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')
    email = serializers.EmailField(source='user.email')
    image_url = serializers.SerializerMethodField()
    recipes = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = ['username', 'email', 'user_bio', 'date_of_birth', 'name', 'image_url', 'recipes']

    def get_image_url(self, obj):
        if obj.image and obj.image.url:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None

    def get_recipes(self, obj):
        # Get recipes through the user's reverse relation
        recipes = obj.user.recipes.all()
        return RecipeSerializer(recipes, many=True, context=self.context).data
