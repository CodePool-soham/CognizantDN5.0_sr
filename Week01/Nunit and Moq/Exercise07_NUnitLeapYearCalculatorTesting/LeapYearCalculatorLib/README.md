\# Exercise07\_NUnitLeapYearCalculatorTesting



\## Objective



This lab demonstrates how to write automated unit tests using the NUnit framework and how to use \*\*parameterized test cases\*\* to minimize repetitive test code.



The objective is to verify the functionality of the `IsLeapYear()` method under different input conditions, including leap years, non-leap years, and invalid years.



\---



\## Project Details



\### Source Project



LeapYearCalculatorLib



\### System Under Test (SUT)



```csharp

LeapYearCalculator

```



\### Method Under Test



```csharp

IsLeapYear(int year)

```



\---



\## Business Rules



The application determines whether a given year is a leap year.



\### Return Values



| Condition     | Return Value |

| ------------- | ------------ |

| Leap Year     | 1            |

| Non-Leap Year | 0            |

| Invalid Year  | -1           |



\### Valid Year Range



```text

1753 to 9999 (inclusive)

```



Any year outside this range is considered invalid.



\---



\## Test Project



Project Name:



```text

LeapYearCalculatorLib.Tests

```



Test Class Name:



```text

LeapYearCalculatorTests

```



Naming Convention Used:



```text

UnitUnderTest\_Scenario\_ExpectedOutcome

```



Example:



```text

IsLeapYear\_ValidAndInvalidYears\_ReturnsExpectedResult

```



\---



\## NUnit Features Demonstrated



\### Parameterized Test Cases



Parameterized testing allows multiple inputs and expected outputs to be tested using a single test method.



This reduces:



\* Code duplication

\* Maintenance effort

\* Number of repetitive test methods



\### NUnit Attribute Used



```csharp

\[TestCase]

```



Example:



```csharp

\[TestCase(2000, 1)]

\[TestCase(2024, 1)]

\[TestCase(2028, 1)]

```



\---



\## Test Cases Implemented



\### Leap Year Test Cases



| Year | Expected Result |

| ---- | --------------- |

| 2000 | 1               |

| 2024 | 1               |

| 2028 | 1               |



Reason:



```text

Leap years are divisible by 4.

Century years must also be divisible by 400.

```



\---



\### Non-Leap Year Test Cases



| Year | Expected Result |

| ---- | --------------- |

| 2023 | 0               |

| 2025 | 0               |

| 1900 | 0               |



Reason:



```text

1900 is divisible by 100 but not divisible by 400.

Therefore it is not a leap year.

```



\---



\### Invalid Year Test Cases



| Year  | Expected Result |

| ----- | --------------- |

| 1700  | -1              |

| 10000 | -1              |



Reason:



```text

Valid year range is 1753 to 9999.

```



\---



\## Test Method



```csharp

\[TestCase(2000, 1)]

\[TestCase(2024, 1)]

\[TestCase(2028, 1)]

\[TestCase(2023, 0)]

\[TestCase(2025, 0)]

\[TestCase(1900, 0)]

\[TestCase(1700, -1)]

\[TestCase(10000, -1)]

public void IsLeapYear\_ValidAndInvalidYears\_ReturnsExpectedResult(

&#x20;   int year,

&#x20;   int expected)

{

&#x20;   LeapYearCalculator calculator =

&#x20;       new LeapYearCalculator();



&#x20;   int actual =

&#x20;       calculator.IsLeapYear(year);



&#x20;   Assert.That(

&#x20;       actual,

&#x20;       Is.EqualTo(expected));

}

```



\---



\## Single Assertion Rule



The test method contains only one assertion.



```csharp

Assert.That(

&#x20;   actual,

&#x20;   Is.EqualTo(expected));

```



This improves readability and makes failures easier to diagnose.



\---



\## Benefits of Parameterized Testing



\### Without Parameterized Testing



Separate test methods would be required for:



```text

Leap Year

Non-Leap Year

Century Year

Invalid Year

```



Result:



```text

More code

More maintenance

More duplication

```



\### With Parameterized Testing



One test method handles all scenarios.



Result:



```text

Less code

Better maintainability

Improved readability

```



\---



\## Test Execution



All tests were executed using NUnit Test Explorer.



\### Initial Result



```text

8 Tests Passed

```



The tests successfully verified:



\* Leap years

\* Non-leap years

\* Century year logic

\* Invalid year handling



\---



\## Breaking the Application



To verify the effectiveness of the test suite, the source code was intentionally modified.



\### Original Code



```csharp

output = 1;

```



\### Modified Code



```csharp

output = 0;

```



inside the leap year condition block.



\---



\## Observed Result



After modifying the source code and rerunning the tests:



The following test cases failed:



```text

2000

2024

2028

```



Expected:



```text

1

```



Actual:



```text

0

```



This confirmed that the test suite successfully detected defects in the application.



\---



\## Restoring the Application



The original implementation was restored.



```csharp

output = 1;

```



Tests were executed again.



\### Final Result



```text

8 Tests Passed Successfully

```



\---



\## Concepts Demonstrated



\* NUnit Test Project Creation

\* NUnit Custom Attributes

\* Parameterized Testing

\* TestCase Attribute

\* Assert.That()

\* Single Assertion Rule

\* Leap Year Validation

\* Boundary Testing

\* Invalid Input Testing

\* Defect Detection Through Automated Testing



\---



\## Conclusion



The LeapYearCalculator functionality was successfully tested using NUnit.



Parameterized test cases were used to validate multiple input scenarios through a single test method. The test suite successfully verified leap years, non-leap years, century year rules, and invalid year ranges.



The tests also detected intentionally introduced defects, demonstrating the effectiveness of automated unit testing.



All objectives of the exercise were completed successfully.



