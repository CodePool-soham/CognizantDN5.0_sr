

````

\# Exercise 03 - ASP.NET Core Web API (Custom Model, Filters, Swagger)



\## 📌 Project Overview

This project demonstrates the implementation of an ASP.NET Core Web API using .NET 8. It focuses on custom model creation, HTTP methods, action filters, exception handling, and Swagger testing.



\---



\## 🎯 Objectives Covered



\- Creation of Action methods returning custom model entities

\- Usage of `\[AllowAnonymous]` and `\[HttpGet]`

\- Understanding and implementation of `\[FromBody]`

\- Demonstration of custom Action Filter using `ActionFilterAttribute`

\- Implementation of custom exception handling using `IExceptionFilter`

\- Swagger testing of API endpoints and error responses



\---



\## 🧩 Technologies Used



\- ASP.NET Core Web API (.NET 8)

\- C#

\- Swagger (Swashbuckle.AspNetCore)

\- Visual Studio 2026 Community



\---



\## 📦 Models Used



\### Employee Model

```csharp

public class Employee

{

&#x20;   public int Id { get; set; }

&#x20;   public string Name { get; set; }

&#x20;   public int Salary { get; set; }

&#x20;   public bool Permanent { get; set; }

&#x20;   public Department Department { get; set; }

&#x20;   public List<Skill> Skills { get; set; }

&#x20;   public DateTime DateOfBirth { get; set; }

}

````



\### Department Model



```csharp

public class Department

{

&#x20;   public int Id { get; set; }

&#x20;   public string Name { get; set; }

}

```



\### Skill Model



```csharp

public class Skill

{

&#x20;   public int Id { get; set; }

&#x20;   public string Name { get; set; }

}

```



\---



\## 🚀 Web API Features Implemented



\### 1. HTTP GET (Read Operation)



\* Returns list of Employee objects

\* Uses `\[HttpGet]`

\* Uses `\[AllowAnonymous]`

\* Uses `\[ProducesResponseType(200)]`



\---



\### 2. HTTP POST / PUT (Write Operations)



\* Accepts Employee object using `\[FromBody]`

\* Adds and updates employee data



\---



\## 🔐 Custom Authorization Filter



A custom action filter was created to validate incoming requests.



\### Features:



\* Checks for `Authorization` header

\* Validates presence of `Bearer` token

\* Returns `400 Bad Request` if validation fails



\### Logic:



\* No Authorization header → Invalid request - No Auth token

\* Invalid token → Invalid request - Token present but Bearer unavailable



\---



\## ⚠️ Custom Exception Filter



A global exception filter was implemented using `IExceptionFilter`.



\### Features:



\* Captures unhandled exceptions

\* Logs exception details into a local file (`exception\_log.txt`)

\* Returns custom error response with HTTP 500 status code



\---



\## 🧪 Swagger Testing



Swagger UI is used to test all API endpoints.



\### URL:



```

https://localhost:<port>/swagger

```



\### Tested Operations:



\* GET Employees

\* POST Employee

\* PUT Employee

\* Exception handling (500 error simulation)



\---



\## 📌 Key Learnings



\* RESTful Web API structure and execution

\* HTTP verbs and their usage (GET, POST, PUT)

\* Model binding using `\[FromBody]`

\* Action Filters for request validation

\* Exception Filters for global error handling

\* Swagger integration for API testing



\---



\## 🧾 Conclusion



This project demonstrates a complete ASP.NET Core Web API with custom models, CRUD operations, request filtering, and exception handling. Swagger is used for testing and validation of all endpoints.



```



\---

```



