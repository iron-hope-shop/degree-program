// Encryption.cpp
// Author: Bradley.Jackson2@snhu.edu
// Summary: This file contains the 'main' function. Program execution begins and ends there.
//

#include <cassert>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <sstream>
#include <ctime>

/// <summary>
/// encrypt or decrypt a source string using the provided key
/// </summary>
/// <param name="source">input string to process</param>
/// <param name="key">key to use in encryption / decryption</param>
/// <returns>transformed string</returns>
std::string encrypt_decrypt(const std::string &source, const std::string &key)
{
  // 👇 get lengths now instead of calling the function every time.
  // 👇 this would have most likely been inlined by the compiler, but design for perfomance.
  const auto key_length = key.length();
  const auto source_length = source.length();

  // 👇 assert that our input data is good
  assert(key_length > 0);
  assert(source_length > 0);

  std::string output = source;

  // 👇 loop through the source string char by char
  for (size_t i = 0; i < source_length; ++i)
  {
    // 👇 transform each character based on an xor of the key modded constrained to key length using a mod
    output[i] = source[i] ^ key[i % key.length()];
  }

  // 👇  our output length must equal our source length
  assert(output.length() == source_length);

  // 👇  return the transformed string
  return output;
}

std::string read_file(const std::string &filename)
{
  // 👇 initialize an empty string
  std::string file_text = "";
  std::string string;

  // 👇 open a file stream with which to read the file
  std::ifstream file_stream(filename);

  while (std::getline(file_stream, string))
  {
    // 👇 newline separator in file
    file_text += string + "\n";
  }

  file_stream.close();

  return file_text;
}

std::string get_student_name(const std::string &string_data)
{
  std::string student_name;

  // 👇 find the first newline
  size_t pos = string_data.find('\n');
  // 👇 did we find a newline
  if (pos != std::string::npos)
  {
    // 👇 we did, so copy that substring as the student name
    student_name = string_data.substr(0, pos);
  }

  return student_name;
}

void save_data_file(const std::string &filename, const std::string &student_name, const std::string &key, const std::string &data)
{
  // 👇 retrieve current timestamp
  std::time_t current_time = std::chrono::system_clock::to_time_t(std::chrono::system_clock::now());
  char buf[100] = {0};

  // 👇 format time
  std::strftime(buf, sizeof(buf), "%Y-%m-%d", std::localtime(&current_time));

  // 👇 store data to the file with ofstream
  std::ofstream file_stream(filename);

  // 👇 write out data to the file and close the stream
  file_stream << student_name << std::endl;
  file_stream << buf << std::endl;
  file_stream << key << std::endl;
  file_stream << data << std::endl;
  file_stream.close();
}

int main()
{
  std::cout << "Encyption Decryption Test!" << std::endl;

  const std::string file_name = "inputdatafile.txt";
  const std::string encrypted_file_name = "encrypteddatafile.txt";
  const std::string decrypted_file_name = "decrytpteddatafile.txt";
  const std::string source_string = read_file(file_name);
  const std::string key = "password";

  // 👇 get the student name from the data file
  const std::string student_name = get_student_name(source_string);

  // 👇 encrypt sourceString with key
  const std::string encrypted_string = encrypt_decrypt(source_string, key);

  // 👇 save encrypted_string to file
  save_data_file(encrypted_file_name, student_name, key, encrypted_string);

  // 👇 decrypt encryptedString with key
  const std::string decrypted_string = encrypt_decrypt(encrypted_string, key);

  // 👇 save decrypted_string to file
  save_data_file(decrypted_file_name, student_name, key, decrypted_string);

  std::cout << "Read File: " << file_name << " - Encrypted To: " << encrypted_file_name << " - Decrypted To: " << decrypted_file_name << std::endl;

}
