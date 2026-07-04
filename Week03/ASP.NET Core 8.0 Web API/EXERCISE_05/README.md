\# Exercise 05 - CORS and JWT Authentication in ASP.NET Core Web API



\## Objective



\### CORS Enablement for Web API Access



\* Understand what CORS (Cross-Origin Resource Sharing) is.

\* Enable CORS in ASP.NET Core Web API.

\* Configure CORS policy using Program.cs.

\* Allow local applications to access Web API resources.



\### Security in Web API



\* Implement JWT (JSON Web Token) Authentication.

\* Configure Bearer Token Authentication.

\* Use Claims and Roles in JWT Tokens.

\* Use `\[Authorize]` and `\[AllowAnonymous]` attributes.

\* Validate JWT Token Issuer, Audience, Lifetime, and Security Key.

\* Test Authentication and Authorization using Swagger and Postman.



\---



\# Introduction



\## What is CORS?



Cross-Origin Resource Sharing (CORS) is a security mechanism implemented by browsers that allows or restricts resources requested from another domain.



CORS enables controlled access to resources located outside a given domain and is commonly used when a frontend application consumes a backend Web API hosted on a different origin.



\---



\## What is JWT?



JSON Web Token (JWT) is a compact, URL-safe token format used for securely transmitting information between parties.



JWT Authentication works by:



1\. Generating a token after successful authentication.

2\. Sending the token in the Authorization header.

3\. Validating the token at the Web API.

4\. Granting or denying access based on the token validity.



\---



\# Software Requirements



\* Visual Studio 2022

\* ASP.NET Core Web API

\* .NET 8.0

\* Swagger

\* Postman



\---



\# NuGet Packages Installed



```text

Microsoft.AspNetCore.Authentication.JwtBearer

System.IdentityModel.Tokens.Jwt

```



\---



\# Project Structure



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

└── appsettings.json

```



\---



\# Employee Model



```csharp

namespace Exercise05.API.Models

{

&#x20;   public class Employee

&#x20;   {

&#x20;       public int Id { get; set; }



&#x20;       public string? Name { get; set; }



&#x20;       public string? Department { get; set; }



&#x20;       public decimal Salary { get; set; }

&#x20;   }

}

```



\---



\# JWT Configuration in Program.cs



```csharp

using Microsoft.AspNetCore.Authentication.JwtBearer;

using Microsoft.IdentityModel.Tokens;

using System.Text;



string securityKey = "mysuperdupersecretkeyforjwt256bits";



var symmetricSecurityKey =

&#x20;   new SymmetricSecurityKey(

&#x20;       Encoding.UTF8.GetBytes(securityKey));



builder.Services.AddAuthentication(options =>

{

&#x20;   options.DefaultAuthenticateScheme =

&#x20;       JwtBearerDefaults.AuthenticationScheme;



&#x20;   options.DefaultChallengeScheme =

&#x20;       JwtBearerDefaults.AuthenticationScheme;

})

.AddJwtBearer(options =>

{

&#x20;   options.TokenValidationParameters =

&#x20;       new TokenValidationParameters

&#x20;       {

&#x20;           ValidateIssuer = true,

&#x20;           ValidateAudience = true,

&#x20;           ValidateLifetime = true,

&#x20;           ValidateIssuerSigningKey = true,



&#x20;           ValidIssuer = "mySystem",

&#x20;           ValidAudience = "myUsers",



&#x20;           IssuerSigningKey = symmetricSecurityKey

&#x20;       };

});

```



\---



\# CORS Configuration



```csharp

builder.Services.AddCors(options =>

{

&#x20;   options.AddPolicy("MyPolicy",

&#x20;       policy =>

&#x20;       {

&#x20;           policy.AllowAnyOrigin()

&#x20;                 .AllowAnyHeader()

&#x20;                 .AllowAnyMethod();

&#x20;       });

});

```



Enable Middleware:



```csharp

app.UseCors("MyPolicy");



app.UseAuthentication();



app.UseAuthorization();

```



\---



\# AuthController



The AuthController is responsible for generating JWT tokens.



The controller is marked with:



```csharp

\[AllowAnonymous]

```



to allow token generation without authentication.



\---



\# Generate JSON Web Token



```csharp

