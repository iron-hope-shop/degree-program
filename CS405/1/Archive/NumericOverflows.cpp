//
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
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Code Buddha, bless this code to be bug free
//
// NumericOverflows.cpp
// Author: Bradley.Jackson2@snhu.edu
// Summary: This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <limits>

/// <summary>
/// Template function to abstract away the logic of:
///   start + (increment * steps)
/// </summary>
/// <typeparam name="T">A type that with basic math functions</typeparam>
/// <param name="start">The number to start with</param>
/// <param name="increment">How much to add each step</param>
/// <param name="steps">The number of steps to iterate</param>
/// <returns>start + (increment * steps)</returns>
template <typename T>
T add_numbers(T const &start, T const &increment, unsigned long int const &steps)
{
    // 👇 set result to start value passed
    T result = start;

    // 👇 set auto variable to hold max value of input type
    constexpr auto max_lim = std::numeric_limits<T>::max();

    // 👇 variable to hold value of max - result to compare it to increment
    T max_val{};

    // 👇 loop increments based on number of steps passed
    for (unsigned long i = 0; i < steps; ++i)
    {
        // 👇 get new value each iteration
        max_val = max_lim - result;

        // 👇 catch overflow and throw exception if condition met
        if (max_val <= increment)
        {
            throw std::overflow_error("OVERFLOW!");
        }

        // 👇 no OVERLFOW!
        result += increment;
    }

    return result;
}

/// <summary>
/// Template function to abstract away the logic of:
///   start - (increment * steps)
/// </summary>
/// <typeparam name="T">A type that with basic math functions</typeparam>
/// <param name="start">The number to start with</param>
/// <param name="increment">How much to subtract each step</param>
/// <param name="steps">The number of steps to iterate</param>
/// <returns>start - (increment * steps)</returns>
template <typename T>
T subtract_numbers(T const &start, T const &decrement, unsigned long int const &steps)
{
    // 👇 set result to start value passed
    T result = start;

    // 👇 set auto variable to hold min value of input type
    constexpr auto min_lim = std::numeric_limits<T>::min();

    // 👇 variable to hold value of minimum allowed val before underflow
    const auto min_val = decrement + min_lim;

    // 👇 loop increments based on number of steps passed
    for (unsigned long i = 0; i < steps; ++i)
    {
        // 👇 check underflow
        if (result < min_val)
        {
            throw std::underflow_error("UNDERFLOW!");
        }

        // 👇 no UNDERFLOW!
        result -= decrement;
    }

    return result;
}

//  NOTE:
//    You will see the unary ('+') operator used in front of the variables in the test_XXX methods.
//    This forces the output to be a number for cases where cout would assume it is a character.

template <typename T>
void test_overflow()
{
    // START DO NOT CHANGE
    // 👇  how many times will we iterate
    const unsigned long int steps = 5;
    // 👇 how much will we add each step (result should be: start + (increment * steps))
    const T increment = std::numeric_limits<T>::max() / steps;
    // 👇 whats our starting point
    const T start = 0;

    std::cout << "Overflow Test of Type = " << typeid(T).name() << std::endl;
    // END DO NOT CHANGE

    // 👇 try/catch block to catch OVERFLOW!
    try
    {
        std::cout << "\tAdding Numbers Without Overflow (" << +start << ", " << +increment << ", " << steps << ") = ";
        T result = add_numbers<T>(start, increment, steps);
        std::cout << +result << std::endl;

        std::cout << "\tAdding Numbers With Overflow (" << +start << ", " << +increment << ", " << (steps + 1) << ") = ";
        result = add_numbers<T>(start, increment, steps + 1);
        std::cout << +result << std::endl;
    }
    catch (std::exception x)
    {
        std::cout << x.what() << std::endl;
    }
}

template <typename T>
void test_underflow()
{
    // START DO NOT CHANGE
    // 👇  how many times will we iterate
    const unsigned long int steps = 5;
    // 👇 how much will we subtract each step (result should be: start - (increment * steps))
    const T decrement = std::numeric_limits<T>::max() / steps;
    // 👇 whats our starting point
    const T start = std::numeric_limits<T>::max();

    std::cout << "Underflow Test of Type = " << typeid(T).name() << std::endl;
    // END DO NOT CHANGE

    // 👇 try/catch block to catch underflow
    try
    {
        std::cout << "\tSubtracting Numbers Without Underflow (" << +start << ", " << +decrement << ", " << steps << ") = ";
        T result = subtract_numbers<T>(start, decrement, steps);
        std::cout << +result << std::endl;

        std::cout << "\tSubtracting Numbers With Underflow (" << +start << ", " << +decrement << ", " << (steps + 1) << ") = ";
        result = subtract_numbers<T>(start, decrement, (steps * 2) + 1);
        std::cout << +result << std::endl;
    }
    catch (std::exception x)
    {
        std::cout << x.what() << std::endl;
    }
}

void do_overflow_tests(const std::string &star_line)
{
    std::cout << std::endl
              << star_line << std::endl;
    std::cout << "*** Running Overflow Tests ***" << std::endl;
    std::cout << star_line << std::endl;

    // Testing C++ primative times see: https://www.geeksforgeeks.org/c-data-types/
    // 👇 signed integers
    test_overflow<char>();
    test_overflow<wchar_t>();
    test_overflow<short int>();
    test_overflow<int>();
    test_overflow<long>();
    test_overflow<long long>();

    // 👇 unsigned integers
    test_overflow<unsigned char>();
    test_overflow<unsigned short int>();
    test_overflow<unsigned int>();
    test_overflow<unsigned long>();
    test_overflow<unsigned long long>();

    // 👇 real numbers
    test_overflow<float>();
    test_overflow<double>();
    test_overflow<long double>();
}

void do_underflow_tests(const std::string &star_line)
{
    std::cout << std::endl
              << star_line << std::endl;
    std::cout << "*** Running Undeflow Tests ***" << std::endl;
    std::cout << star_line << std::endl;

    // Testing C++ primative times see: https://www.geeksforgeeks.org/c-data-types/
    // 👇 signed integers
    test_underflow<char>();
    test_underflow<wchar_t>();
    test_underflow<short int>();
    test_underflow<int>();
    test_underflow<long>();
    test_underflow<long long>();

    // 👇 unsigned integers
    test_underflow<unsigned char>();
    test_underflow<unsigned short int>();
    test_underflow<unsigned int>();
    test_underflow<unsigned long>();
    test_underflow<unsigned long long>();

    // 👇 real numbers
    test_underflow<float>();
    test_underflow<double>();
    test_underflow<long double>();
}

/// <summary>
/// Entry point into the application
/// </summary>
/// <returns>0 when complete</returns>
int main()
{
    // 👇  create a string of "*" to use in the console
    const std::string star_line = std::string(50, '*');

    // 👇 change order to reflect order of tests
    std::cout << "Starting Numeric Overflow / Underflow Tests!" << std::endl;

    // 👇 run the overflow tests
    do_overflow_tests(star_line);

    // 👇 run the underflow tests
    do_underflow_tests(star_line);

    // 👇 change order to reflect order of tests
    std::cout << std::endl
              << "All Numeric Overflow / Underflow Tests Complete!" << std::endl;

    return 0;
}
