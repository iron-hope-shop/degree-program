//============================================================================
// Name        : VectorSorting.cpp
// Author      : Brad Jackson
// Version     : 2.0
// Copyright   : Copyright © 2017 SNHU COCE
// Description : Vector Sorting Algorithms
//============================================================================

#include <algorithm>
#include <iostream>
#include <time.h>

#include "CSVparser.hpp"

using namespace std;

//============================================================================
// Global definitions visible to all methods and classes
//============================================================================

// define a structure to hold course information
struct Course
{
    string courseNumber;
    string courseName;
    string prerequisites;
};

/**
 * Display the course information to the console (std::out)
 *
 * @param course struct containing the course info
 */
void displayCourse(Course course)
{

    cout << course.courseNumber << ": " << course.courseName << " | " << course.prerequisites << endl;
    return;
}

/**
 * Load a CSV file containing courses into a container
 *
 * @param csvPath the path to the CSV file to load
 * @return a container holding all the courses read
 */
vector<Course> loadCourses(string csvPath)
{
    cout << "Loading CSV file " << csvPath << endl;

    // Define a vector data structure to hold a collection of courses.
    vector<Course> courses;

    // initialize the CSV Parser using the given path
    csv::Parser file = csv::Parser(csvPath);

    try
    {
        // loop to read rows of a CSV file
        for (int i = 0; i < file.rowCount(); i++)
        {

            // Create a data structure and add to the collection of courses
            Course course;
            course.courseNumber = file[i][0];
            course.courseName = file[i][1];
            course.prerequisites = file[i][2];

            // push this course to the end
            courses.push_back(course);
        }
    }
    catch (csv::Error &e)
    {
        std::cerr << e.what() << std::endl;
    }
    return courses;
}

/**
 * Partition the vector of courses into two parts, low and high
 *
 * @param courses Address of the vector<Course> instance to be partitioned
 * @param begin Beginning index to partition
 * @param end Ending index to partition
 */
int partition(vector<Course> &courses, int begin, int end)
{
    //set low and high equal to begin and end
    int low = begin;
    int high = end;

    // pick the middle element as pivot point
    int pivot = low + (high - low) / 2;
    pivot = courses[pivot];
    // while not done
    while (low <= high)
    {
        // keep incrementing low index while courses[low] < courses[pivot]
        while (courses[low] < pivot)
        {
            low++;
        }
        // keep decrementing high index while courses[pivot] < courses[high]
        while (courses[high] > pivot)
        {
            high--;
        }
        /* If there are zero or one elements remaining,
            all courses are partitioned. Return high */
        if (low <= high)
        {
            // else swap the low and high courses (built in vector method)
            swap(courses.at(low), courses.at(high));
            // move low and high closer ++low, --high
            low++;
            high--;
        }
    }
    //return high;
    return high;
}

/**
 * Perform a quick sort on course name
 * Average performance: O(n log(n))
 * Worst case performance O(n^2))
 *
 * @param courses address of the vector<Course> instance to be sorted
 * @param begin the beginning index to sort on
 * @param end the ending index to sort on
 */
void quickSort(vector<Course> &courses, int begin, int end)
{
    //set mid equal to 0
    // int mid = 0;

    /* Base case: If there are 1 or zero courses to sort,
     partition is already sorted otherwise if begin is greater
     than or equal to end then return*/
    if (end < begin)
    {
        /* Partition courses into low and high such that
     midpoint is location of last element in low */
        int pivot = partition(courses, begin, end);
        // recursively sort low partition (begin to pivot-1)
        quickSort(courses, begin, pivot - 1);
        // recursively sort high partition (pivot to end)
        quickSort(courses, pivot, end);
    }
}

/**
 * The one and only main() method
 */
int main(int argc, char *argv[])
{

    // process command line arguments
    string csvPath;

    // prompt the user to ask for the file name that contains the course data
    cout << "File name that contains the course data?" << endl;
    cin >> csvPath;

    // Define a vector to hold all the courses
    vector<Course>
        courses;

    int choice = 0;
    while (choice != 9)
    {
        cout << "Menu:" << endl;
        cout << "  1. Load Data Structure" << endl;
        cout << "  2. Print Course List" << endl;
        cout << "  3. Print Course" << endl;
        cout << "  9. Exit" << endl;
        cout << "Enter choice: ";
        cin >> choice;

        switch (choice)
        {

        case 1:
            // Initialize a timer variable before loading courses

            // Complete the method call to load the courses
            courses = loadCourses(csvPath);

            break;

        case 2:
            // alpha sort the courses before printing
            quickSort(courses, 0, courses.size() - 1);

            // Loop and display the courses read
            for (int i = 0; i < courses.size(); ++i)
            {
                displayCourse(courses[i]);
            }
            cout << endl;

            break;

        case 3:
            string courseNumber;
            // prompt user to input course number
            cout << "Enter course number: ";
            cin >> courseNumber;
            for (int i = 0; i < courses.size(); ++i)
            {
                // test if course exists
                if (courses[i].courseNumber == courseNumber)
                {
                    // print course information
                    cout << courses[i].courseName << endl;
                    for (int j = 0; j < courses.size(); ++j)
                    {
                        //continue to print prerequisite course information
                        if (courses[j].courseNumber == courses[i].prerequisites)
                        {
                            cout << courses[j].courseNumber << "|" << courses[j].courseName << endl;
                            ;
                        }
                    }
                }
            }
            break;
        }
    }

    cout << "Good bye." << endl;

    return 0;
}
