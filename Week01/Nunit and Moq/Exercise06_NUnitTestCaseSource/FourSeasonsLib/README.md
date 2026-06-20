# Exercise06_NUnitTestCaseSource

## Objective

This lab demonstrates how to write automated unit tests using the NUnit framework and use the **TestCaseSource** attribute to reduce repetitive test code.

The exercise also demonstrates multiple approaches for supplying test data using `TestCaseSource` and follows the Single Assertion Rule using `Assert.That()`.

---

# Project Details

## Source Project

**SeasonsLib**

---

## System Under Test (SUT)

```csharp id="9j2m5x"
SeasonTeller
```

---

## Method Under Test

```csharp id="4v8q1n"
DisplaySeasonBy(string monthName)
```

---

# Business Scenario

The application accepts a month name and returns the corresponding season.

| Season  | Months                  |
| ------- | ----------------------- |
| Spring  | February, March         |
| Summer  | April, May, June        |
| Monsoon | July, August, September |
| Autumn  | October, November       |
| Winter  | December, January       |

If an invalid month is supplied, the method returns:

```text id="6m3p8q"
Invalid Season
```

---

# Test Project

## Project Name

```text id="2x7n4m"
SeasonsLib.Tests
```

## Test Class Name

```text id="8q5v1p"
SeasonTellerTests
```

## Naming Convention Used

```text id="1m9x6q"
UnitUnderTest_Scenario_ExpectedOutcome
```

### Examples

```text id="7v3k2n"
DisplaySeasonBy_ValidMonth_ReturnsExpectedSeason

DisplaySeasonBy_AlternateTestCaseSource_ReturnsExpectedSeason
```

---

# NUnit Features Demonstrated

## [TestCaseSource]

The `TestCaseSource` attribute allows multiple test inputs to be supplied to a single test method, reducing duplicate test code.

### Example

```csharp id="5n8m2v"
[TestCaseSource(nameof(SeasonData))]
```

## Benefits

* Reduces repetitive test methods.
* Improves maintainability.
* Simplifies adding new test cases.
* Improves test readability.

---

# Approach 1 – TestCaseData with IEnumerable

The first approach uses `IEnumerable` with `TestCaseData` objects.

## Test Data Source

```csharp id="3q7x9m"
public static IEnumerable SeasonData
{
    get
    {
        yield return new TestCaseData("February", "Spring");
        yield return new TestCaseData("March", "Spring");

        yield return new TestCaseData("April", "Summer");
        yield return new TestCaseData("May", "Summer");
        yield return new TestCaseData("June", "Summer");

        yield return new TestCaseData("July", "Monsoon");
        yield return new TestCaseData("August", "Monsoon");
        yield return new TestCaseData("September", "Monsoon");

        yield return new TestCaseData("October", "Autumn");
        yield return new TestCaseData("November", "Autumn");

        yield return new TestCaseData("December", "Winter");
        yield return new TestCaseData("January", "Winter");

        yield return new TestCaseData("Batman", "Invalid Season");
    }
}
```

## Test Method

```csharp id="6p4z8m"
[TestCaseSource(nameof(SeasonData))]
public void DisplaySeasonBy_ValidMonth_ReturnsExpectedSeason(
    string month,
    string expected)
{
    SeasonTeller teller = new SeasonTeller();

    string actual = teller.DisplaySeasonBy(month);

    Assert.That(actual, Is.EqualTo(expected));
}
```

---

# Approach 2 – Object Array TestCaseSource

The second approach uses an object array as the data source.

## Test Data Source

```csharp id="9v2m5x"
public static object[] AlternateSeasonData =
{
    new object[] { "February", "Spring" },
    new object[] { "April", "Summer" },
    new object[] { "July", "Monsoon" },
    new object[] { "October", "Autumn" },
    new object[] { "December", "Winter" },
    new object[] { "XYZ", "Invalid Season" }
};
```

## Test Method

```csharp id="4m8q1v"
[TestCaseSource(nameof(AlternateSeasonData))]
public void DisplaySeasonBy_AlternateTestCaseSource_ReturnsExpectedSeason(
    string month,
    string expected)
{
    SeasonTeller teller = new SeasonTeller();

    string actual = teller.DisplaySeasonBy(month);

    Assert.That(actual, Is.EqualTo(expected));
}
```

---

# Single Assertion Rule

Each test method contains only one assertion.

### Example

```csharp id="1x6q9m"
Assert.That(
    actual,
    Is.EqualTo(expected));
```

This makes failures easier to identify and improves test maintenance.

---

# Test Execution

All tests were executed using NUnit Test Explorer.

## Initial Result

```text id="7n3m8q"
All Tests Passed
```

The tests verified:

* Spring months.
* Summer months.
* Monsoon months.
* Autumn months.
* Winter months.
* Invalid month inputs.

---

# Breaking the Application

To verify the effectiveness of the tests, the source code was intentionally modified.

## Original Code

```csharp id="5q2v7n"
seasonName = "Summer";
```

## Modified Code

```csharp id="8m4x1p"
seasonName = "Winter";
```

The modification was made inside the April-May-June condition block.

---

# Observed Result

After modifying the source code and rerunning the tests:

The following month tests failed:

```text id="2n7m5x"
April

May

June
```

## Expected Output

```text id="6v9q3m"
Summer
```

## Actual Output

```text id="1p8x4n"
Winter
```

Several tests failed, proving that the test suite successfully detected defects in the application.

---

# Restoring the Application

The original implementation was restored:

```csharp id="3m7q9v"
seasonName = "Summer";
```

Tests were executed again.

## Final Result

```text id="9x5n2m"
All Tests Passed Successfully
```

---

# Concepts Demonstrated

* NUnit Test Project Creation.
* NUnit Custom Attributes.
* `TestCaseSource` Attribute.
* `TestCaseData`.
* `IEnumerable` Test Data Source.
* Object Array Test Data Source.
* `Assert.That()`.
* Single Assertion Rule.
* Data-driven testing.
* Defect detection through automated testing.

---

# Advantages of TestCaseSource

* Eliminates duplicate test methods.
* Supports large volumes of test data.
* Makes tests easier to maintain.
* Improves readability.
* Encourages data-driven testing.

---

# Conclusion

The `SeasonTeller` functionality was successfully tested using NUnit and `TestCaseSource`.

Two different `TestCaseSource` implementations were demonstrated:

1. `IEnumerable` with `TestCaseData`.
2. Object Array Test Source.

The tests successfully validated all season mappings and detected intentionally introduced defects.

All objectives of the exercise were completed successfully.
