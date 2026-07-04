# Exercise 05 - ASP.NET Core Web API (CORS & JWT Authentication)

## 📌 Project Overview

This project demonstrates how to secure an ASP.NET Core Web API using **JWT (JSON Web Token) Authentication** and configure **Cross-Origin Resource Sharing (CORS)** to allow controlled access from different origins. The application also showcases role-based authorization, claims-based authentication, and API testing using Swagger and Postman.

---

## 🎯 Objectives

### CORS Configuration

- Understand the purpose of Cross-Origin Resource Sharing (CORS).
- Configure CORS policies in ASP.NET Core Web API.
- Enable cross-origin access for client applications.
- Apply CORS middleware using `Program.cs`.

### JWT Authentication & Authorization

- Implement JWT-based authentication.
- Configure Bearer token authentication.
- Generate JWT tokens with claims and roles.
- Protect API endpoints using `[Authorize]`.
- Allow anonymous access using `[AllowAnonymous]`.
- Validate JWT issuer, audience, lifetime, and signing key.
- Test secured endpoints using Swagger and Postman.

---

## 📚 Learning Outcomes

After completing this exercise, you will be able to:

- Configure CORS in an ASP.NET Core Web API.
- Implement JWT authentication using Bearer tokens.
- Generate and validate JWT tokens.
- Secure API endpoints with authentication and authorization.
- Implement role-based authorization.
- Test authenticated APIs using Swagger and Postman.

---

## 🛠️ Technologies Used

- ASP.NET Core Web API (.NET 8)
- C#
- JWT Authentication
- Swagger (Swashbuckle.AspNetCore)
- Postman
- Visual Studio 2022/2026

---

## 📦 NuGet Packages

The following packages were installed:

```text
Microsoft.AspNetCore.Authentication.JwtBearer
System.IdentityModel.Tokens.Jwt
```

---

## 📁 Project Structure

```text
Exercise05.API
│
├── Controllers
│   ├── AuthController.cs
│   └── EmployeeController.cs
│
├── Models
│   └── Employee.cs
│
├── Program.cs
│
└── appsettings.json
```

---

# Understanding CORS

## What is CORS?

**Cross-Origin Resource Sharing (CORS)** is a browser security feature that controls whether a web application running on one origin can access resources hosted on another origin.

Without CORS, browsers block requests from different origins to protect users from unauthorized cross-site requests.

### Benefits

- Enables communication between frontend and backend applications hosted on different domains or ports.
- Prevents unauthorized cross-origin requests.
- Provides fine-grained control over allowed origins, headers, and HTTP methods.

---

# Understanding JWT

## What is JWT?

**JSON Web Token (JWT)** is a compact, URL-safe token format used to securely transmit authentication and authorization information between a client and a server.

### JWT Authentication Flow

1. User authenticates successfully.
2. Server generates a JWT.
3. Client stores the JWT.
4. Client sends the token in the `Authorization` header.
5. Server validates the token.
6. Access is granted or denied based on token validity.

---

## Employee Model

```csharp
namespace Exercise05.API.Models
{
    public class Employee
    {
        public int Id { get; set; }

        public string? Name { get; set; }

        public string? Department { get; set; }

        public decimal Salary { get; set; }
    }
}
```

---

# JWT Authentication Configuration

JWT authentication is configured in **Program.cs**.

```csharp
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

string securityKey = "mysuperdupersecretkeyforjwt256bits";

var symmetricSecurityKey =
    new SymmetricSecurityKey(
        Encoding.UTF8.GetBytes(securityKey));

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme =
        JwtBearerDefaults.AuthenticationScheme;

    options.DefaultChallengeScheme =
        JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters =
        new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,

            ValidIssuer = "mySystem",
            ValidAudience = "myUsers",

            IssuerSigningKey = symmetricSecurityKey
        };
});
```

---

# CORS Configuration

A CORS policy is configured to allow requests from any origin.

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("MyPolicy",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});
```

Enable the middleware:

```csharp
app.UseCors("MyPolicy");

app.UseAuthentication();

