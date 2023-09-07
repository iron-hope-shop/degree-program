#include <iostream>
using namespace std;

int main()
{
    int binary;
    int decimal = 0;
    int base = 1;

    cout << "Enter the binary number: " << endl;
    cin >> binary;

    while (binary != 0)
    {
        int prev = binary % 10;
        binary = binary / 10;
        decimal += prev * base;
        base = base * 2;
    }
    cout << "Equivalent decimal value: " << decimal;

    return 0;
}