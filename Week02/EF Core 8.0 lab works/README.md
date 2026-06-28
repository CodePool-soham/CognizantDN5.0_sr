# EF Core 8.0 - Retail Inventory System

## 📌 Project Overview

The **Retail Inventory System** is a console-based application developed using:

* C#
* .NET 8
* Entity Framework Core 8.0
* SQL Server

The purpose of this project is to understand how **Entity Framework Core (EF Core)** works as an **Object Relational Mapper (ORM)** and how it connects C# objects with relational database tables.

The system manages:

* Product information
* Product categories
* Inventory data

---

# Lab 1: Understanding ORM with Retail Inventory System

## What is ORM?

**ORM (Object Relational Mapping)** is a programming technique that allows developers to interact with relational databases using object-oriented programming languages such as C#.

Instead of writing SQL queries manually, developers work with C# classes and objects.

Entity Framework Core maps:

```
C# Class      <----->   Database Table
Object        <----->   Database Row
Property      <----->   Database Column
```

Example:

### Product Class

```csharp
public class Product
{
    public int Id { get; set; }

    public string Name { get; set; }

    public decimal Price { get; set; }
}
```

Mapped database table:

| Id | Name   | Price |
| -- | ------ | ----- |
| 1  | Laptop | 70000 |

---

# Benefits of ORM

## 1. Productivity

ORM reduces the amount of SQL code developers need to write.

Example using EF Core:

```csharp
context.Products.ToList();
```

Instead of writing:

```sql
SELECT * FROM Products;
```

---

## 2. Maintainability

Database operations are organized using classes and objects, making applications easier to maintain and update.

---

## 3. Abstraction from SQL

Developers can work with C# objects while EF Core internally generates SQL queries.

---

# EF Core vs Entity Framework 6

## Entity Framework Core

EF Core is the modern ORM framework developed by Microsoft.

Features:

* Cross-platform support
* Works on Windows, Linux, and macOS
* Lightweight architecture
* LINQ support
* Asynchronous database operations
* Compiled models
* Improved performance

---

## Entity Framework 6

EF6 is the older ORM framework.

Features:

* Mainly designed for Windows applications
* Mature framework
* Large legacy ecosystem
* Less flexible compared to EF Core

---

## Comparison

| Feature             | EF Core        | EF6             |
| ------------------- | -------------- | --------------- |
| Platform            | Cross-platform | Windows focused |
| Performance         | Faster         | Slower          |
| LINQ Support        | Yes            | Yes             |
| Async Queries       | Yes            | Limited         |
| Modern .NET Support | Yes            | No              |

---

# EF Core 8.0 Features

## 1. JSON Column Mapping

EF Core 8 supports storing complex objects as JSON inside database columns.

Example:

```json
{
  "City": "Kolkata",
  "Pin": "700001"
}
```

Benefits:

* Stores structured data
* Reduces unnecessary tables
* Simplifies object mapping

---

## 2. Compiled Models

EF Core 8 improves startup performance using compiled models.

Benefits:

* Faster application startup
* Reduced model creation overhead
* Better performance for large applications

---

## 3. Interceptors

Interceptors allow developers to execute custom logic before or after database operations.

Examples:

* SQL logging
* Auditing
* Monitoring database activities

---

## 4. Improved Bulk Operations

EF Core provides better support for handling multiple database records efficiently.

---

# Project Setup

## Creating Console Application

Created .NET 8 Console Application:

```
RetailInventory
```

---

# Installed Packages

The following EF Core packages were installed:

```
Microsoft.EntityFrameworkCore.SqlServer 8.0.28

Microsoft.EntityFrameworkCore.Design 8.0.28

Microsoft.EntityFrameworkCore.Tools 8.0.28
```

---

# Lab 2: Database Context Setup

## Project Models

```
Models

├── Category.cs

└── Product.cs
```

---

# Category Model

```csharp
public class Category
{
    public int Id { get; set; }

    public string Name { get; set; }

    public List<Product> Products { get; set; }
}
```

Category represents product categories.

Example:

| Id | Name        |
| -- | ----------- |
| 1  | Electronics |
| 2  | Groceries   |

