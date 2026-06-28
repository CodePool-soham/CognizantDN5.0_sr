\# EF Core 8.0 - Retail Inventory System



\## Project Overview



This project is a Retail Inventory Management System built using:



\- C#

\- .NET 8

\- Entity Framework Core 8.0

\- SQL Server



The purpose of this project is to understand how Entity Framework Core works as an Object Relational Mapper (ORM) and how it connects C# objects with relational database tables.



The system manages:



\- Product information

\- Product categories

\- Inventory data



\---



\# Lab 1: Understanding ORM with Retail Inventory System



\## What is ORM?



ORM stands for \*\*Object Relational Mapping\*\*.



ORM is a programming technique that allows developers to interact with relational databases using object-oriented programming languages such as C#.



Instead of writing SQL queries manually, developers work with C# classes and objects.



Entity Framework Core maps:



```

C# Class  <----->  Database Table

Object    <----->  Database Row

Property  <----->  Database Column

```



Example:



C# Product class:



```csharp

public class Product

{

&#x20;   public int Id { get; set; }



&#x20;   public string Name { get; set; }



&#x20;   public decimal Price { get; set; }

}

```



EF Core maps this class to a database table:



| Id | Name | Price |

|----|------|-------|

| 1 | Laptop | 70000 |



\---



\## Benefits of ORM



\### 1. Productivity



ORM reduces the amount of SQL code developers need to write.



Developers can use C#:



```csharp

context.Products.ToList();

```



instead of manually writing:



```sql

SELECT \* FROM Products;

```



\---



\### 2. Maintainability



Database operations are organized using classes and objects.



This makes applications easier to update and maintain.



\---



\### 3. Abstraction from SQL



Developers do not need to manage database queries directly.



EF Core handles SQL generation internally.



\---



\# EF Core vs Entity Framework 6



\## Entity Framework Core



EF Core is the modern ORM framework developed by Microsoft.



Features:



\- Cross-platform support

\- Works with Windows, Linux, and macOS

\- Lightweight architecture

\- Supports LINQ queries

\- Supports asynchronous operations

\- Supports compiled queries

\- Better performance



\---



\## Entity Framework 6



EF6 is the older ORM framework.



Features:



\- Mainly designed for Windows applications

\- More mature framework

\- Larger legacy ecosystem

\- Less flexible compared to EF Core



\---



\## Comparison



| Feature | EF Core | EF6 |

|---------|---------|-----|

| Platform | Cross-platform | Windows focused |

| Performance | Faster | Slower |

| LINQ Support | Yes | Yes |

| Async Queries | Yes | Limited |

| Modern .NET Support | Yes | No |



\---



\# EF Core 8.0 Features



\## 1. JSON Column Mapping



EF Core 8 supports storing complex objects as JSON inside database columns.



Example:



```json

{

&#x20;   "City": "Kolkata",

&#x20;   "Pin": "700001"

}

```



This allows developers to store structured data without creating multiple tables.



\---



\## 2. Improved Performance with Compiled Models



EF Core 8 improves application startup time and query performance using compiled models.



Benefits:



\- Faster application startup

\- Reduced model creation overhead

\- Better performance for large applications



\---



\## 3. Interceptors



Interceptors allow developers to execute custom logic before or after database operations.



Examples:



\- Logging SQL queries

\- Auditing changes

\- Monitoring database operations



\---



\## 4. Better Bulk Operations



EF Core provides improved methods for handling multiple database records efficiently.



\---



\# Project Setup



\## Creating Console Application



Created a .NET 8 Console Application:



```

RetailInventory

```



\---



\## Installed Packages



The following EF Core packages were installed:



```

Microsoft.EntityFrameworkCore.SqlServer 8.0.28



Microsoft.EntityFrameworkCore.Design 8.0.28



Microsoft.EntityFrameworkCore.Tools 8.0.28

```



\---



\# Lab 2: Database Context Setup



\## Models Created



The application contains two models:



```

Models

&#x20;|

&#x20;├── Category.cs

&#x20;|

&#x20;└── Product.cs

```



\---



\# Category Model



```csharp

public class Category

{

&#x20;   public int Id { get; set; }



&#x20;   public string Name { get; set; }



&#x20;   public List<Product> Products { get; set; }

}

```



The Category model represents a database table containing product categories.



Example:



| Id | Name |

|-|-|

