// Validation.cpp
// Author: Bradley.Jackson2@snhu.edu
// Summary: Could not compile to arm64 so this will validate my application of regex to <input>
//

#include <iomanip>
#include <iostream>
#include <regex>

int main()
{
  // 👇 set an only-positive limit for number of allowed chars
  std::cout << "SQL Injection Detection Example" << std::endl;

  const std::string account_number = "CharlieBrown42";
  std::string user_input;
  std::cout << "Enter a value: ";
  std::cin >> user_input;

  // 👇 regex to match “OR value=value;” attack
  std::regex re("('(.*)[a-zA-Z](.*)'='(.*)[a-zA-Z](.*)')|([0-9]=[0-9])");
  std::smatch match;

  // 👇 find regex match and throw error if match is found
  if (std::regex_search(user_input, match, re) && match.size() > 1)
  {
    std::cout << "SQL Injection attack detected: " << user_input << std::endl;
  }
  else
  {
    // 👇 reminder that we are only accepting the first n characters
    std::cout << "This string is safe: " << user_input << std::endl;
  }
}
