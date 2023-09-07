#!/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
import csv
import re
data = []

with open('customerData.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        data.append(row)

customer = str(input("Who would you like to search for? "))
customer = customer.split()
customerLen = len(customer)
# The highest number of names per person is three.
pattern = ""

if customerLen == 0:
    print("Please provide a customer name.")
elif customerLen == 1:
# Could be first name, middle name, last name, or title 
    pattern = r"{}".format(customer[0])
elif customerLen == 2:
# Could be a combination of two of: first name, middle name, last name, or title
    pattern = r"{}\s{}".format(customer[0], customer[1])
elif customerLen == 3:
# Customer's full name
    pattern = r"{}\s{}\s{}".format(customer[0], customer[1], customer[2])

for i in range(0,len(data)):
    if re.findall(pattern, data[i]["Name"]):
    # Returns first match
        print(data[i])
        break
