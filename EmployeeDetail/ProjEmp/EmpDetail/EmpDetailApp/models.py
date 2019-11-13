from django.db import models

# Create your models here.

class EmployeeDetail(models.Model):
    code = models.CharField(max_length=6)
    fname = models.CharField(max_length=45)
    lname = models.CharField(max_length=30)
    email = models.EmailField()
    phone = models.CharField(max_length=10)

    class Meta:
        db_table = "EmployeeDetail"
