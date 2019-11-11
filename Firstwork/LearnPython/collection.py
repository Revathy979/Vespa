array =[]
print('----Array value----')
for i in range(0,4):
    value= raw_input()
    array.append(value)
print(array)
# Here an item append to the array
array.append("Hello")
print(array)
# Here an item insert to the array using index
array.insert(1,"Hai")
print(array)
array.insert(2,['Good','Morning'])
print(array)
# Here an item removed from the array
array.remove("Hai")
print(array)
# Here an element from last is popped from the array
array.pop()
print(array)
# reverse a list
array.reverse()
print(array)
# sort a list
array.sort()
print(array)
print("-----Tuple-----")
tuples=(4,6,3,7,0)
print(tuples)
print("-----Set------")
set1={1,2,3,4}
set2={3,4,5,6}
print("Set1 value:")
print(set1)
print("Set2 value:")
print(set2)
#intersection of set 1 and 2
set3 = set1 & set2
print("Intersection of 1 and 2:set3")
print(set3)
# union of set 1 and 2
set4 = set1 | set2
print("Union of 1 and 2:set4")
print(set4)
# difference 
set5 = set4 - set1
print("Diff set 4-set1:set5")
print(set5)
# <= operator
set6 = set1 <= set4
print("set4 contain set1")
print(set6)
# >= operator
set7 = set1 >= set4
print("set 1 contain set4")
print(set7)
# adding an item to a set5
set5.add('a')
print("set 5 :")
print(set5)
# Length of a set
print("length of set5")
print (len(set5))
# membership operator in/not in
set8 =5 in set5
print(set8)
set9 = 'b'in set5
print(set9)
print("------Dictionary-----")
d={
    'Name':'Revathy',
    'Age': 20,
    'Height':5.5
}
print(d)
print(d.keys())
print(d.values())
print(d.items())
print(d['Name'])
d['dob']='dec'
print(d)
print("------Dictionary in List-----")
array.append(d)
print(array)