app.UseAuthorization();
```

---

# AuthController

The `AuthController` generates JWT tokens for authenticated users.

The controller is marked with:

```csharp
[AllowAnonymous]
```

allowing users to request a token without prior authentication.

---

# JWT Token Generation

```csharp
private string GenerateJSONWebToken(
    int userId,
    string userRole)
{
    var securityKey =
        new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(
                "mysuperdupersecretkeyforjwt256bits"));

    var credentials =
        new SigningCredentials(
            securityKey,
            SecurityAlgorithms.HmacSha256);

    var claims =
        new List<Claim>
        {
            new Claim(ClaimTypes.Role, userRole),
            new Claim("UserId", userId.ToString())
        };

    var token =
        new JwtSecurityToken(
            issuer: "mySystem",
            audience: "myUsers",
            claims: claims,
            expires: DateTime.Now.AddMinutes(10),
            signingCredentials: credentials);

    return new JwtSecurityTokenHandler()
        .WriteToken(token);
}
```

---

# JWT Claims

Each generated JWT contains the following claims:

```text
Role   = Admin
UserId = 1
```

These claims are used during authorization.

---

# EmployeeController

The Employee API is protected using the `[Authorize]` attribute.

```csharp
[Authorize]
[Route("api/[controller]")]
[ApiController]
public class EmployeeController : ControllerBase
{
}
```

Only authenticated users with a valid JWT can access the controller.

---

## Sample Employee Data

```csharp
private static List<Employee> employees = new()
{
    new Employee
    {
        Id = 1,
        Name = "John",
        Department = "HR",
        Salary = 30000
    },
    new Employee
    {
        Id = 2,
        Name = "Mary",
        Department = "IT",
        Salary = 50000
    },
    new Employee
    {
        Id = 3,
        Name = "David",
        Department = "Finance",
        Salary = 45000
    }
};
```

---

# API Endpoints

## Generate JWT Token

```http
GET /api/Auth
```

Returns a JWT token for authenticated access.

---

## Retrieve Employee List

```http
GET /api/Employee
```

Returns employee data only when a valid JWT token is provided.

---

# Testing Scenarios

## Test Case 1 – Access Without Token

**Request**

```http
GET /api/Employee
```

**Expected Response**

```text
401 Unauthorized
```

---

## Test Case 2 – Access With Valid Token

### Steps

1. Generate a JWT token using `AuthController`.
2. Copy the token.
3. Add the following header:

```text
Authorization: Bearer <token>
```

**Expected Response**

```text
200 OK
```

Employee data is returned.

---

## Test Case 3 – Invalid Token

Modify the JWT token manually before sending the request.

**Expected Response**

```text
401 Unauthorized
```

---

## Test Case 4 – Expired Token

Reduce the expiration time:

```csharp
expires: DateTime.Now.AddMinutes(2)
```

Generate a new token, wait until it expires, then call the secured endpoint.

**Expected Response**

```text
401 Unauthorized
```

---

# Role-Based Authorization

The generated JWT contains the role:

```text
Admin
```

### Scenario 1

```csharp
[Authorize(Roles = "POC")]
```

**Expected Response**

```text
403 Forbidden
```

The authenticated user does not have the required role.

---

### Scenario 2

```csharp
[Authorize(Roles = "Admin,POC")]
```

**Expected Response**

```text
200 OK
```

Access is granted because the user has the **Admin** role.

---

# Testing with Swagger

Swagger supports Bearer token authentication.

### Steps

1. Run the application.
2. Open Swagger UI:

```text
https://localhost:<port>/swagger
```

3. Generate a JWT token.
4. Click **Authorize**.
5. Enter:

```text
Bearer <token>
```

6. Execute secured API endpoints.

---

# Testing with Postman

### Step 1

Generate a JWT:

```http
GET /api/Auth
```

### Step 2

Copy the generated token.

### Step 3

In Postman, add the following header:

```text
Authorization: Bearer <token>
```

### Step 4

Call the secured endpoint:

```http
GET /api/Employee
```

### Step 5

Verify the response and HTTP status code.

---

# Expected Results

- ✅ JWT token is generated successfully.
- ✅ Requests without a token return **401 Unauthorized**.
- ✅ Requests with a valid token return **200 OK**.
- ✅ Invalid or tampered tokens return **401 Unauthorized**.
- ✅ Expired tokens return **401 Unauthorized**.
- ✅ Unauthorized roles return **403 Forbidden**.
- ✅ Authorized roles successfully access protected resources.

---

# Key Concepts Demonstrated

- ASP.NET Core Web API
- Cross-Origin Resource Sharing (CORS)
- JWT Authentication
- Bearer Token Authentication
- Claims-Based Authentication
- Role-Based Authorization
- `[Authorize]` and `[AllowAnonymous]`
- Token Validation
- Swagger Authentication
- API Testing with Postman

---

# Conclusion

This exercise demonstrates how to secure an ASP.NET Core Web API using **JWT Authentication** and **Role-Based Authorization**, while enabling controlled cross-origin access through **CORS**. JWT tokens are generated with claims and roles, validated through middleware configuration, and used to protect API endpoints. The application successfully enforces authentication, authorization, token expiration, and role-based access control, and all features are verified using Swagger and Postman.
