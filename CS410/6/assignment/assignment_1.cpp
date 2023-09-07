#include <iostream>
using namespace std;

void DisplayMenu() {
  // Fixed Error: changed it from a nmerical list to a char list.
  // Now, the user can enter something from the list without the program crashing. 
   cout << "----------------" << endl;
   cout << "A) Add -" << endl;
   cout << "B) Subtract -" << endl;
   cout << "C) Multiply -" << endl;
   cout << "D) Exit -" << endl;
   cout << "----------------" << endl;
}

int main()
{
    string input;
    DisplayMenu();
    cin >> input;
    
    
    if(input == "A"){
        // Fixed Error: assocated with intger addation (can't handle float arithmetic)
        float AddNumOne, AddNumTwo;
        cin >> AddNumOne;
        cin >> AddNumTwo;
        float AddTotal = AddNumOne + AddNumTwo;
        cout << AddNumOne << " + " << AddNumTwo << " = " << AddTotal << endl;
        main();
    }
    
    if(input == "B"){
      // Fixed Error: it dose subtraction instead of addation. 
      // Also, it can now handle non-integer numbers. 
        float subOne, subTwo;
        cin >> subOne;
        cin >> subTwo;
        float SubTotal = subOne - subTwo;
        cout << SubTotal << " - " << subOne << " = " << subTwo << endl;
        main();
    }
    
    // Fixed Error: The program will now multiply instead of subtraction.
    // Fixed Error: Floating point exception (core dumped) when the user enters zero
    if(input == "C"){
        float multiplyOne, multiplyTwo;
        cin >> multiplyOne;
        cin >> multiplyTwo;
        float multiplyTotal = multiplyOne * multiplyTwo;
        cout << multiplyTotal << " * " << multiplyOne << " = " << multiplyTwo << endl;
        main();
    }
    
    // Fixed Error: to the correct exit before it was input == 5.
    // Also, I moved the exit to the bottom of the list so it's in numerical order.
    if(input == "D"){
        exit(0);
    }
    
    // Fixed Error: When the user types something not from the list
    else{
        cout << "Error " << input  << " command not recognised "<< endl; 
        main();
    }

    return 0;
}