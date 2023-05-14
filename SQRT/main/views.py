from django.shortcuts import render
from django.http import HttpResponse

from main.forms import CalcForm
# Create your views here.

def findSQRT(num):
    try:
        num= num.replace('i','j')
        v=complex(num)
        v=v**0.5
        
        if v.imag == 0j:
            return "√"+str(num)+" = "+str(v.real)
        else:
            return  "√"+str(num)+" = "+str(v)
    except:
        return "Введите корректное число!"
def index(request):
    if request.method == "POST":
        form= CalcForm(request.POST)
        res=findSQRT(request.POST.get('calc_num'))
    else:
        form = CalcForm()
        res=""
    return render(request, 'main/index.html', {'form': form, 'result':res })
def help(request):
    return render(request, 'main/help.html')