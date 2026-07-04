\# Exercise 04 - ASP.NET Core Web API CRUD Operations



\## Objective



To demonstrate the creation of Web API action methods for performing Create, Read, Update, and Delete (CRUD) operations using ASP.NET Core Web API.



\### Learning Outcomes



\* Create API endpoints using HTTP verbs (GET, POST, PUT, DELETE).

\* Use the `\[FromBody]` attribute to extract JSON data from the request body.

\* Map request data to a custom model class (`Employee`).

\* Perform CRUD operations on a hardcoded employee list.

\* Return data using `ActionResult`.

\* Validate employee IDs and return appropriate error responses.

\* Test APIs using Swagger and Postman.



\---



\## Problem Statement



Update employee information through a Web API PUT action method.



Requirements:



1\. Employee information must be updated based on user input.

2\. Use Swagger to invoke the action method mapped with the HTTP PUT verb.

3\. Return employee data using `ActionResult<Employee>`.

4\. If the employee ID is less than or equal to 0, return:



&#x20;  ```

&#x20;  BadRequest("Invalid employee id")

&#x20;  ```

5\. If the employee ID does not exist in the hardcoded employee list, return:



&#x20;  ```

&#x20;  BadRequest("Invalid employee id")

&#x20;  ```

6\. If the employee ID is valid:



&#x20;  \* Read employee details from the request body using `\[FromBody]`.

&#x20;  \* Update the employee information in the hardcoded list.

&#x20;  \* Return the updated employee data.



\---



\## Project Structure



```

Exercise04.API

│

├── Controllers

│   └── EmployeeController.cs

│

├── Models

│   └── Employee.cs

│

├── Program.cs

└── appsettings.json

```



\---



\## Employee Model



```csharp

namespace Exercise04.API.Models

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



\## Hardcoded Employee Data



```csharp

private static List<Employee> employees = new List<Employee>

{

&#x20;   new Employee { Id = 1, Name = "John", Department = "HR", Salary = 30000 },

&#x20;   new Employee { Id = 2, Name = "Mary", Department = "IT", Salary = 50000 },

&#x20;   new Employee { Id = 3, Name = "David", Department = "Finance", Salary = 45000 }

};

```



\---



\## API Endpoints



\### GET - Retrieve Employees



```

GET /api/Employee

```



Returns the complete list of employees.



\---



\### POST - Create Employee



```

POST /api/Employee

```



Creates a new employee and adds it to the hardcoded list.



Sample Request:



```json

{

&#x20; "name": "Robert",

&#x20; "department": "Marketing",

&#x20; "salary": 55000

}

```



\---



\### PUT - Update Employee



```

PUT /api/Employee/{id}

```



Updates employee details based on the provided employee ID.



Sample Request:



```json

{

&#x20; "id": 2,

&#x20; "name": "Mary Updated",

&#x20; "department": "IT",

&#x20; "salary": 65000

}

```



Sample Response:



```json

{

&#x20; "id": 2,

&#x20; "name": "Mary Updated",

&#x20; "department": "IT",

&#x20; "salary": 65000

}

```



Validation:



\* If `id <= 0`



```text

Invalid employee id

```



\* If employee ID does not exist



```text

Invalid employee id

```



\---



\### DELETE - Remove Employee



```

DELETE /api/Employee/{id}

```



Deletes an employee from the hardcoded list.



Sample Response:



```text

Employee with id 2 deleted successfully

```



\---



\## Testing Using Swagger



1\. Run the application.

2\. Open Swagger UI.

3\. Test the following endpoints:



&#x20;  \* GET /api/Employee

&#x20;  \* POST /api/Employee

&#x20;  \* PUT /api/Employee/{id}

&#x20;  \* DELETE /api/Employee/{id}

4\. Verify successful responses and validation messages.



\---



\## Expected Results



\* Employee records can be viewed using GET.

\* New employees can be added using POST.

\* Existing employee records can be updated using PUT.

\* Employee records can be deleted using DELETE.

\* Invalid employee IDs return:



&#x20; ```

&#x20; Invalid employee id

&#x20; ```

\* All endpoints can be successfully tested using Swagger and Postman.



\---



\## Conclusion



This exercise demonstrates the implementation of CRUD operations in ASP.NET Core Web API using action methods, the `\[FromBody]` attribute, `ActionResult`, validation logic, and Swagger testing. Employee data is maintained using a hardcoded list, and appropriate responses are returned for both successful and invalid requests.



