//============================================================================
// Name        : Project1.cpp
// Author      : Janera Dobson
// Version     :
// Copyright   : Your copyright notice
// Description : Hello World in C++, Ansi-style
//============================================================================

#include <iostream>
#include <Arrays>
using namespace std;

String names[] = {"Janera Dobson", "Ashley Dobson", "Diandre Figueroa", "Justice Braxton", "Nate Smith"};
int choice[] = {1, 2, 3};

















void DisplayInfo() {
	int i;
		for (i = 0; i < 5; i++) {
			cout << customer[i],choice[i]);
			}
	}

void ChangeCustomerChoice() {
	cout << "Enter customer choice:\n";
		cin >> name;
		cout << "Enter password:\n";
		cin >> password;
			}

int CheckUserPermissionAccess() {
	String pass[] = '3333';
	String name[] = "";
	if ((password, pass) == 0) {
		return 1;
	} else {
		return 0;
	}
}


int main() {
	cout << "Created by: " + names.String(1);
    
    int password;
    int choice;
    
    if ( password => 1) {
        CheckUserPermissionAccess();
    } else {
        break;
    }
    
    
    

	DisplayInfo();
	int access = CheckUserPermissionAccess();
	ChangeCustomerChoice();
	if(access == 1) {
		DisplayInfo();
		cout << ("Change Customer Choice");
		char choice = 'Y';
		char value = 'X';
		cin >> value;
	if (choice == value) {
		cout << "Enter customer choice\n";
		int i;
		for(i = 0; i < 5; i++) {
			cout >> customer[i];
			cin >> choice[i];

		}
	}
	cout << "You have successfully changed customer choice:\n";
	DisplayInfo();
	} else {
		return (0);
	}
	return (EXIT_SUCCESS);
}







Address    String
0x0    Bob Jones
0x8    Hello! Welcome to our Investment Company
0x10    Sarah Davis
0x20    Amy Friendly
0x30    Johnny Smith
0x38    Invalid Password. Please try again
0x40    Carol Spears
0x41    zPLR
0x5c    What would you like to do?
0x78    DISPLAY the client list (enter 1)
0xa0    CHANGE a client's choice (enter 2)
0xc4    Exit the program.. (enter 3)
0xe2    You chose
0xee    Enter your username:
0x105    Enter your password:
0x120    Client's Name Service Selected (1 = Brokerage, 2 = Retirement)
0x168    selected option
0x190    Enter the number of the client that you wish to change
0x1c8    Please enter the client's new service choice (1 = Brokerage, 2 = Retirement)