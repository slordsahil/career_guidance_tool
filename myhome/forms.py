from django import forms
from .models import Images



class Imageform(forms.ModelForm):
    class Meta:
        model=Images
        fields=("name","file")
        