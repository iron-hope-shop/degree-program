#include <iostream>
using namespace std;

int main()
{
  int radius, area;
  cout << "Enter the Radius: " << endl;
  cin >> radius;
  area = 3.14 * radius * (radius * radius);
  cout << "\nThe volume is: " << area;
  return 1;
}