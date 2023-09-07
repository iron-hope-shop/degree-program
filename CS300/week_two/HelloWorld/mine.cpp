#include <iostream>
#include <vector>
using namespace std;

void selectionSort(vector<int> &bids)
{
  //define min as int (index of the current minimum bid)
  int i, min;
  size_t pos;

  // check size of bids vector
  // set size_t platform-neutral result equal to bid.size()
  size_t bidsSize = bids.size();

  // pos is the position within bids that divides sorted/unsorted
  // for size_t pos = 0 and less than size -1
  for (pos = 0; pos < bidsSize - 1; ++pos)
  {
    // set min = pos
    min = pos;
    // loop over remaining elements to the right of position
    for (i = pos + 1; i < bidsSize; ++i)
    {
      // if this element's title is less than minimum title
      // this element becomes the minimum
      if (bids[i] < bids[min])
      {
        min = i;
      }
    }
    // swap the current minimum with smaller one found
    // swap is a built in vector method
    swap(bids.at(pos), bids.at(min));
  }
}

int partition(vector<int> &bids, int begin, int end)
{
  //set low and high equal to begin and end
  int low = begin;
  int high = end;

  // pick the middle element as pivot point
  int pivot = low + (high - low) / 2;
  pivot = bids[pivot];
  // while not done
  while (low <= high)
  {
    // keep incrementing low index while bids[low] < bids[pivot]
    while (bids[low] < pivot)
    {
      low++;
    }
    // keep decrementing high index while bids[pivot] < bids[high]
    while (bids[high] > pivot)
    {
      high--;
    }
    /* If there are zero or one elements remaining,
            all bids are partitioned. Return high */
    if (low <= high)
    {
      // else swap the low and high bids (built in vector method)
      swap(bids.at(low), bids.at(high));
      // move low and high closer ++low, --high
      low++;
      high--;
    }
  }
  //return high;
  return high;
}

void quickSort(vector<int> &bids, int begin, int end)
{
  //set mid equal to 0
  // int mid = 0;

  /* Base case: If there are 1 or zero bids to sort,
     partition is already sorted otherwise if begin is greater
     than or equal to end then return*/
  if (end < begin)
  {
    /* Partition bids into low and high such that
     midpoint is location of last element in low */
    int pivot = partition(bids, begin, end);
    // recursively sort low partition (begin to pivot-1)
    quickSort(bids, begin, pivot - 1);
    // recursively sort high partition (pivot to end)
    quickSort(bids, pivot, end);
  }
}

int main()
{
  // Define a vector to hold all the bids
  vector<int> bids;
  bids.push_back(9);
  bids.push_back(20);
  bids.push_back(8);
  for (int x : bids)
    cout << x << " ";
  cout << "\n";
  selectionSort(bids);
  for (int x : bids)
    cout
        << x << " ";
  cout << "\n";
  quickSort(bids, 0, bids.size() - 1);
  for (int x : bids)
    cout
        << x << " ";
  cout << "\n";

  return 0;
}