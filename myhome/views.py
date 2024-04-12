from django.shortcuts import render,HttpResponse,redirect,HttpResponseRedirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache
from PyPDF2 import PdfReader
from .models import Images
from .forms import Imageform
from django.urls import reverse
import os
from dotenv import load_dotenv
import json
load_dotenv()
from django.core import serializers
import google.generativeai as genai
from joblib import load
from sklearn.preprocessing import StandardScaler
scaler=StandardScaler()
from django.http import JsonResponse

model=load('saveModels/model.joblib')
finalpred=[]
def call_api(prompt,images_uploaded,vnumber=0):
    genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
    model = genai.GenerativeModel('gemini-pro')
    if vnumber==1:
        text=""
        pdf_reader=PdfReader(images_uploaded)
        for page in pdf_reader.pages:
            text+=page.extract_text()
        # image_path=Path(images_uploaded)
        # image_part={
        #     "mime_type":"image/jpeg",
        #     "data":image_path.read_bytes()
            
        # }
        responses = model.generate_content([prompt,text])
    else:
        
        responses = model.generate_content([prompt,images_uploaded])
        
    
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

def careerguidance(request):
    return render(request,'CareerGuidance.html')

def courses(request):
    return render(request,'Courses.html')

def jobfor(request):
    return render(request,'Jobfor.html')


@login_required(login_url='login')
def test_page(request):

    if request.method == 'POST':
        datasold =json.loads(request.POST.get('data'))
        print(datasold)
        datas=[0]*21
        j=0
        for i in range(0,len(datasold),3):
            0
            datas[j]=sum([int(datasold[i]),int(datasold[i+1]),int(datasold[i+2])])
            j+=1
        print(datas)
        print(datasold)
        
        
        tets_a=scaler.fit_transform([datas])
        global finalpred
        finalpred=str(model.predict(tets_a))
        print(finalpred)

        return render(request,'test_page1.html',{'preda':finalpred})

    return render(request,'test_page1.html')
            

def result(request):
    global finalpred
    api_response=call_api("Generate a comprehensive paragraph outlining the essential skills, knowledge,tools,technology and understanding required for a career as a s",finalpred)

    return render(request,'Result.html',{"refinal":finalpred,"api_call":api_response})

def resume_checker(request):   
    if request.method == "POST":
        form=Imageform(data=request.POST,files=request.FILES)
        if form.is_valid():
            form.save()
            image_instance = Images.objects.latest('id') 
            # Retrieve the instance using the primary key or any other unique identifier

            # Access the path of the uploaded image
            image_path = image_instance.file.path
            obj=form.instance
            api_response=call_api("adding my resume contents ,now tell me what changes must be done in this to make it better and give a list of career field that i can cater according to my resume",image_path,1)
            return render(request,"resume.html",{"obj":obj,"api_response":api_response})
    else:
        form=Imageform()
    img=Images.objects.all()
    return render(request,"resume.html",{"img":img,"form":form})
    