private string GenerateJSONWebToken(

&#x20;   int userId,

&#x20;   string userRole)

{

&#x20;   var securityKey =

&#x20;       new SymmetricSecurityKey(

&#x20;           Encoding.UTF8.GetBytes(

&#x20;               "mysuperdupersecretkeyforjwt256bits"));



&#x20;   var credentials =

&#x20;       new SigningCredentials(

&#x20;           securityKey,

&#x20;           SecurityAlgorithms.HmacSha256);



&#x20;   var claims =

&#x20;       new List<Claim>

&#x20;       {

&#x20;           new Claim(ClaimTypes.Role, userRole),

&#x20;           new Claim("UserId", userId.ToString())

&#x20;       };



&#x20;   var token =

&#x20;       new JwtSecurityToken(

&#x20;           issuer: "mySystem",

&#x20;           audience: "myUsers",

&#x20;           claims: claims,

&#x20;           expires: DateTime.Now.AddMinutes(10),

&#x20;           signingCredentials: credentials);



&#x20;   return new JwtSecurityTokenHandler()

&#x20;       .WriteToken(token);

}

```



\---



\# Claims Used



The following claims are included in the JWT token:



```text

Role = Admin

UserId = 1

```



These claims are later used for authorization.



\---



\# EmployeeController



```csharp

\[Authorize]

\[Route("api/\[controller]")]

\[ApiController]

public class EmployeeController : ControllerBase

{

}

```



The Authorize attribute ensures that only authenticated users can access the controller.



\---



\# Hardcoded Employee Data



```csharp

private static List<Employee> employees =

&#x20;   new List<Employee>

{

&#x20;   new Employee

&#x20;   {

&#x20;       Id = 1,

&#x20;       Name = "John",

&#x20;       Department = "HR",

&#x20;       Salary = 30000

&#x20;   },

&#x20;   new Employee

&#x20;   {

&#x20;       Id = 2,

&#x20;       Name = "Mary",

&#x20;       Department = "IT",

&#x20;       Salary = 50000

&#x20;   },

&#x20;   new Employee

&#x20;   {

&#x20;       Id = 3,

&#x20;       Name = "David",

&#x20;       Department = "Finance",

&#x20;       Salary = 45000

&#x20;   }

};

```



\---



\# API Endpoints



\## Generate JWT Token



```http

GET /api/Auth

```



Returns a JWT token.



\---



\## Get Employee List



```http

GET /api/Employee

```



Returns employee data if the request contains a valid JWT token.



\---



\# Testing Scenarios



\## Test Case 1: Access Without JWT Token



Request:



```http

GET /api/Employee

```



Expected Result:



```text

401 Unauthorized

```



\---



\## Test Case 2: Access With Valid JWT Token



Steps:



1\. Generate token using AuthController.

2\. Copy the token.

3\. Add token to Authorization header.



```text

Bearer <token>

```



Expected Result:



```text

200 OK

```



Employee data is returned.



\---



\## Test Case 3: Invalid Token



Modify the JWT token manually and send the request.



Expected Result:



```text

401 Unauthorized

```



\---



\## Test Case 4: JWT Expiration



Modify:



```csharp

expires: DateTime.Now.AddMinutes(2)

```



Generate a token.



Wait for more than 2 minutes.



Expected Result:



```text

401 Unauthorized

```



\---



\# Role-Based Authorization



JWT contains the role:



```text

Admin

```



\---



\## Scenario 1



```csharp

\[Authorize(Roles = "POC")]

```



Expected Result:



```text

403 Forbidden

```



The authenticated user does not have the required role.



\---



\## Scenario 2



```csharp

\[Authorize(Roles = "Admin,POC")]

```



Expected Result:



```text

200 OK

```



Access is granted because the token contains the Admin role.



\---



\# Swagger Testing



Swagger was configured to support Bearer Authentication.



Steps:



1\. Generate JWT token.

2\. Click Authorize.

3\. Enter:



```text

Bearer <token>

```



4\. Execute secured APIs.



\---



\# Postman Testing



1\. Generate JWT using:



```http

GET /api/Auth

```



2\. Copy token.



3\. Open Postman.



4\. Add Authorization Header:



```text

Authorization : Bearer <token>

```



5\. Call:



```http

GET /api/Employee

```



6\. Verify response.



\---



\# Expected Output



\* JWT Token generated successfully.

\* Unauthorized access returns HTTP 401.

\* Valid token returns HTTP 200.

\* Invalid token returns HTTP 401.

\* Expired token returns HTTP 401.

\* Unauthorized role returns HTTP 403.

\* Authorized role returns HTTP 200.



\---



\# Conclusion



This exercise demonstrates the implementation of JWT Authentication and Authorization in ASP.NET Core Web API. JWT tokens were generated using claims and roles, validated through middleware configuration, and tested using Swagger and Postman. CORS support was also configured to allow secure cross-origin API access. The application successfully enforced authentication, authorization, token expiration, and role-based access control.



