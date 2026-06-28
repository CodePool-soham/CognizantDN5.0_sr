# Exercise 02 - ASP.NET Core Web API (Swagger + CRUD + Postman)

## 📌 Project Overview

This project demonstrates the development of a simple ASP.NET Core Web API application using .NET 8.

The project focuses on:

* Swagger integration
* CRUD operation implementation
* Routing concepts
* HTTP methods
* API endpoint testing using Swagger UI and Postman

The application exposes RESTful endpoints that allow clients to perform Create, Read, Update, and Delete operations.

---

# 🎯 Objectives Covered

The following objectives were achieved:

* Installing and configuring Swagger in ASP.NET Core Web API
* Understanding Web API project structure
* Creating API controllers and action methods
* Performing CRUD operations using HTTP verbs
* Testing APIs using Swagger UI
* Testing APIs using Postman
* Understanding routing and endpoint mapping

---

# 🧩 Technologies Used

| Technology                       | Purpose                       |
| -------------------------------- | ----------------------------- |
| ASP.NET Core Web API (.NET 8)    | Backend API development       |
| C#                               | Programming language          |
| Swagger (Swashbuckle.AspNetCore) | API documentation and testing |
| Postman                          | API testing tool              |

---

# 📦 NuGet Package Installed

The following NuGet package was installed:

```
Swashbuckle.AspNetCore
```

## Purpose

This package provides:

* Automatic API documentation generation
* Swagger UI integration
* Interactive API testing interface

---

# 🚀 Swagger Configuration

Swagger was configured in the `Program.cs` file.

## Program.cs

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();

app.UseSwaggerUI();

app.MapControllers();

app.Run();
```

---

# 🌐 Web API Structure

A Web API application consists of controllers and action methods.

## Controller Structure

Controllers:

* Inherit from `ControllerBase`
* Handle HTTP requests
* Return HTTP responses
* Define API endpoints

Example:

```csharp
[ApiController]
[Route("api/[controller]")]
public class ValuesController : ControllerBase
{

}
```

---

# 🔄 HTTP Methods Used

HTTP methods define the operation performed on resources.

| Method | Description          |
| ------ | -------------------- |
| GET    | Retrieve data        |
| POST   | Create new data      |
| PUT    | Update existing data |
| DELETE | Remove data          |

---

# 📌 CRUD Implementation

## GET Operation

Purpose:

* Retrieves existing data
* Returns list of values or a specific value

Example:

```http
GET /api/values
```

---

## POST Operation

Purpose:

* Creates a new resource

Example:

```http
POST /api/values
```

Request Body:

```json
{
   "value":"sample data"
}
```

---

## PUT Operation

Purpose:

* Updates existing data based on ID

Example:

```http
PUT /api/values/1
```

---

## DELETE Operation

Purpose:

* Removes data based on ID

Example:

```http
DELETE /api/values/1
```

---

# 🧪 Swagger Testing

Swagger UI was used to test all API endpoints.

Swagger URL:

```
https://localhost:<port>/swagger
```

## Testing Steps

1. Open Swagger UI
2. Select required API method
3. Click **Try it out**
4. Provide input values
5. Click **Execute**
6. Verify response and HTTP status code

---

# Swagger Operations Tested

The following operations were verified:

## GET

* Retrieved existing values
* Verified response data

## POST

* Submitted JSON request body
* Verified successful creation

## PUT

* Updated existing records
* Verified updated response

## DELETE

* Removed records
* Verified deletion response

---

# 📮 Postman Testing

Postman was used as an alternative tool for API testing.

## Steps Performed

1. Opened Postman
2. Created a new request
3. Selected HTTP method:

* GET
* POST
* PUT
* DELETE

4. Entered API URL:

```
https://localhost:<port>/api/values
```

5. Added JSON body for POST and PUT requests

Example:

```json
"sample value"
```

6. Clicked Send
7. Verified response and status code

---

# Postman Features Used

The following Postman features were demonstrated:

* HTTP request methods
* JSON request body
* Response validation
* Status code verification
* Request collection organization

---

# 🛣️ Routing Concept

Routing determines how HTTP requests are mapped to controller actions.

## Default Route Format

```
api/[controller]
```

Example:

```
api/values
```

---

## Controller Routing Example

```csharp
[Route("api/[controller]")]
public class ValuesController : ControllerBase
{

}
```

The controller name is automatically used as part of the API route.

---

# 📷 Screenshots Included

The project documentation contains screenshots of:

* Swagger Home Page
* GET API Response
* POST API Request
* PUT API Request
* DELETE API Request
* Postman API Testing

---

# 📌 Key Learnings

Through this exercise, the following concepts were understood:

* REST API fundamentals
* ASP.NET Core Web API structure
* Swagger configuration and usage
* HTTP methods and CRUD operations
* API routing concepts
* Testing APIs using Swagger UI
* Testing APIs using Postman

---

# Advantages of Swagger

* Provides automatic API documentation
* Allows interactive API testing
* Reduces dependency on external testing tools
* Improves API development experience

---

# Advantages of Postman

* Supports multiple HTTP methods
* Allows custom request creation
* Helps validate API responses
* Supports API collections and environments

---

# ✅ Conclusion

This project successfully demonstrated the creation of an ASP.NET Core Web API application using .NET 8.

The exercise covered:

* Swagger installation and configuration
* CRUD operation implementation
* API routing
* HTTP request and response handling
* API testing using Swagger UI and Postman

The Web API endpoints were successfully executed and verified, providing practical understanding of developing and testing RESTful APIs in ASP.NET Core.
