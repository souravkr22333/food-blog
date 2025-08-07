from django.shortcuts import render
from .serializers import Userserializer
from rest_framework import generics
from accounts.models import User
from rest_framework.permissions import AllowAny
# Create your views here.

class Registerview(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = Userserializer
    permission_classes= [AllowAny]

class Loginview(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class=Userserializer
    permission_classes=[AllowAny]