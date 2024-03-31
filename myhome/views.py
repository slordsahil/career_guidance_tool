from django.shortcuts import render,HttpResponse,redirect,HttpResponseRedirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache
from .models import Images
from .forms import Imageform
from django.urls import reverse
import os
from PIL import Image
from dotenv import load_dotenv
load_dotenv()
import base64
from PIL import Image
import google.generativeai as genai

def call_api(prompt,images_uploaded):
    genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
    model = genai.GenerativeModel('gemini-pro')
    responses = model.generate_content(prompt+images_uploaded)
    return  responses.text



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

@login_required(login_url='login')
def test_page(request):
    return render(request,'test_page.html')

def resume_checker(request):   
    if request.method == "POST":
        form=Imageform(data=request.POST,files=request.FILES)
        if form.is_valid():
            form.save()
            obj=form.instance
            api_response=call_api("entering resume details give the corection and which field is best for this",form.cleaned_data['name'])
            return render(request,"resume.html",{"obj":obj,"api_response":api_response})
    else:
        form=Imageform()
    img=Images.objects.all()
    return render(request,"resume.html",{"img":img,"form":form})
    

