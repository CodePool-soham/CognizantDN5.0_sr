# Exercise05_NUnitCollectionsTesting

## Objective

This lab demonstrates how to write automated unit tests using the NUnit framework and use NUnit attributes to identify and execute test cases.

The exercise also demonstrates the usage of **CollectionAssert** for validating collections and verifying collection contents.

---

# Project Details

## Source Project

**CollectionsLib**

---

## System Under Test (SUT)

```csharp
EmployeeManager
```

---

## Methods Under Test

```csharp
GetEmployees()

GetEmployeesWhoJoinedInPreviousYears()
```

---

# Test Project

## Project Name

```text
CollectionsLib.Tests
```

## Test Class Name

```text
EmployeeManagerTests
```

## Naming Convention Used

```text
UnitUnderTest_Scenario_ExpectedOutcome
```

### Examples

```text
GetEmployees_NoNullEmployees_ReturnsCollectionWithoutNullValues

GetEmployees_Employee100Exists_ReturnsTrue

GetEmployees_AllEmployeeIdsAreUnique_ReturnsTrue

GetEmployeesAndPreviousYearEmployees_CollectionsAreEqual
```

---

# NUnit Features Demonstrated

## [Test] Attribute

The `[Test]` attribute is used to identify a method as an NUnit test case.

### Example

```csharp
[Test]
public void GetEmployees_Employee100Exists_ReturnsTrue()
{
}
```

---

# CollectionAssert

The lab demonstrates the use of `CollectionAssert` to compare collections.

### Example

```csharp
CollectionAssert.AreEquivalent(
    employees,
    previousEmployees);
```

---

# Employee Class Modification

To support comparison of `Employee` objects based on Employee ID, the following methods were overridden:

```csharp
public override bool Equals(object obj)
{
    Employee employee = obj as Employee;

    if (employee == null)
        return false;

    return this.EmpId == employee.EmpId;
}

public override int GetHashCode()
{
    return EmpId.GetHashCode();
}
```

This allows collection comparisons to correctly identify equivalent employee objects.

---

# Test Cases Implemented

## 1. GetEmployees_NoNullEmployees_ReturnsCollectionWithoutNullValues

### Purpose

Verifies that the employee collection does not contain any null values.

### Assertion Used

```csharp
Assert.That(
    employees,
    Has.None.Null);
```

---

## 2. GetEmployees_Employee100Exists_ReturnsTrue

### Purpose

Verifies that an employee with Employee ID `100` exists in the collection.

### Assertion Used

```csharp
Assert.That(
    employees.Any(e => e.EmpId == 100),
    Is.True);
```

---

## 3. GetEmployees_AllEmployeeIdsAreUnique_ReturnsTrue

### Purpose

Verifies that all employees have unique Employee IDs.

A collection is considered unique when no two employees contain the same Employee ID.

### Assertion Used

```csharp
Assert.That(
    employees.Select(e => e.EmpId)
             .Distinct()
             .Count(),
    Is.EqualTo(employees.Count));
```

---

## 4. GetEmployeesAndPreviousYearEmployees_CollectionsAreEqual

### Purpose

Verifies that both collections contain the same employee objects.

### Methods Compared

```csharp
GetEmployees()

GetEmployeesWhoJoinedInPreviousYears()
```

Since all employees joined before the current date, both collections contain the same employee records.

### Assertion Used

```csharp
CollectionAssert.AreEquivalent(
    employees,
    previousEmployees);
```

---

# Single Assertion Rule

Each test method contains only one assertion.

### Examples

```csharp
Assert.That(
    employees.Any(e => e.EmpId == 100),
    Is.True);
```

```csharp
CollectionAssert.AreEquivalent(
    employees,
    previousEmployees);
```

This improves readability and makes test failures easier to diagnose.

---

# Test Execution

All test cases were executed using NUnit Test Explorer.

## Initial Test Result

```text
4 Tests Passed
```

---

# Breaking the Application

To verify that the tests can detect defects, the source code was intentionally modified.

## Original Data

```csharp
new Employee
{
    EmpId = 100,
    EmpName = "John"
}
```

## Modified Data

```csharp
new Employee
{
    EmpId = 101,
    EmpName = "John"
}
```

This modification introduced an incorrect Employee ID.

---

# Observed Result

After modifying the source code and rerunning the tests:

## Failed Tests

```text
GetEmployees_Employee100Exists_ReturnsTrue

GetEmployees_AllEmployeeIdsAreUnique_ReturnsTrue
```

## Passed Tests

```text
GetEmployees_NoNullEmployees_ReturnsCollectionWithoutNullValues

GetEmployeesAndPreviousYearEmployees_CollectionsAreEqual
```

## Result

```text
2 Failed
2 Passed
```

This confirms that the test suite is capable of detecting defects introduced into the application.

---

# Restoring the Application

The Employee ID was restored to its original value.

## Restored Data

```csharp
EmpId = 100
```

All tests were executed again.

## Final Result

```text
4 Tests Passed Successfully
```

---

# Concepts Demonstrated

* NUnit Test Project Creation.
* NUnit Custom Attributes.
* `Assert.That()`.
* `CollectionAssert`.
* Collection validation.
* Object equality using `Equals()` and `GetHashCode()`.
* Single Assertion Rule.
* Collection comparison.
* Defect detection through automated testing.

---

# Conclusion

The `EmployeeManager` functionality was successfully tested using NUnit.

The tests verified:

* Absence of null values in collections.
* Existence of a specific employee.
* Uniqueness of employee records.
* Equality of employee collections.

`CollectionAssert` was successfully demonstrated, and the test suite effectively detected intentionally introduced defects.

All objectives of the exercise were completed successfully.
