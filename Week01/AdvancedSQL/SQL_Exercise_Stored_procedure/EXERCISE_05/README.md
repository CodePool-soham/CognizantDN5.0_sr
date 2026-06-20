# Return Data from a Stored Procedure

## Objective

The objective of this exercise is to understand how stored procedures can be used to return data based on user-defined parameters.

This exercise focuses on:

* Creating Stored Procedures
* Using Input Parameters
* Returning Aggregated Data
* Using the `COUNT()` Function
* Implementing Reusable Database Logic

---

# Problem Statement

Create a stored procedure that accepts a `DepartmentID` as input and returns the total number of employees working in that department.

---

# Database Schema

The exercise uses the following tables:

## Departments

Stores department information.

| Column         | Description                  |
| -------------- | ---------------------------- |
| DepartmentID   | Unique department identifier |
| DepartmentName | Name of the department       |

---

## Employees

Stores employee information.

| Column       | Description                |
| ------------ | -------------------------- |
| EmployeeID   | Unique employee identifier |
| FirstName    | Employee first name        |
| LastName     | Employee last name         |
| DepartmentID | Department reference       |
| Salary       | Employee salary            |
| JoinDate     | Employee joining date      |

---

# Stored Procedure

The following stored procedure counts the number of employees belonging to a specific department.

```sql id="1x7z0h"
CREATE PROCEDURE sp_GetEmployeeCountByDepartment
    @DepartmentID INT
AS
BEGIN

    SELECT
        COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = @DepartmentID;

END;
```

---

# Execution

The stored procedure can be executed by passing a `DepartmentID` parameter.

```sql id="83x7r4"
EXEC sp_GetEmployeeCountByDepartment
    @DepartmentID = 3;
```

---

# Output

| TotalEmployees |
| -------------- |
| 2              |

The result indicates that there are two employees assigned to Department 3.

---

# Observation

The stored procedure successfully returned the total number of employees belonging to the specified department.

Instead of manually writing the `COUNT()` query every time, the stored procedure allows the same logic to be reused with different department values.

---

# Key Learning

The `COUNT()` function is commonly used to perform aggregate calculations on data.

By combining `COUNT()` with stored procedures and input parameters, database operations become more reusable, maintainable, and easier to execute.

---

# Advantages of Returning Data Through Stored Procedures

* Reusable query logic.
* Reduced code duplication.
* Easier maintenance.
* Consistent data retrieval.
* Improved readability.
* Better organization of database operations.

---

# Practical Understanding

A stored procedure acts as a reusable SQL program stored inside the database.

In this exercise, the procedure accepts a department identifier and returns the total number of employees working in that department.

This approach allows applications to retrieve summarized information without repeatedly writing the same SQL query.

---

# Conclusion

This exercise demonstrated how to create and execute a stored procedure that returns aggregated data using the `COUNT()` function.

The following concepts were explored:

* Creating stored procedures.
* Using input parameters.
* Returning calculated results.
* Applying aggregate functions.
* Reusing database logic.

Stored procedures are widely used in enterprise applications to simplify database operations, improve maintainability, and ensure consistent data access patterns.
