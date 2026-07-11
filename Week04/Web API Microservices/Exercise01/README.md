\# Exercise 01 - JWT Authentication in ASP.NET Core Web API



\## Objective



Implement JWT (JSON Web Token) based authentication in an ASP.NET Core Web API and secure endpoints using authorization.



\---



\## Scenario



A microservice requires secure login functionality. Users should be able to authenticate using a login endpoint, receive a JWT token, and use that token to access protected API endpoints.



\---



\## Technologies Used



\* ASP.NET Core Web API (.NET 8)

\* JWT Bearer Authentication

\* Swagger / OpenAPI

\* C#



\---



\## NuGet Package



Install the JWT Authentication package:



```bash

dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer

```



\---





\---



\## JWT Configuration



\### appsettings.json



```json

{

&#x20; "Jwt": {

&#x20;   "Key": "ThisIsASecretKeyForJwtToken12345",

&#x20;   "Issuer": "MyAuthServer",

&#x20;   "Audience": "MyApiUsers",

&#x20;   "DurationInMinutes": 60

&#x20; }

}

```



\---



\## Authentication Configuration



JWT Authentication is configured in `Program.cs` using:



```csharp

builder.Services.AddAuthentication("Bearer")

&#x20;   .AddJwtBearer("Bearer", options =>

&#x20;   {

&#x20;       options.TokenValidationParameters = new TokenValidationParameters

&#x20;       {

&#x20;           ValidateIssuer = true,

&#x20;           ValidateAudience = true,

&#x20;           ValidateLifetime = true,

&#x20;           ValidateIssuerSigningKey = true,

&#x20;           ValidIssuer = builder.Configuration\["Jwt:Issuer"],

&#x20;           ValidAudience = builder.Configuration\["Jwt:Audience"],

&#x20;           IssuerSigningKey = new SymmetricSecurityKey(

&#x20;               Encoding.UTF8.GetBytes(builder.Configuration\["Jwt:Key"]))

&#x20;       };

&#x20;   });



builder.Services.AddAuthorization();

```



\---



\## API Endpoints



\### Login Endpoint



\*\*POST\*\*



```

/api/Auth/login

```



\#### Request Body



```json

{

&#x20; "username": "admin",

&#x20; "password": "password"

}

```



\#### Response



```json

{

&#x20; "token": "<jwt-token>"

}

```



\---



\### Protected Endpoint



\*\*GET\*\*



```

/api/Secure

```



\#### Authorization Required



```

Bearer <jwt-token>

```



\#### Success Response



```text

You have accessed a protected endpoint!

```



\---



\## Testing Procedure



\### Step 1: Login



Send a POST request to:



```

/api/Auth/login

```



using valid credentials:



```json

{

&#x20; "username": "admin",

&#x20; "password": "password"

}

```



A JWT token is generated.



\### Step 2: Authorize



Click the Swagger \*\*Authorize\*\* button and enter:



```

Bearer <generated-token>

```



\### Step 3: Access Protected Endpoint



Send a GET request to:



```

/api/Secure

```



The endpoint returns:



```text

You have accessed a protected endpoint!

```



Without a valid token, the API returns:



```text

401 Unauthorized

```



\---



\## Output



\* JWT token generated successfully.

\* Protected endpoint secured using JWT authentication.

\* Unauthorized requests return HTTP 401.

\* Authorized requests can access protected resources.



\---











\## Note



The original assignment specifies the JWT key as:



```text

ThisIsASecretKeyForJwtToken

```



However, when using the current version of the JWT libraries with .NET 8, this key length is insufficient for the HS256 algorithm and results in the following error:



```text

IDX10720: Unable to create KeyedHashAlgorithm for algorithm 'HS256',

the key size must be greater than: '256' bits.

```



To resolve this issue, the key was updated to:



```text

ThisIsASecretKeyForJwtToken12345

```



This longer key satisfies the minimum security requirements for HS256 token signing and allows JWT token generation to work correctly.















\## Result



JWT Authentication was successfully implemented in ASP.NET Core Web API. Secure endpoints were protected using the `\[Authorize]` attribute and accessed using a valid JWT token.



