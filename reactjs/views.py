from django.shortcuts import render

# Create your views here.

def reactjs_index(request):
    return render(request,'index.html')

