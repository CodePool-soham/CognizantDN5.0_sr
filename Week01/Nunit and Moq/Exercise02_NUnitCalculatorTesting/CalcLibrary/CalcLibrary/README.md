\# Exercise02\_NUnitCalculatorTesting



\## Objective



The objective of this exercise is to demonstrate NUnit Unit Testing concepts including:



\* Parameterized Test Cases

\* Testing methods that return values

\* Testing void methods

\* Testing methods that throw exceptions

\* Usage of Assert.Fail

\* Exception handling using Try-Catch

\* Understanding private method testing

\* Introduction to Mocking Frameworks and Moq



\---



\## Project Details



\### Application Under Test



\*\*CalcLibrary\*\*



Class Tested:



```csharp

SimpleCalculator

```



Methods Tested:



\* Addition()

\* Subtraction()

\* Multiplication()

\* Division()

\* AllClear()

\* GetResult Property



\---



\## Test Cases Implemented



\### 1. Subtraction Test



Parameterized test cases were created using the TestCase attribute.



Tested scenarios:



\* Positive numbers

\* Different numeric combinations

\* Negative numbers



Verification:



\* Expected and Actual values were compared using NUnit assertions.



\---



\### 2. Multiplication Test



Parameterized test cases were created using the TestCase attribute.



Tested scenarios:



\* Positive values

\* Multiple multiplication combinations

\* Negative values



Verification:



\* Expected and Actual values were compared using NUnit assertions.



\---



\### 3. Division Test



Parameterized test cases were created using the TestCase attribute.



Tested scenarios:



\* Valid division operations

\* Multiple division combinations



Verification:



\* Expected and Actual values were compared using NUnit assertions.



\---



\### 4. Division By Zero Exception Test



A separate test case was created to verify exception handling.



Implementation:



\* Try-Catch block used

\* ArgumentException captured

\* Exception message validated

\* Assert.Fail used when exception was not thrown



Expected Exception Message:



```text

Second Parameter Can't be Zero

```



\---



\### 5. TestAddAndClear



Purpose:



To test the void method AllClear().



Steps Performed:



1\. Invoked Addition()

2\. Verified result using GetResult property

3\. Invoked AllClear()

4\. Verified GetResult returned 0



This confirms that the internal calculator state is reset correctly.



\---



\## Assertions Used



\### Assert.That



Used to compare actual and expected values.



Example:



```csharp

Assert.That(actual, Is.EqualTo(expected));

```



\### Assert.Fail



Used in exception testing.



Example:



```csharp

Assert.Fail("Division by zero");

```



\---



\## Why Testing Private Methods Is Not Beneficial



Private methods are implementation details of a class and are not directly accessible to consumers.



Unit tests should focus on testing the public behavior of a class rather than its internal implementation.



Benefits of testing public methods instead:



\* Reduces maintenance effort

\* Prevents tests from breaking when internal implementation changes

\* Encourages better encapsulation

\* Focuses on actual business functionality



\---



\## Mocking Framework and Moq



\### What is Mocking?



Mocking is the process of creating fake objects that simulate the behavior of real dependencies.



Examples of dependencies:



\* Database connections

\* File systems

\* Web services

\* External APIs



Mocking helps isolate the unit being tested.



\### What is Moq?



Moq is a popular .NET mocking framework used for creating mock objects during unit testing.



Benefits of Moq:



\* Faster execution of tests

\* Independent testing

\* No dependency on external systems

\* Easier simulation of different scenarios

\* Better test reliability



\---



\## Test Results



All unit test cases were executed successfully.



Implemented Tests:



1\. TestSubtraction

2\. TestMultiplication

3\. TestDivision

4\. TestDivisionByZero

5\. TestAddAndClear



Result:



```text

All Tests Passed Successfully

```



\---



\## Conclusion



The NUnit framework was successfully used to create and execute parameterized tests, exception tests, and void method tests for the SimpleCalculator class. All objectives of the exercise were completed successfully.



