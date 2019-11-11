ls=["Revathy","Dhiya","Ashok","Aravindh"]
query="select * from CoverDetail where "
print(query,end="")
for i in ls:
    condition = "name = '%{}%' OR ".format(i)
    query = query + condition
print(query[0:len(query)-3],end="")


print("") 
l="REVATHY"
print(len(l))
print(l[0:len(l)-2])
                                            