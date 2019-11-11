print('---Students Details---')
Name = raw_input('Enter the Name:')
RegNo = input('Enter the Regno:')
print('Enter the Marks:')
marks =[]
for i in range(0,4):
    num = int(input())
    marks.append(num)
avg = int(sum(marks)/4)
print('Name :')
print(Name)
print('RegNo :')
print(RegNo)
print('Marks are:')
print(marks)
print('Total:')
print(sum(marks))
print('Average:')
print(avg)
if avg > 90 & avg >70:
    print('Excellent')
elif avg<50 & avg>60:
    print('Good')
else:
    print('Bad')
