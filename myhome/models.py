from django.db import models


class Images(models.Model):
    name=models.CharField(max_length=10000)
    file=models.ImageField(upload_to="img/",max_length=150)
    
    def __str__(self):
        return self.name
    

# Create your models here.
