#!/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
from dateutil.parser import parse
from pytz import timezone
import csv
import re
data = []

with open('customerData.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        data.append(row)

for i in range(0,6):
    parsed = parse(data[i]["Member Date"], fuzzy=True)
    parsed = parsed.replace(tzinfo=timezone('UTC'))
    parsed = parsed.strftime("%Y/%m/%d")
    print(f"Row {i}: {parsed}")
