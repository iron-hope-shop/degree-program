// test.cpp
// Author: Bradley.Jackson2@snhu.edu
// Summary: This file contains the 'main' function. Program execution begins and ends there.
//

#include "gtest/gtest.h"
// the global test environment setup and tear down
// you should not need to change anything here
class Environment : public ::testing::Environment
{
public:
  ~Environment() override {}

  // Override this to define how to set up the environment.
  void SetUp() override
  {
    //  initialize random seed
    srand(time(nullptr));
  }

  // Override this to define how to tear down the environment.
  void TearDown() override {}
};

// create our test class to house shared data between tests
// you should not need to change anything here
class CollectionTest : public ::testing::Test
{
protected:
  // create a smart point to hold our collection
  std::unique_ptr<std::vector<int>> collection;

  void SetUp() override
  { // create a new collection to be used in the test
    collection.reset(new std::vector<int>);
  }

  void TearDown() override
  { //  erase all elements in the collection, if any remain
    collection->clear();
    // free the pointer
    collection.reset(nullptr);
  }

  // helper function to add random values from 0 to 99 count times to the collection
  void add_entries(int count)
  {
    assert(count > 0);
    for (auto i = 0; i < count; ++i)
      collection->push_back(rand() % 100);
  }
};

// When should you use the EXPECT_xxx or ASSERT_xxx macros?
// Use ASSERT when failure should terminate processing, such as the reason for the test case.
// Use EXPECT when failure should notify, but processing should continue

// Test that a collection is empty when created.
// Prior to calling this (and all other TEST_F defined methods),
//  CollectionTest::StartUp is called.
// Following this method (and all other TEST_F defined methods),
//  CollectionTest::TearDown is called
TEST_F(CollectionTest, CollectionSmartPointerIsNotNull)
{
  // is the collection created
  ASSERT_TRUE(collection);

  // if empty, the size must be 0
  ASSERT_NE(collection.get(), nullptr);
}

// Test that a collection is empty when created.
TEST_F(CollectionTest, IsEmptyOnCreate)
{
  // is the collection empty?
  ASSERT_TRUE(collection->empty());

  // if empty, the size must be 0
  ASSERT_EQ(collection->size(), 0);
}

// 👇 Comment this test out to prevent the test from running
// 👇 Uncomment this test to see a failure in the test explorer
// TEST_F(CollectionTest, AlwaysFail)
// {
//     FAIL();
// }

// 👇 Test to verify adding a single value to an empty collection
TEST_F(CollectionTest, CanAddToEmptyVector)
{
  // 👇 is the collection empty?
  ASSERT_TRUE(collection->empty());

  // 👇 if empty, the size must be 0
  ASSERT_EQ(collection->size(), 0);

  add_entries(1);

  // 👇 is the collection still empty?
  ASSERT_FALSE(collection->empty());

  // 👇 if not empty, what must the size be?
  ASSERT_EQ(collection->size(), 1);
}

// 👇 Test to verify adding five values to collection
TEST_F(CollectionTest, CanAddFiveValuesToVector)
{
  // 👇 is the collection empty?
  ASSERT_TRUE(collection->empty());

  // 👇 if empty, the size must be 0
  ASSERT_EQ(collection->size(), 0);

  add_entries(5);

  // 👇 is the collection still empty?
  ASSERT_FALSE(collection->empty());

  // 👇 if not empty, what must the size be?
  ASSERT_EQ(collection->size(), 5);
}

// 👇 Test to verify that max size is greater than or equal to size for 0, 1, 5, 10 entries
TEST_F(CollectionTest, VectorMaxSizeIsGreaterOrEqual)
{
  // 👇 0 entries
  ASSERT_EQ(collection->size(), 0);
  ASSERT_TRUE(collection->size() <= collection->max_size());

  // 👇 1 entry
  add_entries(1);
  ASSERT_EQ(collection->size(), 1);
  ASSERT_TRUE(collection->size() <= collection->max_size());

  // 👇 5 entries
  add_entries(4);
  ASSERT_EQ(collection->size(), 5);
  ASSERT_TRUE(collection->size() <= collection->max_size());

  // 👇 10 entries
  add_entries(5);
  ASSERT_EQ(collection->size(), 10);
  ASSERT_TRUE(collection->size() <= collection->max_size());
}

// 👇 Test to verify that capacity is greater than or equal to size for 0, 1, 5, 10 entries
TEST_F(CollectionTest, VectorCapacityIsGreaterOrEqual)
{
  // 👇 0 entries
  ASSERT_EQ(collection->size(), 0);
  ASSERT_TRUE(collection->size() <= collection->capacity());

  // 👇 1 entry
  add_entries(1);
  ASSERT_EQ(collection->size(), 1);
  ASSERT_TRUE(collection->size() <= collection->capacity());

  // 👇 5 entries
  add_entries(4);
  ASSERT_EQ(collection->size(), 5);
  ASSERT_TRUE(collection->size() <= collection->capacity());

  // 👇 10 entries
  add_entries(5);
  ASSERT_EQ(collection->size(), 10);
  ASSERT_TRUE(collection->size() <= collection->capacity());
}

