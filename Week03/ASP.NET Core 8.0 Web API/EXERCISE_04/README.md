# Exercise 04 - ASP.NET Core Web API CRUD Operations

## 📌 Project Overview

This project demonstrates how to build a RESTful ASP.NET Core Web API that performs Create, Read, Update, and Delete (CRUD) operations on a collection of employees. The API uses a hardcoded employee list to illustrate HTTP methods, model binding, validation, and API testing using Swagger and Postman.

---

## 🎯 Objectives

- Create RESTful API endpoints using HTTP verbs (GET, POST, PUT, DELETE).
- Use the `[FromBody]` attribute to bind JSON request data to C# objects.
- Implement CRUD operations on a hardcoded employee collection.
- Return responses using `ActionResult` and appropriate HTTP status codes.
- Validate employee IDs and handle invalid requests gracefully.
- Test API endpoints using Swagger UI and Postman.

---

## 📚 Learning Outcomes

After completing this exercise, you will be able to:

- Understand RESTful API design principles.
- Create API action methods using ASP.NET Core Web API.
- Perform CRUD operations using HTTP methods.
- Use model binding with the `[FromBody]` attribute.
- Return appropriate HTTP responses using `ActionResult<T>`.
- Validate incoming requests and return meaningful error messages.
- Test Web APIs using Swagger and Postman.

---

## 🛠️ Technologies Used

- ASP.NET Core Web API (.NET 8)
- C#
- Swagger (Swashbuckle.AspNetCore)
- Postman
- Visual Studio 2022/2026

---

## 📁 Project Structure

```text
Exercise04.API
│
├── Controllers
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

## 📦 Employee Model

```csharp
namespace Exercise04.API.Models
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

## 📋 Sample Employee Data

The application uses a hardcoded list of employees for demonstration purposes.

```csharp
private static List<Employee> employees = new()
{
    new Employee { Id = 1, Name = "John", Department = "HR", Salary = 30000 },
    new Employee { Id = 2, Name = "Mary", Department = "IT", Salary = 50000 },
    new Employee { Id = 3, Name = "David", Department = "Finance", Salary = 45000 }
};
```

---

## 🌐 API Endpoints

### GET - Retrieve All Employees

```http
GET /api/Employee
```

Returns the complete list of employees.

**Response:** `200 OK`

---

### POST - Create Employee

```http
POST /api/Employee
```

Creates a new employee and adds it to the collection.

#### Sample Request

```json
{
  "name": "Robert",
  "department": "Marketing",
  "salary": 55000
}
```

#### Response

- **201 Created** (or **200 OK**, depending on implementation)
- Returns the newly created employee.

---

### PUT - Update Employee

```http
PUT /api/Employee/{id}
```

Updates an existing employee based on the specified employee ID.

#### Sample Request

```json
{
  "id": 2,
  "name": "Mary Updated",
  "department": "IT",
  "salary": 65000
}
```

#### Sample Response

```json
{
  "id": 2,
  "name": "Mary Updated",
  "department": "IT",
  "salary": 65000
}
```

#### Validation Rules

If:

- `id <= 0`, or
- the employee does not exist,

the API returns:

```text
BadRequest("Invalid employee id")
```

---

### DELETE - Remove Employee

```http
DELETE /api/Employee/{id}
```

Deletes the employee with the specified ID.

#### Sample Response

```text
Employee with id 2 deleted successfully.
```

If the employee ID is invalid or does not exist:

```text
BadRequest("Invalid employee id")
```

---

## ✅ Validation Logic

The API validates employee IDs before processing update or delete operations.

Validation includes:

- Employee ID must be greater than zero.
- Employee ID must exist in the collection.
- Invalid requests return:

```text
Invalid employee id
```

using:

```csharp
return BadRequest("Invalid employee id");
```

---

## 🧪 Testing with Swagger

1. Run the application.
2. Open Swagger UI:

```text
https://localhost:<port>/swagger
```

3. Test the following endpoints:

- GET `/api/Employee`
- POST `/api/Employee`
- PUT `/api/Employee/{id}`
- DELETE `/api/Employee/{id}`

4. Verify the returned responses and status codes.

---

## 📮 Testing with Postman

You can also test the API using Postman.

### Example URLs

```text
GET    https://localhost:<port>/api/Employee
POST   https://localhost:<port>/api/Employee
PUT    https://localhost:<port>/api/Employee/2
DELETE https://localhost:<port>/api/Employee/2
```

For POST and PUT requests:

- Select **Body**
- Choose **raw**
- Select **JSON**
- Provide the request payload

Verify the returned response body and HTTP status code.

---

## 📊 Expected Results

- ✅ Retrieve all employees using **GET**
- ✅ Add new employees using **POST**
- ✅ Update existing employees using **PUT**
- ✅ Delete employees using **DELETE**
- ✅ Invalid employee IDs return **400 Bad Request**
- ✅ All endpoints can be tested successfully using Swagger and Postman

---

## 📖 Key Concepts Demonstrated

- ASP.NET Core Web API
- RESTful API design
- CRUD operations
- HTTP methods (GET, POST, PUT, DELETE)
- Model binding using `[FromBody]`
- `ActionResult<T>`
- Request validation
- HTTP status codes
- Swagger integration
- API testing with Postman

---

## ✅ Conclusion

This exercise demonstrates the implementation of a RESTful ASP.NET Core Web API that performs CRUD operations on employee data using a hardcoded collection. It showcases HTTP verbs, model binding with `[FromBody]`, validation using `ActionResult`, and API testing through Swagger and Postman. This project provides a solid foundation for developing more advanced Web APIs backed by a database in future applications.
