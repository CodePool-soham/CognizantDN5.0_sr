



\---



````md

\# Exercise01 - ASP.NET Core Web API (CRUD Hands-on)



\## 📌 Objective



This project demonstrates the creation and execution of a simple ASP.NET Core Web API application. It covers RESTful architecture concepts, HTTP methods, status codes, and configuration files in ASP.NET Core.



\---



\# 📌 1. RESTful Web Service, Web API \& Microservices



\## ✔ RESTful Web Service

REST (Representational State Transfer) is an architectural style used for building scalable web services using HTTP protocols.



\### Features of REST:

\- Representational State Transfer (REST)

\- Stateless communication (no server memory between requests)

\- Uses standard HTTP methods

\- Data is exchanged using messages (JSON/XML)

\- Supports multiple formats (NOT restricted to XML)

\- Lightweight and scalable



\---



\## ✔ Web API vs Web Service



| Web API | Web Service |

|--------|------------|

| Uses HTTP protocol | Uses SOAP or HTTP |

| Lightweight | Heavy and XML-based |

| Supports JSON/XML | Mostly XML |

| Easy integration | Complex integration |



\---



\## ✔ Microservices

Microservices architecture breaks an application into small independent services that communicate over APIs. Each service performs a specific business function and can be deployed independently.



\---



\# 📌 2. HTTP Request \& HTTP Response



\## ✔ HTTP Request

An HTTP Request is sent from the client to the server and contains:

\- URL

\- HTTP Method (GET, POST, PUT, DELETE)

\- Headers

\- Body (optional for POST/PUT)



\## ✔ HTTP Response

An HTTP Response is sent from server to client and contains:

\- Status Code (200, 400, 401, 500)

\- Response Data (JSON/XML)

\- Headers



\---



\# 📌 3. HTTP Action Verbs



ASP.NET Core Web API uses HTTP verbs to perform operations:



| Verb | Meaning |

|------|--------|

| GET | Retrieve data |

| POST | Create new data |

| PUT | Update existing data |

| DELETE | Remove data |



\### Usage in Web API Controller:



```csharp

\[HttpGet]

\[HttpPost]

\[HttpPut]

\[HttpDelete]

````



These attributes define which HTTP method an action method will respond to.



\---



\# 📌 4. HTTP Status Codes in Web API



ASP.NET Core uses ActionResult types to return HTTP status codes:



| Status Code               | Meaning                 |

| ------------------------- | ----------------------- |

| Ok (200)                  | Request successful      |

| BadRequest (400)          | Invalid input           |

| Unauthorized (401)        | Authentication required |

| InternalServerError (500) | Server-side error       |



\### Example:



```csharp

return Ok();

return BadRequest();

return Unauthorized();

return StatusCode(500);

```



\---



\# 📌 5. Web API Structure



A Web API consists of:



\### ✔ Controller



Handles incoming HTTP requests.



\### ✔ Action Methods



Methods inside controller that handle operations.



\### ✔ ApiController Base Class



Enables API-specific behavior like automatic model validation.



\### Example Structure:



```csharp

\[ApiController]

\[Route("api/\[controller]")]

public class ValuesController : ControllerBase

{

&#x20;   \[HttpGet]

&#x20;   public IActionResult Get() { return Ok(); }

}

```



\---



\# 📌 6. Configuration Files in ASP.NET Core



\## ✔ Program.cs



Main entry point of application.



Used for:



\* Dependency Injection

\* Middleware configuration

\* Routing setup



\---



\## ✔ appsettings.json



Used to store configuration values like:



\* Connection strings

\* Logging settings

\* Application settings



\---



\## ✔ launchSettings.json



Defines runtime settings such as:



\* Application URL

\* Environment (Development/Production)

\* Debug configuration



\---



\## ✔ (Old ASP.NET 4.5 Reference)



\### Route.config



Defines routing patterns for Web API requests.



\### WebApi.config



Used to configure:



\* Routes

\* Formatters (JSON/XML)

\* Filters



\---



\# 📌 7. Hands-on Implementation



\## ✔ Steps performed:



1\. Created ASP.NET Core Web API project using Visual Studio

2\. Selected Web API template

3\. Created ValuesController with Read/Write actions

4\. Implemented HTTP verbs:



&#x20;  \* GET

&#x20;  \* POST

&#x20;  \* PUT

&#x20;  \* DELETE

5\. Executed application using Swagger

6\. Tested all API endpoints successfully



\---



\# 📌 8. API Endpoints



| Method | Endpoint         | Description     |

| ------ | ---------------- | --------------- |

| GET    | /api/values      | Get all values  |

| GET    | /api/values/{id} | Get value by ID |

| POST   | /api/values      | Create value    |

| PUT    | /api/values/{id} | Update value    |

| DELETE | /api/values/{id} | Delete value    |



\---



\# 📌 9. Output Verification



The application was tested using Swagger UI. All CRUD operations were successfully executed and returned expected HTTP responses.



\---



\# 📌 Conclusion



This project successfully demonstrates the implementation of a RESTful Web API using ASP.NET Core. It includes CRUD operations, HTTP methods, status codes, and configuration understanding. The API was tested using Swagger and verified successfully.



```



\---



```



