# SQL Stored Procedures

## Objective

The objective of this exercise is to understand how **Stored Procedures** are used in SQL Server to encapsulate reusable database operations.

This exercise focuses on:

* Creating Stored Procedures
* Using Input Parameters
* Retrieving Data using Stored Procedures
* Inserting Data using Stored Procedures
* Improving Code Reusability and Maintainability

---

# Database Schema

The exercise uses an **Employee Management System** consisting of two tables:

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

# Retrieve Employees by Department

## Goal

Create a stored procedure that accepts a `DepartmentID` as input and returns all employees belonging to that department.

---

## Stored Procedure

```sql
CREATE PROCEDURE sp_GetEmployeesByDepartment
    @DepartmentID INT
AS
BEGIN

    SELECT
        EmployeeID,
        FirstName,
        LastName,
        DepartmentID,
        Salary,
        JoinDate
    FROM Employees
    WHERE DepartmentID = @DepartmentID;

END;
```

---

## Execution

```sql
EXEC sp_GetEmployeesByDepartment @DepartmentID = 3;
```

---

## Observation

The procedure successfully returned all employees belonging to the specified department.

---

## Key Learning

Using parameters makes stored procedures reusable because the same procedure can be executed with different department values without modifying the SQL query.

---

# Insert Employee Using Stored Procedure

## Goal

Create a stored procedure that inserts a new employee record into the `Employees` table.

---

## Stored Procedure

```sql
CREATE PROCEDURE sp_InsertEmployee
    @EmployeeID INT,
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50),
    @DepartmentID INT,
    @Salary DECIMAL(10,2),
    @JoinDate DATE
AS
BEGIN

    INSERT INTO Employees
    (
        EmployeeID,
        FirstName,
        LastName,
        DepartmentID,
        Salary,
        JoinDate
    )
    VALUES
    (
        @EmployeeID,
        @FirstName,
        @LastName,
        @DepartmentID,
        @Salary,
        @JoinDate
    );

END;
```

---

## Execution

```sql
EXEC sp_InsertEmployee
    @EmployeeID = 5,
    @FirstName = 'Bruce',
    @LastName = 'Wayne',
    @DepartmentID = 3,
    @Salary = 9000.00,
    @JoinDate = '2024-01-10';
```

---

## Verification

```sql
SELECT * FROM Employees;
```

---

## Observation

The new employee record was successfully inserted into the `Employees` table.

---

## Key Learning

Stored procedures can be used to centralize data modification operations, reducing repetitive SQL code and improving maintainability.

---

# Advantages of Stored Procedures

* Reusable database logic.
* Reduced code duplication.
* Easier maintenance.
* Improved security through parameterized execution.
* Better organization of business logic.
* Consistent database operations.

---

# Practical Understanding

A stored procedure is a precompiled collection of SQL statements stored in the database and executed whenever required.

Instead of repeatedly writing the same SQL queries, developers can store the logic once and execute it multiple times using different parameter values.

In this exercise:

* `sp_GetEmployeesByDepartment` retrieves employee information based on a department.
* `sp_InsertEmployee` inserts new employee records into the database.

This approach improves code readability, maintainability, and consistency across applications.

---

# Conclusion

This exercise demonstrated the creation and execution of stored procedures in SQL Server.

The following concepts were explored:

* Creating stored procedures.
* Using input parameters.
* Retrieving records through stored procedures.
* Inserting records through stored procedures.
* Reusing database logic.

Stored procedures are widely used in enterprise applications because they simplify database operations, improve maintainability, and help enforce consistent business rules.
