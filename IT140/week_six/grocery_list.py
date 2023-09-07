"""
Final Project Script Two Submission: Grocery List Script
Bradley Jackson
10/13/19
"""
grocery_item = {}
# Create empty dictionary for grocery items
grocery_history = []
# Create empty list to store grocery items
running = True
# Loop control variable
grand_total = 0.00

while running:
# While loop based on boolean value of "stop" variable 
  item_name = input("Item name:\n")
  quantity = input("Quantity purchased:\n")
  cost = input("Price per item:\n")
  grocery_item = {
    "name": item_name,
    "number": int(quantity),
    "price": float(cost)
  }
  # Adding k,v pairs to grocery_item based on user input
  grocery_history.append(grocery_item)
  # Adding grocery item dictionary to list of items
  choice = input("Would you like to enter another item?\nType 'c' for continue or 'q' to quit:\n")
  # Modify loop control variable or continue
  if choice == "c":
    pass
  elif choice == "q":
    running = False
  else:
    pass
    # I could have made this evaluation better but it would lead to verbose code.  This works!

for item in grocery_history:
# Item-based for loop
  item_total = item["number"] * item["price"]
  # Accessing values using keys
  grand_total = grand_total + item_total
  print("{} {} @ ${:.2f} EA ${:.2f}".format(item["number"], item["name"].upper(), item["price"], item_total))
  item_total = 0

print("GRAND TOTAL: ${:.2f}".format(grand_total))
