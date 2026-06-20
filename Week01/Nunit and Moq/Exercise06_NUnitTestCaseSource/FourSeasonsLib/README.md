\# Exercise06\_NUnitTestCaseSource



\## Objective



This lab demonstrates how to write automated unit tests using the NUnit framework and how to use the \*\*TestCaseSource\*\* attribute to reduce repetitive test code.



The exercise also demonstrates multiple approaches to supplying test data using TestCaseSource and follows the Single Assertion Rule using `Assert.That()`.



\---



\## Project Details



\### Source Project



SeasonsLib



\### System Under Test (SUT)



```csharp

SeasonTeller

```



\### Method Under Test



```csharp

DisplaySeasonBy(string monthName)

```



\---



\## Business Scenario



The application accepts a month name and returns the corresponding season.



| Season  | Months                  |

| ------- | ----------------------- |

| Spring  | February, March         |

| Summer  | April, May, June        |

| Monsoon | July, August, September |

| Autumn  | October, November       |

| Winter  | December, January       |



If an invalid month is supplied, the method returns:



```text

Invalid Season

```



\---



\## Test Project



Project Name:



```text

SeasonsLib.Tests

```



Test Class Name:



```text

SeasonTellerTests

```



Naming Convention Used:



```text

UnitUnderTest\_Scenario\_ExpectedOutcome

```



Examples:



```text

DisplaySeasonBy\_ValidMonth\_ReturnsExpectedSeason



DisplaySeasonBy\_AlternateTestCaseSource\_ReturnsExpectedSeason

```



\---



\## NUnit Features Demonstrated



\### \[TestCaseSource]



The TestCaseSource attribute allows multiple test inputs to be supplied to a single test method, reducing code duplication.



Example:



```csharp

\[TestCaseSource(nameof(SeasonData))]

```



Benefits:



\* Reduces repetitive test methods

\* Improves maintainability

\* Simplifies adding new test cases

\* Improves readability



\---



\# Approach 1 – TestCaseData with IEnumerable



The first approach uses `IEnumerable` and `TestCaseData`.



```csharp

public static IEnumerable SeasonData

{

&#x20;   get

&#x20;   {

&#x20;       yield return new TestCaseData("February", "Spring");

&#x20;       yield return new TestCaseData("March", "Spring");



&#x20;       yield return new TestCaseData("April", "Summer");

&#x20;       yield return new TestCaseData("May", "Summer");

&#x20;       yield return new TestCaseData("June", "Summer");



&#x20;       yield return new TestCaseData("July", "Monsoon");

&#x20;       yield return new TestCaseData("August", "Monsoon");

&#x20;       yield return new TestCaseData("September", "Monsoon");



&#x20;       yield return new TestCaseData("October", "Autumn");

&#x20;       yield return new TestCaseData("November", "Autumn");



&#x20;       yield return new TestCaseData("December", "Winter");

&#x20;       yield return new TestCaseData("January", "Winter");



&#x20;       yield return new TestCaseData("Batman", "Invalid Season");

&#x20;   }

}

```



Test Method:



```csharp

\[TestCaseSource(nameof(SeasonData))]

public void DisplaySeasonBy\_ValidMonth\_ReturnsExpectedSeason(

&#x20;   string month,

&#x20;   string expected)

{

&#x20;   SeasonTeller teller = new SeasonTeller();



&#x20;   string actual =

&#x20;       teller.DisplaySeasonBy(month);



&#x20;   Assert.That(actual, Is.EqualTo(expected));

}

```



\---



\# Approach 2 – Object Array TestCaseSource



The second approach uses an object array.



```csharp

public static object\[] AlternateSeasonData =

{

&#x20;   new object\[] { "February", "Spring" },

&#x20;   new object\[] { "April", "Summer" },

&#x20;   new object\[] { "July", "Monsoon" },

&#x20;   new object\[] { "October", "Autumn" },

&#x20;   new object\[] { "December", "Winter" },

&#x20;   new object\[] { "XYZ", "Invalid Season" }

};

```



Test Method:



```csharp

\[TestCaseSource(nameof(AlternateSeasonData))]

public void DisplaySeasonBy\_AlternateTestCaseSource\_ReturnsExpectedSeason(

&#x20;   string month,

&#x20;   string expected)

{

&#x20;   SeasonTeller teller = new SeasonTeller();



&#x20;   string actual =

&#x20;       teller.DisplaySeasonBy(month);



&#x20;   Assert.That(actual, Is.EqualTo(expected));

}

```



\---



\## Single Assertion Rule



Each test method contains only one assertion.



Example:



```csharp

Assert.That(

&#x20;   actual,

&#x20;   Is.EqualTo(expected));

```



This makes failures easier to identify and maintain.



\---



\## Test Execution



All tests were executed using NUnit Test Explorer.



\### Initial Result



```text

All Tests Passed

```



The tests verified:



\* Spring months

\* Summer months

\* Monsoon months

\* Autumn months

\* Winter months

\* Invalid month inputs



\---



\## Breaking the Application



To verify the effectiveness of the tests, the source code was intentionally modified.



\### Original Code



```csharp

seasonName = "Summer";

```



\### Modified Code



```csharp

seasonName = "Winter";

```



inside the April-May-June condition block.



\---



\## Observed Result



After modifying the source code and rerunning the tests:



The following month tests failed:



```text

April

May

June

```



Expected:



```text

Summer

```



Actual:



```text

Winter

```



Several tests failed, proving that the test suite successfully detected defects in the application.



\---



\## Restoring the Application



The original implementation was restored.



```csharp

seasonName = "Summer";

```



Tests were executed again.



\### Final Result



```text

All Tests Passed Successfully

```



\---



\## Concepts Demonstrated



\* NUnit Test Project Creation

\* NUnit Custom Attributes

\* TestCaseSource Attribute

\* TestCaseData

\* IEnumerable Test Data Source

\* Object Array Test Data Source

\* Assert.That()

\* Single Assertion Rule

\* Data Driven Testing

\* Defect Detection Through Automated Testing



\---



\## Advantages of TestCaseSource



\* Eliminates duplicate test methods

\* Supports large volumes of test data

\* Makes tests easier to maintain

\* Improves readability

\* Encourages data-driven testing



\---



\## Conclusion



The SeasonTeller functionality was successfully tested using NUnit and TestCaseSource.



Two different TestCaseSource implementations were demonstrated:



1\. IEnumerable with TestCaseData

2\. Object Array Test Source



The tests successfully validated all season mappings and detected intentionally introduced defects.



All objectives of the exercise were completed successfully.



