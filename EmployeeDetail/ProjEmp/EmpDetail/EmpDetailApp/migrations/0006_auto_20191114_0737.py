# Generated by Django 2.0.3 on 2019-11-14 07:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EmpDetailApp', '0005_auto_20191114_0735'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employeedetail',
            name='code',
            field=models.CharField(default='Emp000', max_length=30),
        ),
    ]
