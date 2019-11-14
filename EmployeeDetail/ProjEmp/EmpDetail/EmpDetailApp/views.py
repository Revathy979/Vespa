from django.shortcuts import render, redirect
from EmpDetailApp.models import EmployeeDetail
from EmpDetailApp.static.fusioncharts import FusionCharts
import pandas as pd
import xlrd


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
        employee = EmployeeDetail(
            code=code, fname=fname, lname=lname, email=email, phone=phone)
        employee.save()
        return redirect("/add")


def show(request):
    data = {}
    emplist = EmployeeDetail.objects.all()
    for i in emplist:
        data = {
            'emplist': emplist
        }
    return render(request, 'show.html', context=data)


def edit(request, code):
    if request.method == 'GET':
        employee = EmployeeDetail.objects.get(code=code)
        show = {
            "code": employee.code,
            "fname": employee.fname,
            "email": employee.email,
            "phone": employee.phone}
        return render(request, 'edit.html', context=show)

    elif request.method == 'POST':
        email = request.POST.get("Email")
        phone = request.POST.get("Phone")
        employee = EmployeeDetail.objects.get(code=code)
        employee.email = email
        employee.phone = phone
        employee.save()
        return redirect("/show")


def delete(request, code):
    employee = EmployeeDetail.objects.filter(code=code)
    employee.delete()
    return redirect("/show")


def search(request):
    data = {}
    if request.method == 'GET':
        return render(request, 'search.html')
    elif request.method == 'POST':
        print("post")
        fname = request.POST.get("searchedData")
        print(fname)
        employee = EmployeeDetail.objects.filter(fname__iregex=fname)
        # data = {'employee': employee}
        return render(request, 'searchedData.html', context={'employee': employee})


def upload(request):
    if request.method == 'GET':
        return render(request, 'upload.html')
    elif request.method == 'POST':
        print('post')
        file_name = request.POST.get("fileName")
        print(file_name)
        df = pd.read_excel('/home/iness/Revathy/Training document/'+file_name)
        row = len(df)
        col = len(df.columns)
        for i in range(0, row, 1):
            employee = EmployeeDetail(
                code=df.iloc[i][0], fname=df.iloc[i][1], lname=df.iloc[i][2], email=df.iloc[i][3], phone=df.iloc[i][4])
            employee.save()

        emplist = EmployeeDetail.objects.all()
    # with pd.ExcelWriter('newfile.xlsx') as writer:
    #     emplist.to_excel(writer, sheet_name='employeedetails')
    return render(request, 'show.html', context={'emplist': emplist})


def chart(request):
            # Create an object for the column2d chart using the FusionCharts class constructor
    column2d = FusionCharts("column2d", "ex1", "684", "476", "chart-1", "json",
                            # The data is passed as a string in the `dataSource` as parameter.
                            """{  
        "chart": {
        "caption": "Apple Annual Revenue",
        "baseFont": "Lato",
        "captionfontsize":"18",
        "subcaptionfontbold":"0",
        "subcaptionfontsize":"14",
        "subcaption": "Jan 2008- Sep 2018",
        "yaxisname": "Revenue details for past 10 year",
        "captionpadding": "20",
        "bgalpha": "0",
        "canvasbgalpha": "0",
        "showvalues": "0",
        "showborder": "0",
        "canvasborderalpha": "0",
        "showalternatehgridcolor": "0",
        "plotgradientcolor": "#1aafd0",
        "showplotborder": "0",
        "adjustDiv":"0",
        "yaxisnamefontsize":"14",
        "yAxisNameFontBold":"0",
        "yAxisValuesPadding":"18",
        "divlinealpha": "10",
        "xaxislinealpha":"20",
        "LabelPadding": "50",
        "showlabels": "0",
        "numdivlines":"4",
        "showxaxisline":"1",
        "plotspacepercent":"40",
        "yAxisValueDecimals":"0",
        "formatnumberscale": "1",
        "numberscalevalue": "24,31,12",
        "numberscaleunit": " days, months, years",
        "palettecolors": "#3be8b0",
        "plotToolText": "<div>Year : <b>$label</b><br/>Cross : <b>$value Million</b></div>",
        "defaultnumberscale": " years",
        "plotFillAlpha": "90"
      },
      "annotations": {
        "autoScale": "0",
        "scaleImages": "0",
        "origW": "400",
        "origH": "300",
        "groups": [{
          "id": "user-images",
          "items": [{
            "id": "Batman-icon",
            "type": "image",
            "url": "http://csm.fusioncharts.com/files/assets/img/wolverine.png",
            "x": "$dataset.0.set.0.CenterX - 18",
            "y": "$dataset.0.set.0.EndY + 10",
            "xScale": "75",
            "yScale": "75"
          }, {
            "id": "Wolverine-icon",
            "type": "image",
            "url": "http://csm.fusioncharts.com/files/assets/img/wolverine.png",
            "x": "$dataset.0.set.1.CenterX - 18",
            "y": "$dataset.0.set.1.EndY + 10",
            "xScale": "75",
            "yScale": "75"
          }, {
            "id": "IronMan-icon",
            "type": "image",
            "url": "http://csm.fusioncharts.com/files/assets/img/ironman.png",
            "x": "$dataset.0.set.2.CenterX - 18",
            "y": "$dataset.0.set.2.EndY + 10",
            "xScale": "75",
            "yScale": "75"
          }, {
            "id": "Deadpool-icon",
            "type": "image",
            "url": "http://csm.fusioncharts.com/files/assets/img/deadpool.png",
            "x": "$dataset.0.set.3.CenterX - 18",
            "y": "$dataset.0.set.3.EndY + 10",
            "xScale": "75",
            "yScale": "75"
          }, {
            "id": "SpiderMan-icon",
            "type": "image",
            "url": "http://csm.fusioncharts.com/files/assets/img/spiderman.png",
            "x": "$dataset.0.set.4.CenterX - 18",
            "y": "$dataset.0.set.4.EndY + 10",
            "xScale": "75",
            "yScale": "75"
          }, {
            "id": "Thor-icon",
            "type": "image",
            "url": "http://csm.fusioncharts.com/files/assets/img/thor.png",
            "x": "$dataset.0.set.5.CenterX - 18",
            "y": "$dataset.0.set.5.EndY + 10",
            "xScale": "75",
            "yScale": "75"
          }, {
            "id": "SuperMan-icon",
            "type": "image",
            "url": "http://csm.fusioncharts.com/files/assets/img/superman.png",
            "x": "$dataset.0.set.6.CenterX - 18",
            "y": "$dataset.0.set.6.EndY + 10",
            "xScale": "75",
            "yScale": "75"
          }, {
            "id": "CaptainAmerica-icon",
            "type": "image",
            "url": "http://csm.fusioncharts.com/files/assets/img/captain-america.png",
            "x": "$dataset.0.set.7.CenterX - 18",
            "y": "$dataset.0.set.7.EndY + 10",
            "xScale": "75",
            "yScale": "75"
          }]
        }]
      },
      "data": [{
        "label": "2019",
        "value": "260"
      }, {
        "label": "2018",
        "value": "265"
      }, {
        "label": "2017",
        "value": "229"
      }, {
        "label": "2016",
        "value": "215"
      }, {
        "label": "2015",
        "value": "233"
      }, {
        "label": "2014",
        "value": "185"
      }, {
        "label": "2013",
        "value": "170"
      }, {
        "label": "2012",
        "value": "156"
      }]
      }""")

    # returning complete JavaScript and HTML code, which is used to generate chart in the browsers.
    return render(request, 'chart.html', {'output': column2d.render()})
