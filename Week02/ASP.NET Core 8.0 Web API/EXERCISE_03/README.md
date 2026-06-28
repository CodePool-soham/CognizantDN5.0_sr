# Exercise 03 - ASP.NET Core Web API (Custom Model, Filters, Swagger)

## 📌 Project Overview

This project demonstrates the implementation of an ASP.NET Core Web API application using .NET 8.

The exercise focuses on:

* Creating custom model entities
* Implementing API action methods
* Using model binding with `[FromBody]`
* Applying action filters for request validation
* Implementing global exception handling
* Testing API endpoints using Swagger UI

---

# 🎯 Objectives Covered

The following objectives were achieved:

* Creating action methods that return custom model objects
* Using `[HttpGet]` and `[AllowAnonymous]` attributes
* Understanding model binding using `[FromBody]`
* Creating custom Action Filters using `ActionFilterAttribute`
* Creating custom Exception Filters using `IExceptionFilter`
* Handling API errors with custom responses
* Testing successful and failed API scenarios using Swagger

---

# 🧩 Technologies Used

| Technology                       | Purpose                       |
| -------------------------------- | ----------------------------- |
| ASP.NET Core Web API (.NET 8)    | API development               |
| C#                               | Programming language          |
| Swagger (Swashbuckle.AspNetCore) | API documentation and testing |
| Visual Studio Community          | Development environment       |

---

# 📦 Models Used

The API uses custom models to represent employee-related information.

---

# Employee Model

```csharp
public class Employee
{
    public int Id { get; set; }

    public string Name { get; set; }

    public int Salary { get; set; }

    public bool Permanent { get; set; }

    public Department Department { get; set; }

    public List<Skill> Skills { get; set; }

    public DateTime DateOfBirth { get; set; }
}
```

---

# Department Model

```csharp
public class Department
{
    public int Id { get; set; }

    public string Name { get; set; }
}
```

---

# Skill Model

```csharp
public class Skill
{
    public int Id { get; set; }

    public string Name { get; set; }
}
```

---

# 🚀 Web API Features Implemented

## 1. HTTP GET Operation

The GET API retrieves employee information.

Features implemented:

* Uses `[HttpGet]`
* Uses `[AllowAnonymous]`
* Returns employee collection
* Specifies response type using `[ProducesResponseType]`

Example:

```csharp
[HttpGet]
[AllowAnonymous]
[ProducesResponseType(200)]
public IActionResult GetEmployees()
{
    return Ok(employees);
}
```

---

# 2. HTTP POST and PUT Operations

POST and PUT operations are used for creating and updating employee records.

## `[FromBody]` Usage

The `[FromBody]` attribute is used to bind JSON request data to the Employee model.

Example:

```csharp
[HttpPost]
public IActionResult AddEmployee([FromBody] Employee employee)
{
    return Ok(employee);
}
```

Purpose:

* Converts JSON request data into C# objects
* Allows API methods to receive complex objects
* Simplifies data transfer between client and server

---

# 🔐 Custom Authorization Action Filter

A custom action filter was created to validate incoming API requests.

## Purpose

The filter checks whether the request contains valid authorization information before executing controller actions.

---

## Validation Rules

The filter performs the following checks:

### 1. Missing Authorization Header

Condition:

```
Authorization header not found
```

Response:

```
Invalid request - No Auth token
```

---

### 2. Invalid Bearer Token

Condition:

```
Authorization header exists but Bearer token is missing
```

Response:

```
Invalid request - Token present but Bearer unavailable
```

---

## Implementation Concept

The filter inherits from:

```csharp
ActionFilterAttribute
```

It executes before controller action methods.

Benefits:

* Centralized request validation
* Reduces duplicate code
* Improves API security handling

---

# ⚠️ Custom Exception Filter

A global exception filter was implemented using:

```csharp
IExceptionFilter
```

---

## Features

The exception filter:

* Captures unhandled exceptions
* Prevents application crashes
* Logs exception information
* Returns custom HTTP 500 response

---

## Exception Logging

Exception details are stored in:

```text
exception_log.txt
```

The log contains:

* Exception message
* Error details
* Timestamp information

---

## Custom Error Response

When an exception occurs, the API returns:

```text
HTTP 500 Internal Server Error
```

with a custom error message.

---

# 🧪 Swagger Testing

Swagger UI was used to test all API endpoints.

Swagger URL:

```text
https://localhost:<port>/swagger
```

---

# Tested Operations

The following scenarios were verified:

## GET Employee

Purpose:

* Retrieve employee data
* Verify custom model response

---

## POST Employee

Purpose:

* Send employee JSON object
* Verify model binding using `[FromBody]`

---

## PUT Employee

Purpose:

* Update employee information
* Verify successful modification

---

## Exception Handling Test

Purpose:

* Trigger application exception
* Verify custom exception filter behavior
* Confirm HTTP 500 response

---

# 📌 API Flow

The request processing flow:

```
Client Request
       |
       ↓
Routing
       |
       ↓
Action Filter Validation
       |
       ↓
Controller Action
       |
       ↓
Exception Filter (if error occurs)
       |
       ↓
HTTP Response
```

---

# 📌 Key Learnings

Through this exercise, the following concepts were demonstrated:

* RESTful Web API architecture
* Custom model creation
* HTTP GET, POST, PUT operations
* Model binding using `[FromBody]`
* Action Filters
* Exception Filters
* Global error handling
* Swagger API testing

---

# Advantages of Filters in ASP.NET Core

## Action Filters

Benefits:

* Reusable request validation logic
* Cleaner controllers
* Centralized processing

---

## Exception Filters

Benefits:

* Centralized exception handling
* Improved API reliability
* Consistent error responses
* Easier debugging through logging

---

# 🧾 Conclusion

This project successfully demonstrated the development of an ASP.NET Core Web API with custom models, API operations, filters, and exception handling.

The exercise covered:

* Creating custom entity models
* Implementing HTTP endpoints
* Handling request validation using Action Filters
* Managing errors using Exception Filters
* Testing API behavior using Swagger

The Web API was successfully implemented and tested, providing practical understanding of building maintainable and robust ASP.NET Core applications.
