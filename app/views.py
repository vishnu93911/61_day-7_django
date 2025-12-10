from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

# def home(request):
#     return HttpResponse("this is home view") # only str
def Home(request):
    return render(request,"home.html")

def Contact(request):
    return render(request,"contact.html")

def About(request):
    return render(request,"about.html")

def Login(request):
    return render(request,"Login.html")