// 👇 Test to verify resizing increases the collection
TEST_F(CollectionTest, ResizingIncreasesCollection)
{
  // 👇 size is 0
  ASSERT_EQ(collection->size(), 0);

  // 👇 size increased by 1
  collection->resize(1);
  ASSERT_EQ(collection->size(), 1);
}

// 👇 Test to verify resizing decreases the collection
TEST_F(CollectionTest, ResizingDecreasesCollection)
{
  // 👇 size is 0
  ASSERT_EQ(collection->size(), 0);

  // 👇 size increased by 5
  collection->resize(5);
  ASSERT_EQ(collection->size(), 5);

  // 👇 size decreased by 1
  collection->resize(1);
  ASSERT_EQ(collection->size(), 1);
}

// 👇 Test to verify resizing decreases the collection to zero
TEST_F(CollectionTest, ResizingDecreasesCollectionToZero)
{
  // 👇 size is 0
  ASSERT_EQ(collection->size(), 0);

  // 👇 size increased by 5
  collection->resize(5);
  ASSERT_EQ(collection->size(), 5);

  // 👇 size decreased by 5 and is 0
  collection->resize(0);
  ASSERT_EQ(collection->size(), 0);
}

// 👇 Test to verify clear erases the collection
TEST_F(CollectionTest, ClearErasesCollection)
{
  // 👇 size is 0
  ASSERT_TRUE(collection->empty());

  // 👇 add 5 entries to the collection
  add_entries(5);
  ASSERT_FALSE(collection->empty());
  ASSERT_EQ(collection->size(), 5);

  // 👇 clear collection and validate empty
  collection->clear();
  ASSERT_TRUE(collection->empty());
}

// 👇 Test to verify erase(begin,end) erases the collection
TEST_F(CollectionTest, EraseEreasesCollection)
{
  // 👇 size is 0
  ASSERT_TRUE(collection->empty());

  // 👇 add 5 entries to the collection
  add_entries(5);
  ASSERT_FALSE(collection->empty());
  ASSERT_EQ(collection->size(), 5);

  // 👇 erase collection and validate empty
  collection->erase(collection->begin(), collection->end());
  ASSERT_TRUE(collection->empty());
}

// 👇 Test to verify reserve increases the capacity but not the size of the collection
TEST_F(CollectionTest, ReserveIncreasesCapacityButNotSize)
{
  // 👇 size is 0
  ASSERT_EQ(collection->size(), 0);
  ASSERT_EQ(collection->capacity(), 0);

  // 👇 reserve increases capacity by 5 but not size of collection
  collection->reserve(5);
  ASSERT_EQ(collection->capacity(), 5);
  ASSERT_EQ(collection->size(), 0);
  ASSERT_NE(collection->size(), 5);
}

// 👇 Test to verify the std::out_of_range exception 
// 👇 is thrown when calling at() with an index out of bounds
TEST_F(CollectionTest, ExceptionThrownIfOutOfBounds)
{
  // 👇 size is 0
  ASSERT_EQ(collection->size(), 0);
  ASSERT_EQ(collection->capacity(), 0);

  // 👇 add one entry
  add_entries(1);

  bool inRange = true;

  // 👇 exception is thrown when accessing index 1
  try
  {
    collection->at(1);
  }
  catch (std::out_of_range &)
  {
    inRange = false;
  }

  ASSERT_TRUE(inRange);
}

// 👇 Test (positive) that pop_back decreases size
TEST_F(CollectionTest, PopBackDecreasesCollection)
{
  // 👇 size is 0
  ASSERT_EQ(collection->size(), 0);

  // 👇 add 5 entries to the collection
  add_entries(5);
  ASSERT_EQ(collection->size(), 5);

  // 👇 size is decreased by 1
  collection->pop_back();
  ASSERT_EQ(collection->size(), 4);
}

// 👇 Test (negative) that calling reserve with argument greater than
// 👇 max size throws a length_error exception
TEST_F(CollectionTest, ReserveGreaterThanMaxSizeThrowsException)
{
  // 👇 size is 0
  ASSERT_EQ(collection->size(), 0);

  bool inLength = true;

  // 👇 catch reserve with argument greater than max_size
  try
  {
    collection->reserve(collection->max_size() + 1);
  }
  catch (std::length_error &)
  {
    inLength = false;
  }
  ASSERT_TRUE(inLength);
}