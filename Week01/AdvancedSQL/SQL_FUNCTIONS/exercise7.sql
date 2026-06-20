CREATE DATABASE CognizantSQLFunctions;
GO

USE CognizantSQLFunctions;
GO


CREATE TABLE Departments
(
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);
GO

CREATE TABLE Employees
(
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    Salary DECIMAL(10,2),
    JoinDate DATE,

    FOREIGN KEY (DepartmentID)
        REFERENCES Departments(DepartmentID)
);
GO


INSERT INTO Departments
VALUES
(1, 'HR'),
(2, 'Finance'),
(3, 'IT');
GO

INSERT INTO Employees
VALUES
(1, 'John', 'Doe', 1, 5000.00, '2020-01-15'),
(2, 'Jane', 'Smith', 2, 6000.00, '2019-03-22'),
(3, 'Bob', 'Johnson', 3, 5500.00, '2021-07-01');
GO

SELECT * FROM Departments;

SELECT * FROM Employees;

GO
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

SELECT dbo.fn_CalculateAnnualSalary(1) AS AnnualSalary;


SELECT
    EmployeeID,
    FirstName,
    Salary
FROM Employees
WHERE EmployeeID = 1;