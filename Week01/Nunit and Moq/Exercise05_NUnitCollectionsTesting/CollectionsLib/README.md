\# Exercise05\_NUnitCollectionsTesting



\## Objective



This lab demonstrates how to write automated unit tests using the NUnit framework and use NUnit custom attributes to identify tests.



The exercise also demonstrates the usage of \*\*CollectionAssert\*\* for validating collections and verifying collection contents.



\---



\## Project Details



\### Source Project



\*\*CollectionsLib\*\*



\### System Under Test (SUT)



```csharp

EmployeeManager

```



\### Methods Under Test



```csharp

GetEmployees()



GetEmployeesWhoJoinedInPreviousYears()

```



\---



\## Test Project



Project Name:



```text

CollectionsLib.Tests

```



Test Class Name:



```text

EmployeeManagerTests

```



Naming Convention Used:



```text

UnitUnderTest\_Scenario\_ExpectedOutcome

```



Examples:



```text

GetEmployees\_NoNullEmployees\_ReturnsCollectionWithoutNullValues



GetEmployees\_Employee100Exists\_ReturnsTrue



GetEmployees\_AllEmployeeIdsAreUnique\_ReturnsTrue



GetEmployeesAndPreviousYearEmployees\_CollectionsAreEqual

```



\---



\## NUnit Features Demonstrated



\### \[Test] Attribute



Used to identify a method as a test case.



Example:



```csharp

\[Test]

public void GetEmployees\_Employee100Exists\_ReturnsTrue()

{

}

```



\---



\## CollectionAssert



The lab demonstrates the use of CollectionAssert to compare collections.



Example:



```csharp

CollectionAssert.AreEquivalent(

&#x20;   employees,

&#x20;   previousEmployees);

```



\---



\## Employee Class Modification



To support comparison of Employee objects based on Employee ID, the following methods were overridden:



```csharp

public override bool Equals(object obj)

{

&#x20;   Employee employee = obj as Employee;



&#x20;   if (employee == null)

&#x20;       return false;



&#x20;   return this.EmpId == employee.EmpId;

}



public override int GetHashCode()

{

&#x20;   return EmpId.GetHashCode();

}

```



This allows collection comparisons to be performed correctly.



\---



\## Test Cases Implemented



\### 1. GetEmployees\_NoNullEmployees\_ReturnsCollectionWithoutNullValues



\#### Purpose



Verifies that the employee collection does not contain any null values.



\#### Assertion Used



```csharp

Assert.That(

&#x20;   employees,

&#x20;   Has.None.Null);

```



\---



\### 2. GetEmployees\_Employee100Exists\_ReturnsTrue



\#### Purpose



Verifies that an employee with Employee ID 100 exists in the collection.



\#### Assertion Used



```csharp

Assert.That(

&#x20;   employees.Any(e => e.EmpId == 100),

&#x20;   Is.True);

```



\---



\### 3. GetEmployees\_AllEmployeeIdsAreUnique\_ReturnsTrue



\#### Purpose



Verifies that all employees have unique Employee IDs.



A collection is considered unique when no two employees have the same Employee ID.



\#### Assertion Used



```csharp

Assert.That(

&#x20;   employees.Select(e => e.EmpId)

&#x20;            .Distinct()

&#x20;            .Count(),

&#x20;   Is.EqualTo(employees.Count));

```



\---



\### 4. GetEmployeesAndPreviousYearEmployees\_CollectionsAreEqual



\#### Purpose



Verifies that both collections contain the same employee objects.



Methods Compared:



```csharp

GetEmployees()



GetEmployeesWhoJoinedInPreviousYears()

```



Since all employees joined before the current date, both collections contain the same employees.



\#### Assertion Used



```csharp

CollectionAssert.AreEquivalent(

&#x20;   employees,

&#x20;   previousEmployees);

```



\---



\## Single Assertion Rule



Each test method contains a single assertion.



Examples:



```csharp

Assert.That(

&#x20;   employees.Any(e => e.EmpId == 100),

&#x20;   Is.True);

```



```csharp

CollectionAssert.AreEquivalent(

&#x20;   employees,

&#x20;   previousEmployees);

```



This improves readability and makes test failures easier to diagnose.



\---



\## Test Execution



All test cases were executed using NUnit Test Explorer.



\### Initial Test Result



```text

4 Tests Passed

```



\---



\## Breaking the Application



To verify that the tests can detect defects, the source code was intentionally modified.



\### Original Data



```csharp

new Employee

{

&#x20;   EmpId = 100,

&#x20;   EmpName = "John"

}

```



\### Modified Data



```csharp

new Employee

{

&#x20;   EmpId = 101,

&#x20;   EmpName = "John"

}

```



This introduced a duplicate Employee ID.



\---



\## Observed Result



After modifying the source code and rerunning the tests:



\### Failed Tests



```text

GetEmployees\_Employee100Exists\_ReturnsTrue



GetEmployees\_AllEmployeeIdsAreUnique\_ReturnsTrue

```



\### Passed Tests



```text

GetEmployees\_NoNullEmployees\_ReturnsCollectionWithoutNullValues



GetEmployeesAndPreviousYearEmployees\_CollectionsAreEqual

```



\### Result



```text

2 Failed

2 Passed

```



This confirms that the test suite is capable of detecting defects in the application.



\---



\## Restoring the Application



The Employee ID was restored to its original value.



\### Restored Data



```csharp

EmpId = 100

```



All tests were executed again.



\### Final Result



```text

4 Tests Passed Successfully

```



\---



\## Concepts Demonstrated



\* NUnit Test Project Creation

\* NUnit Custom Attributes

\* Assert.That()

\* CollectionAssert

\* Collection Validation

\* Object Equality using Equals() and GetHashCode()

\* Single Assertion Rule

\* Collection Comparison

\* Defect Detection Through Automated Testing



\---



\## Conclusion



The EmployeeManager functionality was successfully tested using NUnit.



The tests verified:



\* Absence of null values in collections

\* Existence of a specific employee

\* Uniqueness of employee records

\* Equality of employee collections



CollectionAssert was successfully demonstrated, and the test suite effectively detected intentionally introduced defects.



All objectives of the exercise were completed successfully.



