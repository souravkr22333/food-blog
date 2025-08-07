from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response

def HelloWorldView(request):
    
        return HttpResponse({"message :" "Hello, World!"})
