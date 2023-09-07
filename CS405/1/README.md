How to run:

1. `g++ -std=c++11 -o ./numo ./NumericOverflows.cpp`
2. `./numo`
3. Profit

<!-- 
You will also create a brief written summary of the approach taken. It should explain how this approach is designed to stop the overflow or underflow, any issues you encountered, and how you resolved those issues. 

I modified the Numeric Overflow source code to prevent overflow and underflow.  My approach was to use the numeric_limits class in the standard library to determing the max and min of the passed value.  I could have gone further and done this on a type-by-type basis (using enable_if), but that seemed a little bulky and out of the scope of the assignment.  The main problem I have with C++ in general is that it is extremelt literal and I am very used to Python; similarly, I encountered some issues with build errors which were remedied by adding the "-std=c++11" argument to my GNU C++ command.  I also had a few type errors crop up.  Luckily I have been troubleshooting application errors for a while now and worked them out.  Note: I compiled my app for an ARM64 target if you have any issues running it, it may have to be rebuilt using "g++ -std=c++11 -o ./numo ./NumericOverflows.cpp" sorry about that.
-->