//
//  main.cpp
//  assignment6_1.cpp
//
//  Created by Janera Dobson on 2/13/21.
//

#include <iostream>

using namespace std;

/* DisplayMenu() menu
void DisplayMenu(){
cout <<"----------------"<< endl;
cout <<"- 1) Subtract -"<< endl;
cout <<"- 2) Add -"<<endl;
cout <<"- 3) Divide -"<< endl;
cout <<"- 4) Exit -"<< endl;
cout <<"----------------"<< endl;
}

int main(int argc, char** argv){
int choice = 0;
DisplayMenu();
cin >> choice;
while (choice != 5){
int num1, num2;
if (choice == 1){
cin >> num1;
cin >> num2;
cout << num1 << " - " << num2 << " = " << num1 - num2 << endl;
} else if (choice == 2){
cin >> num1;
cin >> num2;
cout << num1 << " + " << num2 << " = " << num1 + num2 << endl;
} else if (choice == 3){
double num1, num2;
cin >> num1;
cin >> num2;
cout << num1 << " / " << num2 << " = " << num1/num2 << endl;
}
DisplayMenu();
 cin >> choice;
}
}
*/



void DisplayMenu() {

  cout << "----------------" << endl;

  cout << "- 1) Subtract -" << endl; //Originally Add

  cout << "- 2) Add -" << endl; //Originally Subtract

  cout << "- 3) Divide -" << endl; //Originally Multiply

  cout << "- 4) Exit -" << endl;

  cout << "----------------" << endl;

}

int main(int argc, char ** argv) {

  int choice = 0;

  DisplayMenu();

  cin >> choice;

  while (choice != 4) { //Change 5 to 4 to fit DisplayMenu

      int num1, num2;
      
      cout << "Please Enter  First Number: " << endl;
      
      cin >> num1;
      
      cout << "Please Enter  Second Number: " << endl;
      
      cin >> num2;

    if (choice == 1) {

      cout << num1 << " - " << num2 << " = " << num1 - num2 << endl;

    } else if (choice == 2) {

      cout << num1 << " + " << num2 << " = " << num1 + num2 << endl; //Change " - " to " + " to fit output

    } else if (choice == 3) {

      cout << num1 << " / " << num2 << " = " << (double) num1 / (double) num2 << endl; //Change " - " to " / " to fit output
    }
    else
        {
            
            cout << "ERROR: Please Enter Valid Input" << endl;
        }

        DisplayMenu();

        cin >> choice;

      }

    }


/* Errors and vulnerabilities:
1. else in if-else statement not attempted if the user enter the wrong choice therefore, now the program will give user an error message
2. multiple-input statements was unnecessary
3. I needed to display a message to ask for input for better readability
*/