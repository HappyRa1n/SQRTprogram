from django import forms
from .models import *

class CalcForm(forms.Form):
    calc_num=forms.CharField()