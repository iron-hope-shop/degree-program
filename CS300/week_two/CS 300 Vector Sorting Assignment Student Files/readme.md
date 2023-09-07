# Code Reflection
<!-- A brief explanation of the code and its purpose, and a brief discussion of your experience in developing it, including any issues that you encountered while completing the exercise and what approaches you took to solve them -->
This cpp program was created to sort a municipal government data feed containing bids submitted for auction of property.  More specifically, it educated me on two methods of sorting data.  I struggled, at first, to even get the program to compile on my Macbook; however, I was able to modularize the functions and then scaffold them into the original template.  The approaches I took to solve all of my issues: Google it.  It seems that the quick-sort algorithm is much faster than the selection-sort algorithm.  I found this interesting and I wish to understand that further and I wonder what other optimizations I could be making to my own projects.

# Psuedocode
## selectionSort
for each position in a given vector of Bid data:
  check if each element is less than the ones before it
  swap this element with the previous smallest element if it is smaller

## partition
while there are unprocessed elements in bids:
  swap high and low bids until the middle index of the data is reached

## quickSort
until each index of bids is exhausted:
  partition bids based on beginning and ending index
  invoke self for the next beginning index
  invoke self for the next ending index