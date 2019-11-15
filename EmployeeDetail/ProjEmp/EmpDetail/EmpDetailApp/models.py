from django.db import models

# Create your models here.

class EmployeeDetail(models.Model):
    
    code = models.CharField(max_length=30, null=False, default='Emp000')
    fname = models.CharField(max_length=45,null=False, default='invalid')
    lname = models.CharField(max_length=30, null=False, default='invalid')
    email = models.EmailField(max_length=45, null=False,default='invalid@gmail.com')
    phone = models.CharField(max_length=20,null=False, default='0')

    class Meta:
        db_table = "EmployeeDetail"
