d = 5
y = []
n = 0
sum = 0
print(range(d))
for i in range(d):
  if i == 0:
    x = (1.1*1000)-80
    y.append(x)
  else:
    x = (1.1*y[-1])-80
    y.append(x)
print(y)
# for i in y:
#   sum += i

# print(sum)