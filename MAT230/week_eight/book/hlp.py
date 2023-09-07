import math

x = 7
y = 906

one = y % x
n = math.floor(y / x)
two = n % x
n = math.floor(n / x)
three = n % x
n = math.floor(n / x)
four = n % x

print(f"{four}{three}{two}{one}")
