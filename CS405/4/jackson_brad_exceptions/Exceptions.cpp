// Exceptions.cpp
// Author: Bradley.Jackson2@snhu.edu
// Summary: This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>

// 👇 structure which inherits from std::exception
// 👇 and returns a custom message
struct ExceptionHandler : public std::exception
{
    virtual const char *what() const noexcept(true)
    {
        return "🚨 Custom error message";
    }
};

bool do_even_more_custom_application_logic()
{
    // 👇 throw a standard exception
    throw std::bad_weak_ptr();

    std::cout << "Running Even More Custom Application Logic." << std::endl;

    return true;
}
void do_custom_application_logic()
{
    // 👇 exception handler that catches std::exception,
    std::cout << "Running Custom Application Logic." << std::endl;

    try
    {
        if (do_even_more_custom_application_logic())
        {
            std::cout << "Even More Custom Application Logic Succeeded." << std::endl;
        }
    }
    catch (const std::exception &e)
    {
        // 👇 displays a message and the exception.what(),
        // 👇 then continues processing
        std::cerr << "💣 Caught an exception of type: " << e.what() << std::endl;
    }

    // 👇 throw a custom exception derived from std::exception
    throw ExceptionHandler();

    std::cout << "Leaving Custom Application Logic." << std::endl;
}

float divide(float num, float den)
{
    // 👇 throw an exception to deal with divide by zero errors using
    // 👇 a standard C++ defined exception
    if (den == 0)
    {
        throw std::logic_error("🚨 Error: Cannot divide by zero.");
    }
    return (num / den);
}

void do_division() noexcept
{
    float numerator = 10.0f;
    float denominator = 0;

    // 👇 create an exception handler to capture ONLY the exception
    // 👇 thrown by divide.
    try
    {
        auto result = divide(numerator, denominator);
        std::cout << "divide(" << numerator << ", " << denominator << ") = " << result << std::endl;
    }
    catch (std::logic_error &e)
    {
        std::cout << e.what() << std::endl;
    }
}

int main()
{
    std::cout << "Exceptions Tests!" << std::endl;

    try
    {
        do_division();
        do_custom_application_logic();
    }
    // 👇 exception handler to catch my custom exception
    catch (ExceptionHandler &e)
    {
        std::cout << e.what() << std::endl;
    }
    // 👇 catch std::exception
    catch (std::exception &e)
    {
        std::cout << e.what() << std::endl;
    }
    // 👇 catch uncaught exception
    catch (...)
    {
        // 👇 displays a message to the console.
        std::cerr << "An unexpected exception occured." << std::endl;
    }
}