|1|Electronics|

|2|Groceries|



\---



\# Product Model



```csharp

public class Product

{

&#x20;   public int Id { get; set; }



&#x20;   public string Name { get; set; }



&#x20;   public decimal Price { get; set; }



&#x20;   public int CategoryId { get; set; }



&#x20;   public Category Category { get; set; }

}

```



The Product model represents products stored in inventory.



\---



\# AppDbContext



The DbContext acts as a bridge between C# objects and SQL Server.



```csharp

public class AppDbContext : DbContext

{

&#x20;   public DbSet<Product> Products { get; set; }



&#x20;   public DbSet<Category> Categories { get; set; }

}

```



DbSet represents database tables.



\---



\# Database Connection



SQL Server connection:



```

Server=localhost\\SQLEXPRESS;

Database=RetailInventoryDB;

Trusted\_Connection=True;

TrustServerCertificate=True;

```



\---



\# Lab 3: EF Core Migrations



\## Creating Migration



Migration was created using:



```

Add-Migration InitialCreate

```



This generated the database schema based on the models.



\---



\## Applying Migration



Database was created using:



```

Update-Database

```



Database created:



```

RetailInventoryDB

```



Tables:



```

Categories



Products

```



\---



\# Lab 4: Inserting Initial Data



Initial categories:



```

Electronics



Groceries

```



Initial products:



| Product | Price |

|-|-|

| Laptop | 75000 |

| Rice Bag | 1200 |



Data was inserted using:



```csharp

AddRangeAsync()



SaveChangesAsync()

```



Example:



```csharp

await context.Products.AddRangeAsync(product1, product2);



await context.SaveChangesAsync();

```



\---



\# Lab 5: Retrieving Data



EF Core provides different methods to query data.



\---



\## ToListAsync()



Retrieves all records.



Example:



```csharp

var products = await context.Products.ToListAsync();

```



SQL equivalent:



```sql

SELECT \* FROM Products;

```



\---



\## FindAsync()



Finds data using primary key.



Example:



```csharp

var product = await context.Products.FindAsync(1);

```



\---



\## FirstOrDefaultAsync()



Returns the first matching record.



Example:



```csharp

var expensive =

await context.Products.FirstOrDefaultAsync(

p => p.Price > 50000);

```



\---



\# Lab 6: Updating and Deleting Records



\## Updating Product



Laptop price was updated:



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



\---



\## Deleting Product



Rice Bag product was removed.



Code:



```csharp

context.Products.Remove(product);



await context.SaveChangesAsync();

```



\---



\# Lab 7: LINQ Queries



LINQ allows querying databases using C# syntax.



\---



\## Filtering Products



Example:



```csharp

var products =

await context.Products

.Where(p => p.Price > 1000)

.ToListAsync();

```



SQL equivalent:



```sql

SELECT \*

FROM Products

WHERE Price > 1000;

```



\---



\## Sorting Products



Example:



```csharp

.OrderByDescending(p => p.Price)

```



This displays expensive products first.



\---



\# DTO (Data Transfer Object)



DTO stands for Data Transfer Object.



A DTO is an object used to transfer only required data between application layers.



Instead of returning the complete database entity:



```

Product

\------------

Id

Name

Price

CategoryId

Category

```



we can return only:



```

ProductDTO

\------------

Name

Price

```



Example:



```csharp

var productDTOs =

await context.Products

.Select(p => new

{

&#x20;   p.Name,

&#x20;   p.Price

})

.ToListAsync();

```



Output:



```

Product DTO Data:



Laptop - ₹70000

```



Only the required fields are transferred.



Benefits:



\- Reduces unnecessary data transfer

\- Improves performance

\- Protects sensitive information

\- Makes APIs cleaner



\---



\# Final Project Structure



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



\---



\# Technologies Used



\- C#

\- .NET 8

\- Entity Framework Core 8

\- SQL Server Express

\- LINQ

\- Visual Studio 2022



\---



\# Conclusion



This project demonstrates how Entity Framework Core 8 works as an ORM.



The application successfully:



\- Maps C# classes to SQL Server tables

\- Creates database schemas using migrations

\- Inserts data using EF Core

\- Retrieves data using LINQ

\- Updates and deletes records

\- Uses DTO projection for optimized queries



The Retail Inventory System provides a foundation for building larger database-driven applications using EF Core.

