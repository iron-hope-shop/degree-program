// BufferOverflow.cpp
// Author: Bradley.Jackson2@snhu.edu
// Summary: This file contains the 'main' function. Program execution begins and ends there.
//

#include <iomanip>
#include <iostream>

int main()
{
  // 👇 set an only-positive limit for number of allowed chars
  const unsigned int char_limit = 20;

  std::cout << "Buffer Overflow Example" << std::endl;

  const std::string account_number = "CharlieBrown42";
  char user_input[char_limit];

  // 👇 disclaimer to users that we are only accepting the first n characters
  std::cout << "Enter a value (max " << char_limit << " characters): ";
  
  // 👇 get only the first n chars based on the limit we set
  std::cin.getline(user_input, char_limit);

  // 👇 reminder that we are only accepting the first n characters
  std::cout << "You entered (only first " << char_limit << " characters are accepted): " << user_input << std::endl;
  std::cout << "Account Number = " << account_number << std::endl;
}
