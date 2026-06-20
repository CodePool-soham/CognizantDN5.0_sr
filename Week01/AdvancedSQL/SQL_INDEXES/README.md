\# Exercise 2: SQL Indexes



\## Objective



The objective of this exercise is to understand how SQL indexes improve query performance and how different types of indexes are used in real-world database systems.



This exercise covers:



\* Non-Clustered Index

\* Clustered Index

\* Composite Index

\* Query Execution Plans

\* Performance Optimization



\---



\## Database Schema



The following tables were used for this exercise:



\* Customers

\* Products

\* Orders

\* OrderDetails



These tables simulate a simple order management system.



\---



\# Exercise 1: Creating a Non-Clustered Index



\## Goal



Create a non-clustered index on the `ProductName` column in the `Products` table and compare query execution before and after index creation.



\### Query Before Index Creation



```sql

SELECT \*

FROM Products

WHERE ProductName = 'Laptop';

```



\### Create Non-Clustered Index



```sql

CREATE NONCLUSTERED INDEX IX\_Products\_ProductName

ON Products(ProductName);

```



\### Query After Index Creation



```sql

SELECT \*

FROM Products

WHERE ProductName = 'Laptop';

```



\### Observation



The query result remained the same before and after creating the index.



However, SQL Server can use the non-clustered index to locate matching records more efficiently instead of scanning the entire table.



\### Key Learning



A non-clustered index stores indexed values separately from the table data and contains pointers to the actual rows.



It is useful for frequently searched columns.



\---



\# Exercise 2: Creating a Clustered Index



\## Goal



Understand clustered indexes and their effect on data retrieval.



\### Query



```sql

SELECT \*

FROM Orders

WHERE OrderDate = '2023-01-15';

```



\### Observation



The `Orders` table already contains a Primary Key on `OrderID`.



In SQL Server, a Primary Key automatically creates a clustered index unless specified otherwise.



Because a table can have only one clustered index, creating another clustered index on `OrderDate` is not possible without removing the existing clustered index.



\### Verification



```sql

EXEC sp\_helpindex 'Orders';

```



\### Key Learning



A clustered index determines the physical order of rows within a table.



Characteristics:



\* Only one clustered index per table

\* Rows are physically stored according to the clustered index key

\* Efficient for range-based searches and sorting operations



\---



\# Exercise 3: Creating a Composite Index



\## Goal



Create a composite index on the `CustomerID` and `OrderDate` columns and compare query execution before and after index creation.



\### Query Before Index Creation



```sql

SELECT \*

FROM Orders

WHERE CustomerID = 1

AND OrderDate = '2023-01-15';

```



\### Create Composite Index



```sql

CREATE NONCLUSTERED INDEX IX\_Orders\_CustomerID\_OrderDate

ON Orders(CustomerID, OrderDate);

```



\### Query After Index Creation



```sql

SELECT \*

FROM Orders

WHERE CustomerID = 1

AND OrderDate = '2023-01-15';

```



\### Observation



The query output remained unchanged.



However, SQL Server can use the composite index to efficiently locate records that match both conditions.



\### Key Learning



A composite index combines multiple columns into a single index.



Benefits include:



\* Faster filtering on multiple columns

\* Reduced table scans

\* Improved query performance



\---



\# Execution Plans



Execution Plans were generated using:



```text

Ctrl + M

```



or



```text

Query → Include Actual Execution Plan

```



Execution plans help visualize how SQL Server processes a query.



Common operations include:



\### Table Scan



SQL Server checks every row in the table.



\### Index Scan



SQL Server scans an index structure.



\### Index Seek



SQL Server directly navigates to the required data using an index.



Index Seek operations are generally more efficient than Table Scans for large datasets.



\---



\# Practical Observation



During testing, the sample dataset contained only a few rows in each table.



Because the tables were very small, SQL Server sometimes chose a \*\*Clustered Index Scan\*\* or \*\*Table Scan\*\* instead of an \*\*Index Seek\*\*, even after creating additional indexes.



This behavior is expected because SQL Server's Query Optimizer evaluates the cost of different execution strategies. For a very small dataset, scanning a few rows can be more efficient than navigating through an index structure.



In real-world applications containing thousands or millions of records, indexes provide significant performance improvements and SQL Server is more likely to use \*\*Index Seek\*\* operations.



\### Observation from Execution Plans



\* Before index creation, SQL Server performed a scan operation to locate the required records.

\* After index creation, the query results remained unchanged.

\* Due to the small amount of data, SQL Server may still choose a scan operation rather than an index seek.

\* The benefits of indexing become more noticeable as the volume of data increases.



\### Conclusion from Testing



The purpose of this exercise was to understand how indexes are created and how they influence query execution.



While the performance difference was minimal for the provided sample dataset, the exercise demonstrated how SQL Server uses indexes to optimize data retrieval in larger database systems.



\---






\# Advantages of Indexing



\* Faster data retrieval

\* Reduced query execution time

\* Improved database performance

\* Better scalability for large datasets

\* Reduced resource consumption



\---



\# Final Conclusion



This exercise demonstrated the use of different types of indexes in SQL Server.



The following concepts were explored:



\* Non-Clustered Indexes

\* Clustered Indexes

\* Composite Indexes

\* Query Execution Plans

\* SQL Server Query Optimization



Although the sample dataset was small, the exercise provided valuable insight into how SQL Server uses indexes to retrieve data efficiently. Understanding indexing strategies is essential for designing scalable and high-performance database applications.



