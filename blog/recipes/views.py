


from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics, permissions, status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Recipe
from .serializers import RecipeSerializer


class RecipeListCreateView(generics.ListCreateAPIView):
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]
   
    
    def get_queryset(self):
        return Recipe.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
       
        serializer.save(user=self.request.user)

class RecipeDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RecipeSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return Recipe.objects.filter(user=self.request.user)
    

    
class RecipeListView(generics.ListAPIView):
    serializer_class = RecipeSerializer
    def get_queryset(self):
        return Recipe.objects.all()
    

class TrandingView(generics.ListAPIView):
    serializer_class = RecipeSerializer
    def get_queryset(self):
        return Recipe.objects.all().order_by('-created_at')[:10]
    
    


class RecipecardView(APIView):
    """
    Retrieve a recipe by its slug.
    """
    serializer_class = RecipeSerializer
    permission_classes = [AllowAny]
    def get(self, request, slug):
        recipe = get_object_or_404(Recipe, slug=slug)  # 404 if not found
        user=recipe.user
       
       
        
        serializer = RecipeSerializer(recipe, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)
