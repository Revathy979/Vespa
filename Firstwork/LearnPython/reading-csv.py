file_open = open("textfile.txt","r")
emp_dict = {}
emp_ls = []
if file_open.mode == "r":
    read_file = file_open.readlines()
for i in read_file:
    split_data = i.strip()
    print(split_data)
    d = split_data.split(",")
    emp_dict = {"Name":d[0].replace('"',""),"Age":d[1].replace('"',"")}
    emp_ls.append(emp_dict)   
print(emp_ls)
search_name = str(input("Enter the Search Name:"))
search_char = str(input("Enter the Search Name:"))
for j in emp_ls:
    if search_char.lower() in j['Name'].lower():
        print(j)
    if j['Name'].lower() == search_name.lower():
        print(j)
    



  
  
  
    






  
