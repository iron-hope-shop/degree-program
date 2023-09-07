#include <iostream>
#include <string>
#include <vector>
using namespace std;

//tsk tsk.. global variables
vector<int> serviceChoice{ 1, 2, 1, 1, 2 };
string name1 = "Bob Jones";
string name2 = "Sarah Davis";
string name3 = "Amy Friendly";
string name4 = "Johnny Smith";
string name5 = "Carol Spears";
int num1 = serviceChoice[0];
int num2 = serviceChoice[1];
int num3 = serviceChoice[2];
int num4 = serviceChoice[3];
int num5 = serviceChoice[4];


vector<int> changeCustomerChoice(vector<int> serviceChoice, int client, int service) {
	//serviceChoice[client] << -service;
	//cout << serviceChoice[client] << endl;
	if (client == 1) {
		num1 = service;
	}
	else if (client == 2) {
		num2 = service;
	}
	else if (client == 3) {
		num3 = service;
	}
	else if (client == 4) {
		num4 = service;
	}
	else if (client == 5) {
		num5 = service;
	}
	else {
		//TODO::Handle exceptions?
	}

	return serviceChoice;

}

void displayInfo() {

	cout << "You chose 1" << endl;
	cout << "  Client's Name    Service Selected (1 = Brokerage, 2 = Retirement)" << endl;
	cout << "1. " << name1 << " selected option " << num1  << endl;
	cout << "2. " << name2 << " selected option " << num2 << endl;
	cout << "3. " << name3 << " selected option " << num3 << endl;
	cout << "4. " << name4 << " selected option " << num4 << endl;
	cout << "5. " << name5 << " selected option " << num5 << endl;

}


void checkUserPermission() {
	int  option, password;
	int loopMenu = 1;
	cout << "Enter your password:" << endl;
	cin >> password;

	if (password == 123) {
		while (loopMenu){
		cout << "What would you like to do?" << endl;
		cout << "DISPLAY the client list (enter 1)" << endl;
		cout << "CHANGE a client's choice (enter 2)" << endl; 
		cout << "Exit the program.. (enter 3)" << endl;
		cin >> option;

		if (option == 1) {
			displayInfo();
		}
		else if (option == 2) {
			//pray for death
			int client, service;
			cout << "You chose 2" << endl;
			cout << "Enter the number of the client that you wish to change" << endl;
			cin >> client;
			cout << "Please enter the client's new service choice (1 = Brokerage, 2 = Retirement)" << endl;
			cin >> service;
			changeCustomerChoice(serviceChoice, client, service);
		}
		else if (option == 3) {
			cout << "You chose 3" << endl;
			loopMenu = 0;
		}
		else if (option > 3){
			loopMenu = 1;
		}
		}

	}
	else {
		cout << "Invalid Password. Please try again\n";
		password = '\0';
		checkUserPermission();

	}
}



int main() {
	string user;
	cout << "Created by Dilli Vanilli" << endl;
	cout << "Hello! Welcome to our Investment Company" << endl;
	cout << "Enter your username:" << endl;
	getline(cin, user);
	checkUserPermission();


}