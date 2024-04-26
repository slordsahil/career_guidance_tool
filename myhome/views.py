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
import google.generativeai as genai
from joblib import load
from sklearn.preprocessing import StandardScaler
scaler=StandardScaler()

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
        
        
        tets_a=([datas])
        print(tets_a)
        global finalpred
        finalpred=str(model.predict(tets_a))
        print(finalpred)

        return render(request,'test_page1.html',{'preda':finalpred})

    return render(request,'test_page1.html')
            

def result(request):
    global finalpred
    arr1="https://www.coursera.org/specializations/machine-learning-introduction"
    arr2="https://www.coursera.org/search?query=data%20analyst"
    arr3="https://www.coursera.org/search?query=data%20scientist"
    arr4="https://www.coursera.org/search?query=%27information_security_analyst"
    arr5="https://www.coursera.org/search?query=software%20developer"
    
    print(finalpred)
    
    dict_career={"['machine_learning']":arr1,"['data_analyst']":arr2,"['data_scientist']":arr3,"['information_security_analyst']":arr4,"['software_developer/engineer']":arr5}
    link_career=dict_career[finalpred]
    print(link_career)
    api_response=call_api("Generate a 100 words  comprehensive  paragraphs  outlining each of the following 1-the essential skills 2- knowledge& tools  3-technology  4- understanding ,,,required for a career as a",finalpred)

    return render(request,'Result.html',{"refinal":finalpred,"api_call":api_response,"link_career":link_career})

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
            api_response=call_api("create an comprehensive paragraph outlining my resume that what should i improve and which field is best for me from my resume which is",image_path,1)
            return render(request,"resume.html",{"obj":obj,"api_response":api_response})
    else:
        form=Imageform()
    img=Images.objects.all()
    return render(request,"resume.html",{"img":img,"form":form})
    

