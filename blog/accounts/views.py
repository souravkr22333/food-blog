from django.shortcuts import render
from .serializers import Userserializer,UserProfileSerializer
from rest_framework import generics
from accounts.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
# Create your views here.

class Registerview(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = Userserializer
    permission_classes= [AllowAny]

class Loginview(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class=Userserializer
    permission_classes=[AllowAny]




class UserProfileDetailView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, username):
        user = get_object_or_404(User, username=username)
        profile = user.profile
        recipes = user.recipes.all()  # Get all recipes for this user
        
        # Pass both profile and recipes in context
        serializer = UserProfileSerializer(profile, context={
            'request': request,
            'recipes': recipes
        })
        
        return Response(serializer.data)

