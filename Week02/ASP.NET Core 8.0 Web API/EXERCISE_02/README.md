

```

\# Exercise 02 - ASP.NET Core Web API (Swagger + CRUD + Postman)



\## 📌 Project Overview

This project demonstrates the creation of a simple ASP.NET Core Web API using .NET 8. It includes Swagger integration, CRUD operations, routing concepts, and API testing using Swagger UI and Postman.



\---



\## 🎯 Objectives Covered



\- Demonstrate Swagger installation in Web API

\- Understand Web API structure and execution in browser

\- Perform CRUD operations using HTTP methods

\- Use Postman tool for API testing

\- Understand routing and action methods in Web API

\- Learn how Web API endpoints are exposed and tested



\---



\## 🧩 Technologies Used



\- ASP.NET Core Web API (.NET 8)

\- Swagger (Swashbuckle.AspNetCore)

\- C#

\- Postman (for API testing)



\---



\## 📦 NuGet Package Installed



```



Swashbuckle.AspNetCore



````



Used for:

\- API documentation

\- Swagger UI generation

\- API testing interface



\---



\## 🚀 Swagger Configuration



\### Program.cs Configuration



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

````



\---



\## 🌐 Web API Structure



\### Controller Structure



\* Controllers inherit from `ControllerBase`

\* Routes defined using `\[Route("api/\[controller]")]`

\* HTTP methods used as attributes



Example:



```csharp

\[ApiController]

\[Route("api/\[controller]")]

public class ValuesController : ControllerBase

```



\---



\## 🔄 HTTP Methods Used



| Method | Description          |

| ------ | -------------------- |

| GET    | Retrieve data        |

| POST   | Create new data      |

| PUT    | Update existing data |

| DELETE | Remove data          |



\---



\## 📌 CRUD Implementation



\### GET



Returns list of values.



\### POST



Creates new value.



\### PUT



Updates value based on ID.



\### DELETE



Deletes value based on ID.



\---



\## 🧪 Swagger Testing



Swagger UI is available at:



```

https://localhost:<port>/swagger

```



\### Steps:



1\. Open Swagger UI

2\. Select API method (GET/POST/PUT/DELETE)

3\. Click "Try it out"

4\. Provide input values

5\. Click "Execute"

6\. View response and status code



\---



\## 📮 Postman Testing



\### Steps used:



\* Open Postman tool

\* Create new request

\* Select HTTP method (GET/POST/PUT/DELETE)

\* Enter API URL:



&#x20; ```

&#x20; https://localhost:<port>/api/values

&#x20; ```

\* Add JSON body for POST/PUT:



&#x20; ```json

&#x20; "sample value"

&#x20; ```

\* Click Send

\* Verify response and status code (200 OK)



\### Postman Features Used:



\* Request methods (GET, POST, PUT, DELETE)

\* JSON body input

\* Response status codes

\* Collection grouping of requests



\---



\## 🛣️ Routing Concept



Default route format:



```

api/\[controller]

```



Example:



```

api/values

```



\### Controller Routing Example:



```csharp

\[Route("api/\[controller]")]

```



\---



\## 📷 Screenshots Included



\* Swagger Home Page

\* GET Response in Swagger

\* POST Request in Swagger

\* PUT Request in Swagger

\* DELETE Request in Swagger



\---



\## 📌 Key Learnings



\* How REST APIs work in ASP.NET Core

\* How Swagger simplifies API testing

\* How HTTP methods map to CRUD operations

\* How routing works in Web API

\* How Postman is used for API testing



\---



\## ✅ Conclusion



This project demonstrates a complete working ASP.NET Core Web API with Swagger integration and CRUD functionality, successfully tested using Swagger UI and Postman.



```



\---





```



