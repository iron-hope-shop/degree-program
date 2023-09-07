#include <iostream>
#include <string>
using namespace std;


int num1 = 1, num2 = 2, num3 = 1, num4 = 2, num5 = 1;
string name1 = "Bob Jones";
string name2 = "Sarah Davis";
string name3 = "Amy Friendly";
string name4 = "Johnny Smith";
string name5 = "Carol Spears";


void DisplayInfo() {
  cout << name1 << " " <<  num1 << endl;
  cout << name2 << " " <<  num2 << endl;
  cout << name3 << " " << num3 << endl;
  cout << name4 << " " << num4 << endl;
  cout << name5 << " " << num5 << endl;
}


bool CheckUserPermissionAccess(string Uname, string pass){
  if(pass == "password"){
    return true;
  } 
  else{
    return false;
  }
}

 void ChangeCustomerChoice() {
   int changeChoice, newservice;
   
   cout << "Enter the number of the client that you wish to change" << endl;
   cin >> changeChoice;
   
   cout << "Please enter the client's new service choice (1 = Brokerage, 2 = Retirement)" << endl;
   cin >> newservice;
   
   if(changeChoice == 1){
     num1 = newservice;
   }
    if(changeChoice == 2){
     num2 = newservice;
   }
    if(changeChoice == 3){
     num3 = newservice;
   }
    if(changeChoice == 4){
     num4 = newservice;
   }
    if(changeChoice == 5){
     num5 = newservice;
   }
 } 



int main() {
  int answer;
  string username, password;
  cout << "Reverse Engineered by Skylar Loomis" << endl;
do {
  cout << "Enter your username:" << endl;
  cin  >> username;
  
  cout << "Enter your password:" << endl;
  cin >> password;
  answer = CheckUserPermissionAccess(username, password);

  if(answer == false){
    cout << "Invalid Password. Please try again" << endl;
  }
}
while (answer != true);

  int choice;
  cout << "Hello! Welcome to our Investment Company" << endl;
  cout << "What would you like to do?" << endl;
  cout << "DISPLAY the client list (enter 1)" << endl;
  cout << "CHANGE a client's choice (enter 2)" << endl;
  cout << "Exit the program.. (enter 3)" << endl;
  
  cin >> choice; 
  cout << "You chose " <<  choice << endl; 
  
  if(choice == 1){
    DisplayInfo();
  }
  
  if(choice == 2){
    ChangeCustomerChoice();
  }
  
  if(choice == 3){
    exit(0);
  }
}