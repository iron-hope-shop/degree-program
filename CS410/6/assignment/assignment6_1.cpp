// Brad Jackson
// 🐰 Happy Easter! 🥚
//
// 👇 scanned entire file with cppcheck, no CVEs
#include <iostream>
using namespace std;

void DisplayMenu() {
   cout << "----------------" << endl;
   cout << "- 1)Add -" << endl;
   cout << "- 2)Subtract -" << endl;
   cout << "- 3)Multiply -" << endl;
   cout << "- 4)Exit -" << endl;
   cout << "----------------" << endl;
}

int main() {
    // 👇 I could not find all of these variables declared, I am guessing
    // 👇 the loop was done in another way which was exposing the application
    // 👇 or doing another check on the input which was not needed
    int a, b, input, output;
    
    DisplayMenu();

    // 👇 inputs of NaN will result in an error and safe program exit
    cin >> input;

    // 👇 I also may have misinterpreted the choices, I did not validate whether
    // 👇 the actual execution was correct for each operator (addition, 
    // 👇 subtraction, multiplication)
    if(input == 1){
        cin >> a;
        cin >> b;
        output = a + b;
        cout << " = " << output << endl;
        main();
    }

    if(input == 2){
        cin >> a;
        cin >> b;
        output = a - b;
        cout << " = " << output << endl;
        main();
    }

    if(input == 3){
        cin >> a;
        cin >> b;
        output = a * b;
        cout << " = " << output << endl;
        main();
    }

    if(input == 4){
        exit(0);
    }
}