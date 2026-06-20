
/*
=========================================
Exercise 2: SQL Indexes
=========================================

Objective:
- Create a Non-Clustered Index
- Understand Clustered Indexes
- Create a Composite Index
- Analyze Execution Plans
- Observe Query Performance
*/

-- =========================================
-- Create Tables
-- =========================================

CREATE TABLE Customers
(
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Region VARCHAR(50)
);

CREATE TABLE Products
(
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10,2)
);

CREATE TABLE Orders
(
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,

    FOREIGN KEY (CustomerID)
        REFERENCES Customers(CustomerID)
);

CREATE TABLE OrderDetails
(
    OrderDetailID INT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT,

    FOREIGN KEY (OrderID)
        REFERENCES Orders(OrderID),

    FOREIGN KEY (ProductID)
        REFERENCES Products(ProductID)
);

-- =========================================
-- Insert Sample Data
-- =========================================

INSERT INTO Customers
VALUES
(1, 'Alice', 'North'),
(2, 'Bob', 'South'),
(3, 'Charlie', 'East'),
(4, 'David', 'West');

INSERT INTO Products
VALUES
(1, 'Laptop', 'Electronics', 1200.00),
(2, 'Smartphone', 'Electronics', 800.00),
(3, 'Tablet', 'Electronics', 600.00),
(4, 'Headphones', 'Accessories', 150.00);

INSERT INTO Orders
VALUES
(1, 1, '2023-01-15'),
(2, 2, '2023-02-20'),
(3, 3, '2023-03-25'),
(4, 4, '2023-04-30');

INSERT INTO OrderDetails
VALUES
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 3, 3, 1),
(4, 4, 4, 3);

-- =========================================
-- Exercise 1: Non-Clustered Index
-- =========================================

-- Query before index creation

SELECT *
FROM Products
WHERE ProductName = 'Laptop';

-- Create Non-Clustered Index

CREATE NONCLUSTERED INDEX IX_Products_ProductName
ON Products(ProductName);

-- Query after index creation

SELECT *
FROM Products
WHERE ProductName = 'Laptop';

-- =========================================
-- Exercise 2: Clustered Index
-- =========================================

-- Query using OrderDate

SELECT *
FROM Orders
WHERE OrderDate = '2023-01-15';

-- Verify existing indexes

EXEC sp_helpindex 'Orders';

-- Note:
-- Orders table already has a clustered index
-- because OrderID is defined as PRIMARY KEY.

-- =========================================
-- Exercise 3: Composite Index
-- =========================================

-- Query before composite index creation

SELECT *
FROM Orders
WHERE CustomerID = 1
AND OrderDate = '2023-01-15';

-- Create Composite Index

CREATE NONCLUSTERED INDEX IX_Orders_CustomerID_OrderDate
ON Orders(CustomerID, OrderDate);

-- Query after composite index creation

SELECT *
FROM Orders
WHERE CustomerID = 1
AND OrderDate = '2023-01-15';

-- =========================================
-- Verify Data
-- =========================================

SELECT * FROM Customers;
SELECT * FROM Products;
SELECT * FROM Orders;
SELECT * FROM OrderDetails;

-- =========================================
-- End of Exercise
-- =========================================
```
