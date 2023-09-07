// VulnerableCalculator.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <climits>
using namespace std;

void displayMenu() {
    int x, y, selection, solution;
    int displayLoop = 1;

    cout << "----------------" << endl;
    cout << "- 1)Add -" << endl;
    cout << "- 2)Subtract -" << endl;
    cout << "- 3)Multiply -" << endl;
    cout << "- 4)Exit -" << endl;
    cout << "----------------" << endl;
    cin >> selection;
    //Security vulnerability existed on cin for selection variable, this block ensures in case of failure the buffer is restored
    //Due to the new structure of displayMenu(), this also handles when users try to input out of range values for x or y and 
    //informs the user and goes back to the menu.
    while (cin.fail()) {
        cin.clear(); // clear input buffer to restore cin to a usable state
        cin.ignore(INT_MAX, '\n'); // ignore last input
        cout << "You can only enter valid numbers.\n";
        cout << "Enter a number.\n";
        cin >> selection;
    }

    while (displayLoop) {
        if (selection == 1) {
            cin >> x >> y;
            solution = x + y;
            cout << x << " + " << y << " = " << solution << endl;
            displayLoop = 0;
            displayMenu();
        }
        else if (selection == 2) {
            cin >> x >> y;
            solution = x - y;
            cout << x << " - " << y << " = " << solution;
            displayLoop = 0;
            displayMenu();
        }
        else if (selection == 3) {
            cin >> x >> y;
            solution = x * y;
            cout << x << " * " << y << " = " << solution;
            displayLoop = 0;
            displayMenu();
        }
        //Below are extra measures to validate 'selection' input that may cause issues
        else if (selection >= 4){
            displayLoop = 0;
        }
        else if (selection < 1) {
            displayLoop = 0;
            displayMenu();
        }
        else
            displayLoop = 1;
    }
}

int main()
{
    displayMenu();
}