# Exercise 01 – JWT Authentication in ASP.NET Core Web API

## Overview

This project demonstrates how to implement **JWT (JSON Web Token) Authentication** in an **ASP.NET Core Web API (.NET 8)**. It covers JWT configuration, token generation, authentication middleware, and securing API endpoints using the `[Authorize]` attribute. The application is tested using **Swagger UI**.

---

## Objectives

- Understand JWT-based authentication.
- Configure JWT Authentication in ASP.NET Core Web API.
- Generate JWT tokens after successful user authentication.
- Secure API endpoints using the `[Authorize]` attribute.
- Validate JWT tokens using issuer, audience, lifetime, and signing key.
- Test authentication using Swagger.

---

## Technologies Used

- ASP.NET Core Web API (.NET 8)
- C#
- JWT Bearer Authentication
- Swagger / OpenAPI
- Visual Studio 2022

---

## NuGet Package

Install the JWT Authentication package:

```bash
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
```

---

## Project Structure

```text
Exercise01.JWTAuthentication

│
├── Controllers
│   ├── AuthController.cs
│   └── SecureController.cs
│
├── Models
│   └── LoginRequest.cs
│
├── Program.cs
├── appsettings.json
└── README.md
```

---

## JWT Configuration

The JWT settings are stored in **appsettings.json**.

```json
{
  "Jwt": {
    "Key": "ThisIsASecretKeyForJwtToken12345",
    "Issuer": "MyAuthServer",
    "Audience": "MyApiUsers",
    "DurationInMinutes": 60
  }
}
```

Configuration values include:

- **Key** – Secret key used to sign JWT tokens.
- **Issuer** – Identifies the token issuer.
- **Audience** – Specifies the intended recipients.
- **DurationInMinutes** – Token expiration time.

---

## JWT Authentication Configuration

JWT Authentication is configured in **Program.cs**.

```csharp
builder.Services.AddAuthentication("Bearer")
    .AddJwtBearer("Bearer", options =>
    {
        options.TokenValidationParameters =
            new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,

                ValidIssuer = builder.Configuration["Jwt:Issuer"],
                ValidAudience = builder.Configuration["Jwt:Audience"],

                IssuerSigningKey =
                    new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes(
                            builder.Configuration["Jwt:Key"]))
            };
    });

builder.Services.AddAuthorization();
```

This configuration validates:

- Issuer
- Audience
- Token lifetime
- Signing key

---

## API Endpoints

### Login

```http
POST /api/Auth/login
```

Authenticates the user and returns a JWT token.

### Sample Request

```json
{
  "username": "admin",
  "password": "password"
}
```

### Sample Response

```json
{
  "token": "<jwt-token>"
}
```

---

### Protected Endpoint

```http
GET /api/Secure
```

Requires a valid JWT token.

Authorization Header:

```text
Bearer <jwt-token>
```

Successful Response:

```text
You have accessed a protected endpoint!
```

If no valid token is supplied:

```text
401 Unauthorized
```

---

## Testing Using Swagger

### Step 1 – Generate Token

Execute:

```http
POST /api/Auth/login
```

Request:

```json
{
  "username": "admin",
  "password": "password"
}
```

A JWT token is returned.

---

### Step 2 – Authorize

Click the **Authorize** button in Swagger.

Enter:

```text
Bearer <generated-token>
```

Click **Authorize**.

---

### Step 3 – Access Protected API

Execute:

```http
GET /api/Secure
```

Expected Response:

```text
You have accessed a protected endpoint!
```

Without authentication:

```text
401 Unauthorized
```

---

## Expected Results

- JWT token generated successfully.
- Secure endpoint protected using JWT Authentication.
- Valid token returns **HTTP 200 OK**.
- Missing or invalid token returns **HTTP 401 Unauthorized**.

---

## Important Note

The original assignment specifies the following JWT key:

```text
ThisIsASecretKeyForJwtToken
```

When using the latest JWT libraries with **.NET 8**, this key is too short for the **HS256** signing algorithm and results in the following error:

```text
IDX10720: Unable to create KeyedHashAlgorithm for algorithm 'HS256',
the key size must be greater than: '256' bits.
```

To resolve this issue, the key was updated to:

```text
ThisIsASecretKeyForJwtToken12345
```

The updated key satisfies the minimum security requirement for the HS256 algorithm and allows JWT token generation to work correctly.

---

## Key Learnings

- JWT Authentication in ASP.NET Core
- Token generation
- Authentication middleware configuration
- Token validation
- Protected API endpoints
- Authorization using `[Authorize]`
- Swagger authentication testing

---

## Conclusion

This exercise demonstrates the implementation of JWT Authentication in an ASP.NET Core Web API. Users authenticate through a login endpoint to receive a JWT token, which is then used to access protected resources. The application validates token issuer, audience, expiration, and signing key to ensure secure access. Authentication was successfully verified using Swagger, and unauthorized requests correctly returned **HTTP 401 Unauthorized**.
