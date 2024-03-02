from django.urls import path
from myhome import views

urlpatterns = [
    path("", views.index,name='myhome'),
    path("login/",views.log_in,name='login'),
    path('register/',views.register,name='register'),
    path('home_page/',views.home_page,name='home'),
    path('logout/',views.log_out,name='logout')
    ]
