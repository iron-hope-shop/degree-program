// Brad Jackson
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
//        Buddha bless this code to be bug free

#include <iostream>
#include <string>
#include <regex>
using namespace std;

// 👇 Init local variables
string name1 = "Bob Jones";
string name2 = "Sarah Davis";
string name3 = "Amy Friendly";
string name4 = "Johnny Smith";
string name5 = "Carol Spears";
// 👇 HCP 🚨🚨🚨🚨
string password = "123";

int num1 = 1;
int num2 = 1;
int num3 = 1;
int num4 = 1;
int num5 = 2;

// 👇 Print out a beautiful table of client information
void DisplayInfo()
{
    cout << "Client's Name   Service Selected (1 = Brokerage, 2 = Retirement)" << endl;
    cout << "1. " << name1 << " selected option " << num1 << endl;
    cout << "2. " << name2 << " selected option " << num2 << endl;
    cout << "3. " << name3 << " selected option " << num3 << endl;
    cout << "4. " << name4 << " selected option " << num4 << endl;
    cout << "5. " << name5 << " selected option " << num5 << endl;
}

// 👇 Function to change client service type
void ChangeCustomerChoice()
{
    int changeChoice;
    int newservice;

    cout << "Enter the number of the client that you wish to change" << endl;
    cin >> changeChoice;
    cout << "Please enter the client's new service choice (1 = Brokerage, 2 = Retirement)" << endl;
    cin >> newservice;

    switch (changeChoice)
    {
    case 1:
        num1 = newservice;
        break;
    case 2:
        num2 = newservice;
        break;
    case 3:
        num3 = newservice;
        break;
    case 4:
        num4 = newservice;
        break;
    case 5:
        num5 = newservice;
        break;
    default:
        break;
    }
}

// 👇 Authenticated and authorize the user
bool CheckUserPermissionAccess()
{
    string uid;
    string passwd;
    cout << "Enter your username:" << endl;
    cin >> uid;
    cout << "Enter your password:" << endl;
    cin >> passwd;
    if (passwd == "123")
    {
        cout << "Hello! Welcome to our Investment Company" << endl;
        return true;
    }
    else
    {
        cout << "Invalid Password. Please try again" << endl;
        return false;
    }
}

// 👇 Main execution flow
int main()
{
    // 👇 My attempt at using the same nomenclature as the object file
    int answer;
    string changeChoice;
    regex integer_expr("(\\+|-)?[[:digit:]]+");

    cout << "Created by 🅱️rad Jackson @ 04/02/2023" << endl;

    // 👇 Auth&auth
    answer = CheckUserPermissionAccess();

    // 👇 Continue printing options if the user is authenticated
    while (answer)
    {
        cout << "What would you like to do?" << endl;
        cout << "DISPLAY the client list (enter 1)" << endl;
        cout << "CHANGE a client's choice (enter 2)" << endl;
        cout << "Exit the program.. (enter 3)" << endl;
        cin >> changeChoice;

        if (!cin)
        {
            changeChoice = 4;
        }
        else
        {
            cout << "You chose " << changeChoice << endl;
        }
        if (regex_match(changeChoice, integer_expr))
        {
            int choice = stoi(changeChoice);
            // 👇 Execute user's choice
            switch (choice)
            {
            case 1:
                DisplayInfo();
                break;
            case 2:
                ChangeCustomerChoice();
                break;
            case 3:
                exit(0);
            default:
                break;
            }
        }
        else
        {
            break;
        }
    }
}
