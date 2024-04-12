from django.urls import path
from myhome import views

urlpatterns = [
    path("", views.index,name='myhome'),
    path("login/",views.log_in,name='login'),
    path('register/',views.register,name='register'),
    path('home_page/',views.home_page,name='home'),
    path('logout/',views.log_out,name='logout'),
    path('test/',views.test_page,name='test_page'),
    path('result/',views.result,name='result'),
    path('jobfor/',views.jobfor,name='jobfor'),
    path('courses/',views.courses,name='courses'),
    path('careerguidance/',views.careerguidance,name='careerguidance'),
    path('resume_checker/',views.resume_checker,name='resume_checker'),
    ]
