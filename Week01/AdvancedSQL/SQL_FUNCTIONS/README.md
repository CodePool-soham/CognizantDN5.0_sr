\# Return Data from a Scalar Function



\## Objective



The objective of this exercise is to understand how scalar functions are created and used in SQL Server to return a single calculated value.



This exercise focuses on:



\* Creating Scalar Functions

\* Using Function Parameters

\* Returning Calculated Values

\* Query Reusability

\* Business Logic Encapsulation



\---



\## Problem Statement



Create and execute a scalar function named `fn\_CalculateAnnualSalary` that returns the annual salary of an employee based on their EmployeeID.



The annual salary is calculated as:



```text

Annual Salary = Monthly Salary × 12

```



\---



\## Database Schema



The exercise uses the following tables:



\### Departments



| Column         | Description                  |

| -------------- | ---------------------------- |

| DepartmentID   | Unique department identifier |

| DepartmentName | Name of the department       |



\### Employees



| Column       | Description                |

| ------------ | -------------------------- |

| EmployeeID   | Unique employee identifier |

| FirstName    | Employee first name        |

| LastName     | Employee last name         |

| DepartmentID | Department reference       |

| Salary       | Monthly salary             |

| JoinDate     | Employee joining date      |



\---



\## Scalar Function



The following function was created to calculate the annual salary of an employee.



```sql

CREATE FUNCTION fn\_CalculateAnnualSalary

(

&#x20;   @EmployeeID INT

)

RETURNS DECIMAL(10,2)

AS

BEGIN



&#x20;   DECLARE @AnnualSalary DECIMAL(10,2);



&#x20;   SELECT

&#x20;       @AnnualSalary = Salary \* 12

&#x20;   FROM Employees

&#x20;   WHERE EmployeeID = @EmployeeID;



&#x20;   RETURN @AnnualSalary;



END;

GO

```



\---



\## Function Execution



The function was executed for EmployeeID = 1.



```sql

SELECT dbo.fn\_CalculateAnnualSalary(1) AS AnnualSalary;

```



\---



\## Output



| AnnualSalary |

| ------------ |

| 60000.00     |



\---



\## Verification



The employee information was verified using:



```sql

SELECT

&#x20;   EmployeeID,

&#x20;   FirstName,

&#x20;   Salary

FROM Employees

WHERE EmployeeID = 1;

```



Output:



| EmployeeID | FirstName | Salary  |

| ---------- | --------- | ------- |

| 1          | John      | 5000.00 |



Calculation:



```text

5000 × 12 = 60000

```



The calculated value matches the function output.



\---



\## Observation



The scalar function successfully returned the annual salary for the specified employee.



Instead of manually calculating the annual salary every time, the function encapsulates the logic and makes it reusable throughout the database.



\---



\## Key Learning



Scalar functions return a single value and can be used wherever an expression is allowed.



They are useful for:



\* Reusable calculations

\* Data transformations

\* Business rule implementation

\* Reducing repetitive SQL code



\---



\## Advantages of Scalar Functions



\* Improved code reusability

\* Centralized business logic

\* Easier maintenance

\* Consistent calculations

\* Better readability of SQL queries



\---



\## Practical Understanding



A scalar function behaves like a reusable calculator stored inside the database.



In this exercise, the function accepts an EmployeeID, retrieves the employee's monthly salary, calculates the annual salary, and returns the result.



This approach allows applications and queries to reuse the same calculation logic without rewriting the formula.



\---



\## Conclusion



This exercise demonstrated how to create and execute a scalar function in SQL Server.



The following concepts were explored:



\* Creating scalar functions

\* Using input parameters

\* Returning a single value

\* Performing calculations within functions

\* Reusing database logic



Scalar functions are commonly used in enterprise applications to encapsulate calculations and business rules, making SQL code more maintainable and reusable.



