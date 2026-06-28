# Exercise01 - ASP.NET Core Web API (CRUD Hands-on)

## Objective

This project demonstrates the creation and execution of a simple ASP.NET Core Web API application.

The exercise focuses on:

* Understanding RESTful Web Services
* Difference between Web API and Web Services
* Introduction to Microservices Architecture
* HTTP Request and Response concepts
* HTTP Action Verbs
* HTTP Status Codes
* Creating API Controllers
* Performing CRUD Operations
* Testing APIs using Swagger

---

# 1. RESTful Web Service, Web API & Microservices

## RESTful Web Service

REST (Representational State Transfer) is an architectural style used to design scalable web services using HTTP communication.

### Features of REST

* Uses HTTP protocol for communication
* Stateless request-response communication
* Supports standard HTTP methods
* Transfers data using JSON/XML formats
* Lightweight and scalable architecture
* Suitable for distributed applications

---

## Web API vs Web Service

| Web API                                   | Web Service                         |
| ----------------------------------------- | ----------------------------------- |
| Uses HTTP protocol                        | Uses SOAP or HTTP                   |
| Lightweight architecture                  | More heavyweight                    |
| Supports JSON and XML                     | Mostly XML based                    |
| Easy integration with modern applications | Requires more configuration         |
| Commonly used in REST-based systems       | Commonly used in SOAP-based systems |

---

## Microservices

Microservices architecture divides a large application into small independent services.

Each service:

* Performs a specific business function
* Can be developed independently
* Can be deployed separately
* Communicates through APIs

Example:

An e-commerce application can have separate services for:

* User Management
* Product Management
* Order Processing
* Payment Processing

---

# 2. HTTP Request and HTTP Response

## HTTP Request

An HTTP request is sent from the client application to the server.

It contains:

* URL
* HTTP Method
* Headers
* Request Body (for POST and PUT requests)

Example:

```
GET /api/products
```

---

## HTTP Response

An HTTP response is returned from the server to the client.

It contains:

* HTTP Status Code
* Response Headers
* Response Data

Example:

```json
{
   "id":1,
   "name":"Laptop"
}
```

---

# 3. HTTP Action Verbs

ASP.NET Core Web API uses HTTP verbs to perform CRUD operations.

| HTTP Verb | Purpose              |
| --------- | -------------------- |
| GET       | Retrieve data        |
| POST      | Create new data      |
| PUT       | Update existing data |
| DELETE    | Remove data          |

Usage in Controller:

```csharp
[HttpGet]

[HttpPost]

[HttpPut]

[HttpDelete]
```

These attributes define which HTTP requests are handled by controller methods.

---

# 4. HTTP Status Codes in Web API

ASP.NET Core Web API returns status codes to indicate request results.

| Status Code             | Description                    |
| ----------------------- | ------------------------------ |
| 200 OK                  | Request completed successfully |
| 400 BadRequest          | Invalid request data           |
| 401 Unauthorized        | Authentication required        |
| 500 InternalServerError | Server-side error              |

Examples:

```csharp
return Ok();

return BadRequest();

return Unauthorized();

return StatusCode(500);
```

---

# 5. Web API Structure

A Web API application contains the following components:

## Controller

Controllers handle incoming HTTP requests and return responses.

Example:

```csharp
[ApiController]
[Route("api/[controller]")]
public class ValuesController : ControllerBase
{

}
```

---

## Action Methods

Action methods contain the business logic for handling API requests.

Example:

```csharp
[HttpGet]
public IActionResult Get()
{
    return Ok();
}
```

---

## ApiController Attribute

The `[ApiController]` attribute provides:

* Automatic model validation
* Improved API behavior
* Automatic HTTP response handling

---

# 6. Configuration Files in ASP.NET Core

## Program.cs

The main entry point of an ASP.NET Core application.

Used for:

* Dependency Injection configuration
* Middleware setup
* Application startup configuration
* Routing configuration

---

## appsettings.json

Stores application configuration values.

Examples:

* Connection strings
* Logging configuration
* Application settings

Example:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "DatabaseConnection"
  }
}
```

---

## launchSettings.json

Contains runtime configuration settings.

Used for:

* Application URLs
* Development environment settings
* Debug configuration

---

## ASP.NET Framework Reference Files

### Route.config

Used in older ASP.NET Web API applications for defining routes.

### WebApi.config

Used for:

* API routing
* Formatter configuration
* Filters

---

# 7. Hands-on Implementation

## Steps Performed

1. Created ASP.NET Core Web API project using Visual Studio

2. Selected Web API template

3. Created controller with CRUD actions

4. Implemented HTTP methods:

* GET
* POST
* PUT
* DELETE

5. Executed the application

6. Tested APIs using Swagger UI

7. Verified successful responses

---

# 8. API Endpoints

| Method | Endpoint           | Description           |
| ------ | ------------------ | --------------------- |
| GET    | `/api/values`      | Retrieve all values   |
| GET    | `/api/values/{id}` | Retrieve value by ID  |
| POST   | `/api/values`      | Create new value      |
| PUT    | `/api/values/{id}` | Update existing value |
| DELETE | `/api/values/{id}` | Delete value          |

---

# 9. CRUD Operations

## GET

Used to retrieve resources.

Example:

```http
GET /api/values
```

---

## POST

Used to create new resources.

Example:

```http
POST /api/values
```

Request Body:

```json
{
   "name":"Sample"
}
```

---

## PUT

Used to update existing resources.

Example:

```http
PUT /api/values/1
```

---

## DELETE

Used to remove resources.

Example:

```http
DELETE /api/values/1
```

---

# 10. API Testing Using Swagger

Swagger UI was used to test all API endpoints.

The following operations were verified:

* GET request execution
* POST request execution
* PUT request execution
* DELETE request execution
* Response status verification

---

# Output Verification

All CRUD operations were executed successfully.

Expected responses were received from the API endpoints with appropriate HTTP status codes.

---

# Concepts Demonstrated

* RESTful Web API architecture
* HTTP Request and Response
* HTTP Action Verbs
* HTTP Status Codes
* API Controllers
* CRUD Operations
* ASP.NET Core Configuration Files
* Swagger API Testing
* Basic Microservices Understanding

---

# Conclusion

This exercise successfully demonstrated the development of a RESTful ASP.NET Core Web API application.

The project covered:

* Creating Web API controllers
* Implementing CRUD operations
* Understanding HTTP methods
* Handling HTTP responses
* Testing APIs using Swagger

The application was successfully executed and verified, providing practical understanding of building scalable Web API services using ASP.NET Core.
