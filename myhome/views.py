from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache
from django.urls import reverse

def index(request):
    if request.method=='POST':
        uname=request.POST.get('username')
        email=request.POST.get('email')
        pword=request.POST.get('password')
        cpword=request.POST.get('Confirmpassword')
        college=request.POST.get('college')
        collegeID=request.POST.get('collegeid')
        contact=request.POST.get('contact')
        
        if pword!=cpword:
            return HttpResponse("PASSWORD DOESN'T MATCH")
        
        user_details=User.objects.create_user(uname,email,pword)
        user_details.save()
        return redirect('home')
    
    return render(request,'register.html')

@login_required(login_url='login')
def home_page(request):
    return render(request,'home_page.html')

def log_in(request):
    if request.method=='POST':
        uname=request.POST.get('username')
        pword=request.POST.get('password')
        user=authenticate(request,username=uname,password=pword)
        if user:
            login(request,user)
            return redirect('home')
        else:
            return HttpResponse('USERNAME OR PASSWORD INCORRECT')
        
    return render(request,'login.html')

def register(request):
    return render(request,'register.html')

@never_cache
def log_out(request):
    logout(request)
    return redirect(reverse('login'))

# Create your views here.
