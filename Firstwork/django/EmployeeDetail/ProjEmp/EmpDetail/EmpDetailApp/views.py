from django.shortcuts import render,redirect
from EmpDetailApp.models import EmployeeDetail

def home(request):
    return render(request, 'index.html')

def add(request):
    if request.method == 'GET':
        return render(request, 'add.html')

    elif request.method == 'POST':
        code = request.POST.get("code")
        fname = request.POST.get("FirstName")
        lname = request.POST.get("LastName")
        email = request.POST.get("Email")
        phone = request.POST.get("Phone")
        employee = EmployeeDetail(code=code, fname=fname, lname=lname, email=email, phone=phone)
        employee.save()
        return redirect("/add")

def edit(request):
    return render(request, 'edit.html')

def show(request):
    return render(request, 'show.html')

def search(request):
    return render(request, 'search.html')
