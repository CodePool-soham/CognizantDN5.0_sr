# Exercise 2: SQL Indexes

## Objective

The objective of this exercise is to understand how SQL indexes improve query performance and how different types of indexes are used in real-world database systems.

This exercise covers:

* Non-Clustered Index
* Clustered Index
* Composite Index
* Query Execution Plans
* Performance Optimization

---

# Database Schema

The following tables were used for this exercise:

* Customers
* Products
* Orders
* OrderDetails

These tables simulate a simple order management system.

---

# Exercise 1: Creating a Non-Clustered Index

## Goal

Create a non-clustered index on the `ProductName` column in the `Products` table and compare query execution before and after index creation.

---

## Query Before Index Creation

```sql id="6k0xq1"
SELECT *
FROM Products
WHERE ProductName = 'Laptop';
```

---

## Create Non-Clustered Index

```sql id="z6y9bw"
CREATE NONCLUSTERED INDEX IX_Products_ProductName
ON Products(ProductName);
```

---

## Query After Index Creation

```sql id="w7u3x2"
SELECT *
FROM Products
WHERE ProductName = 'Laptop';
```

---

## Observation

The query result remained the same before and after creating the index.

However, SQL Server can use the non-clustered index to locate matching records more efficiently instead of scanning the entire table.

---

## Key Learning

A non-clustered index stores indexed values separately from the table data and contains pointers to the actual rows.

It is useful for frequently searched columns.

---

# Exercise 2: Creating a Clustered Index

## Goal

Understand clustered indexes and their impact on data retrieval.

---

## Query

```sql id="9z5m2k"
SELECT *
FROM Orders
WHERE OrderDate = '2023-01-15';
```

---

## Observation

The `Orders` table already contains a Primary Key on `OrderID`.

In SQL Server, a Primary Key automatically creates a clustered index unless another index type is explicitly specified.

Since a table can contain only one clustered index, creating another clustered index on `OrderDate` requires removing or changing the existing clustered index.

---

## Verification

```sql id="q3t8as"
EXEC sp_helpindex 'Orders';
```

---

## Key Learning

A clustered index determines the physical order of rows within a table.

### Characteristics:

* Only one clustered index can exist per table.
* Rows are physically stored according to the clustered index key.
* Efficient for range-based searches and sorting operations.

---

# Exercise 3: Creating a Composite Index

## Goal

Create a composite index on the `CustomerID` and `OrderDate` columns and compare query execution before and after index creation.

---

## Query Before Index Creation

```sql id="2j8mvp"
SELECT *
FROM Orders
WHERE CustomerID = 1
AND OrderDate = '2023-01-15';
```

---

## Create Composite Index

```sql id="7d4xkn"
CREATE NONCLUSTERED INDEX IX_Orders_CustomerID_OrderDate
ON Orders(CustomerID, OrderDate);
```

---

## Query After Index Creation

```sql id="8f3z0q"
SELECT *
FROM Orders
WHERE CustomerID = 1
AND OrderDate = '2023-01-15';
```

---

## Observation

The query output remained unchanged.

However, SQL Server can use the composite index to efficiently locate records that match both filtering conditions.

---

## Key Learning

A composite index combines multiple columns into a single index structure.

### Benefits:

* Faster filtering on multiple columns.
* Reduced table scans.
* Improved query performance.

---

# Execution Plans

Execution Plans were generated using:

```text id="j8h1z4"
Ctrl + M
```

or:

```text id="u2v6cd"
Query → Include Actual Execution Plan
```

Execution plans help visualize how SQL Server processes a query.

---

## Common Execution Operations

### Table Scan

SQL Server checks every row in the table to find matching records.

### Index Scan

SQL Server scans an index structure to retrieve required information.

### Index Seek

SQL Server directly navigates through an index to locate specific data.

For large datasets, Index Seek operations are generally more efficient than Table Scans.

---

# Practical Observation

During testing, the sample dataset contained only a few rows in each table.

Because the tables were very small, SQL Server sometimes selected a **Clustered Index Scan** or **Table Scan** instead of an **Index Seek**, even after creating additional indexes.

This behavior is expected because SQL Server's Query Optimizer evaluates the cost of different execution strategies. For a small dataset, scanning a few rows can be more efficient than navigating through an index structure.

In real-world applications containing thousands or millions of records, indexes provide significant performance improvements, and SQL Server is more likely to use **Index Seek** operations.

---

# Observation from Execution Plans

* Before index creation, SQL Server performed scan operations to locate required records.
* After index creation, query results remained unchanged.
* Due to the small dataset size, SQL Server may still choose scan operations instead of index seeks.
* The benefits of indexing become more noticeable as the volume of data increases.

---

# Conclusion from Testing

The purpose of this exercise was to understand how indexes are created and how they influence query execution.

Although the performance difference was minimal for the provided sample dataset, the exercise demonstrated how SQL Server uses indexes to optimize data retrieval in larger database systems.

---

# Advantages of Indexing

* Faster data retrieval.
* Reduced query execution time.
* Improved database performance.
* Better scalability for large datasets.
* Reduced resource consumption.

---

# Final Conclusion

This exercise demonstrated the use of different types of indexes in SQL Server.

The following concepts were explored:

* Non-Clustered Indexes.
* Clustered Indexes.
* Composite Indexes.
* Query Execution Plans.
* SQL Server Query Optimization.

Although the sample dataset was small, the exercise provided valuable insight into how SQL Server uses indexes to retrieve data efficiently.

Understanding indexing strategies is essential for designing scalable and high-performance database applications.