---

# Product Model

```csharp
public class Product
{
    public int Id { get; set; }

    public string Name { get; set; }

    public decimal Price { get; set; }

    public int CategoryId { get; set; }

    public Category Category { get; set; }
}
```

Product represents inventory items.

Relationship:

```
Category (1) -------- (Many) Product
```

---

# AppDbContext

`DbContext` acts as a bridge between C# objects and SQL Server.

```csharp
public class AppDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }

    public DbSet<Category> Categories { get; set; }
}
```

`DbSet` represents database tables.

---

# Database Connection

SQL Server connection string:

```
Server=localhost\SQLEXPRESS;
Database=RetailInventoryDB;
Trusted_Connection=True;
TrustServerCertificate=True;
```

---

# Lab 3: EF Core Migrations

## Creating Migration

Migration created using:

```
Add-Migration InitialCreate
```

This generates database schema based on the models.

---

## Applying Migration

Database created using:

```
Update-Database
```

Database:

```
RetailInventoryDB
```

Tables:

```
Categories

Products
```

---

# Lab 4: Inserting Initial Data

Initial Categories:

```
Electronics

Groceries
```

Initial Products:

| Product  | Price |
| -------- | ----- |
| Laptop   | 75000 |
| Rice Bag | 1200  |

Data insertion:

```csharp
await context.Products.AddRangeAsync(product1, product2);

await context.SaveChangesAsync();
```

---

# Lab 5: Retrieving Data

## ToListAsync()

Retrieves all records.

```csharp
var products = await context.Products.ToListAsync();
```

SQL Equivalent:

```sql
SELECT * FROM Products;
```

---

## FindAsync()

Retrieves data using primary key.

```csharp
var product = await context.Products.FindAsync(1);
```

---

## FirstOrDefaultAsync()

Returns the first matching record.

```csharp
var expensive =
await context.Products
.FirstOrDefaultAsync(p => p.Price > 50000);
```

---

# Lab 6: Updating and Deleting Records

## Updating Product

Before:

```
Laptop - 75000
```

After:

```
Laptop - 70000
```

Code:

```csharp
product.Price = 70000;

await context.SaveChangesAsync();
```

---

## Deleting Product

Rice Bag product removed.

Code:

```csharp
context.Products.Remove(product);

await context.SaveChangesAsync();
```

---

# Lab 7: LINQ Queries

LINQ allows querying databases using C# syntax.

---

## Filtering Products

```csharp
var products =
await context.Products
.Where(p => p.Price > 1000)
.ToListAsync();
```

SQL Equivalent:

```sql
SELECT *
FROM Products
WHERE Price > 1000;
```

---

## Sorting Products

```csharp
.OrderByDescending(p => p.Price)
```

Displays expensive products first.

---

# DTO (Data Transfer Object)

DTO is used to transfer only required data between application layers.

Instead of returning the complete entity:

```
Product

Id
Name
Price
CategoryId
Category
```

Return only required fields:

```
ProductDTO

Name
Price
```

Example:

```csharp
var productDTOs =
await context.Products
.Select(p => new
{
    p.Name,
    p.Price
})
.ToListAsync();
```

Benefits:

* Reduces unnecessary data transfer
* Improves performance
* Protects sensitive information
* Creates cleaner APIs

---

# Final Project Structure

```
RetailInventory

│
├── Data
│   └── AppDbContext.cs
│
├── Models
│   ├── Category.cs
│   └── Product.cs
│
├── Migrations
│
├── Program.cs
│
└── RetailInventory.csproj
```

---

# Technologies Used

* C#
* .NET 8
* Entity Framework Core 8
* SQL Server Express
* LINQ
* Visual Studio

---

# Conclusion

This project demonstrates how Entity Framework Core 8 works as an ORM.

The application successfully:

* Maps C# classes to SQL Server tables
* Creates database schemas using migrations
* Inserts data using EF Core
* Retrieves data using LINQ
* Updates and deletes records
* Uses DTO projection for optimized queries

The **Retail Inventory System** provides a foundation for developing scalable database-driven applications using **.NET 8 and Entity Framework Core 8**.
