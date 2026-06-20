/*
Exercise 1: Ranking and Window Functions

Objective:
- Use ROW_NUMBER(), RANK(), and DENSE_RANK()
- Apply OVER() and PARTITION BY
- Find the top 3 most expensive products in each category

Concepts Covered:
1. Window Functions
2. Ranking Functions
3. PARTITION BY
4. ORDER BY
*/






-- Create a database for Cognizant training exercises
CREATE DATABASE CognizantTraining;
GO

-- Switch to the newly created database
USE CognizantTraining;
GO

-- Create Products table
CREATE TABLE Products
(
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10,2)
);
GO

-- Insert sample product data
-- Duplicate prices are intentionally added to demonstrate
-- the difference between ROW_NUMBER(), RANK(), and DENSE_RANK()
INSERT INTO Products VALUES
(1, 'Laptop A', 'Electronics', 80000),
(2, 'Laptop B', 'Electronics', 80000),
(3, 'Laptop C', 'Electronics', 70000),
(4, 'Phone A', 'Electronics', 60000),

(5, 'Chair A', 'Furniture', 12000),
(6, 'Chair B', 'Furniture', 12000),
(7, 'Table A', 'Furniture', 10000),
(8, 'Sofa A', 'Furniture', 9000);
GO

-- Display all products in the table
SELECT *
FROM Products;

---------------------------------------------------
-- ROW_NUMBER()
---------------------------------------------------
-- Assigns a unique rank to each product
-- within its category.
-- Even if prices are the same, ranks are unique.

SELECT
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER
    (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS RowNumber
FROM Products;

---------------------------------------------------
-- RANK()
---------------------------------------------------
-- Products with the same price receive the same rank.
-- The next rank is skipped.

SELECT
    ProductName,
    Category,
    Price,
    RANK() OVER
    (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS RankValue
FROM Products;

---------------------------------------------------
-- DENSE_RANK()
---------------------------------------------------
-- Products with the same price receive the same rank.
-- No rank numbers are skipped.

SELECT
    ProductName,
    Category,
    Price,
    DENSE_RANK() OVER
    (
        PARTITION BY Category
        ORDER BY Price DESC
    ) AS DenseRankValue
FROM Products;

---------------------------------------------------
-- Top 3 Most Expensive Products Per Category
---------------------------------------------------
-- PARTITION BY creates separate rankings
-- for each category.
--
-- ORDER BY Price DESC ranks products
-- from highest price to lowest price.
--
-- Filter rows where rank <= 3 to get
-- the top 3 products in each category.

WITH ProductRanks AS
(
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,
        ROW_NUMBER() OVER
        (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS RowNum
    FROM Products
)
SELECT *
FROM ProductRanks
WHERE RowNum <= 3;