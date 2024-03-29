# Generated by Django 2.0.3 on 2019-11-14 04:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EmpDetailApp', '0002_auto_20191114_0407'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employeedetail',
            name='code',
            field=models.CharField(default='Emp000', max_length=6),
        ),
        migrations.AlterField(
            model_name='employeedetail',
            name='email',
            field=models.EmailField(default='invalid@gmail.com', max_length=254),
        ),
        migrations.AlterField(
            model_name='employeedetail',
            name='fname',
            field=models.CharField(default='invalid', max_length=45),
        ),
        migrations.AlterField(
            model_name='employeedetail',
            name='lname',
            field=models.CharField(default='invalid', max_length=30),
        ),
        migrations.AlterField(
            model_name='employeedetail',
            name='phone',
            field=models.CharField(default='0', max_length=10),
        ),
    ]
