# Return Data from a Scalar Function

## Objective

The objective of this exercise is to understand how scalar functions are created and used in SQL Server to return a single calculated value.

This exercise focuses on:

* Creating Scalar Functions
* Using Function Parameters
* Returning Calculated Values
* Improving Query Reusability
* Encapsulating Business Logic

---

# Problem Statement

Create and execute a scalar function named `fn_CalculateAnnualSalary` that returns the annual salary of an employee based on their `EmployeeID`.

The annual salary is calculated using the formula:

```text
Annual Salary = Monthly Salary × 12
```

---

# Database Schema

The exercise uses the following tables:

## Departments

| Column         | Description                  |
| -------------- | ---------------------------- |
| DepartmentID   | Unique department identifier |
| DepartmentName | Name of the department       |

---

## Employees

| Column       | Description                |
| ------------ | -------------------------- |
| EmployeeID   | Unique employee identifier |
| FirstName    | Employee first name        |
| LastName     | Employee last name         |
| DepartmentID | Department reference       |
| Salary       | Monthly salary             |
| JoinDate     | Employee joining date      |

---

# Scalar Function

The following scalar function calculates the annual salary of an employee.

```sql id="g3u0zt"
CREATE FUNCTION fn_CalculateAnnualSalary
(
    @EmployeeID INT
)
RETURNS DECIMAL(10,2)
AS
BEGIN

    DECLARE @AnnualSalary DECIMAL(10,2);

    SELECT
        @AnnualSalary = Salary * 12
    FROM Employees
    WHERE EmployeeID = @EmployeeID;

    RETURN @AnnualSalary;

END;
GO
```

---

# Function Execution

The function was executed for `EmployeeID = 1`.

```sql id="4x7y3b"
SELECT dbo.fn_CalculateAnnualSalary(1) AS AnnualSalary;
```

---

# Output

| AnnualSalary |
| ------------ |
| 60000.00     |

---

# Verification

The employee information was verified using:

```sql id="r3jd8m"
SELECT
    EmployeeID,
    FirstName,
    Salary
FROM Employees
WHERE EmployeeID = 1;
```

### Output

| EmployeeID | FirstName | Salary  |
| ---------- | --------- | ------- |
| 1          | John      | 5000.00 |

### Calculation

```text
5000 × 12 = 60000
```

The calculated value matches the function output.

---

# Observation

The scalar function successfully returned the annual salary for the specified employee.

Instead of manually calculating annual salary every time, the function encapsulates the calculation logic and makes it reusable throughout the database.

---

# Key Learning

Scalar functions return a single value and can be used wherever an expression is allowed in SQL queries.

They are useful for:

* Reusable calculations.
* Data transformations.
* Implementing business rules.
* Reducing repetitive SQL code.

---

# Advantages of Scalar Functions

* Improved code reusability.
* Centralized business logic.
* Easier maintenance.
* Consistent calculations.
* Better readability of SQL queries.

---

# Practical Understanding

A scalar function behaves like a reusable calculator stored inside the database.

In this exercise, the function:

1. Accepts an `EmployeeID` as input.
2. Retrieves the employee's monthly salary.
3. Calculates the annual salary.
4. Returns the calculated value.

This approach allows applications and SQL queries to reuse the same calculation logic without rewriting the formula.

---

# Conclusion

This exercise demonstrated how to create and execute a scalar function in SQL Server.

The following concepts were explored:

* Creating scalar functions.
* Using input parameters.
* Returning a single value.
* Performing calculations inside functions.
* Reusing database logic.

Scalar functions are commonly used in enterprise applications to encapsulate calculations and business rules, making SQL code more maintainable, consistent, and reusable.
