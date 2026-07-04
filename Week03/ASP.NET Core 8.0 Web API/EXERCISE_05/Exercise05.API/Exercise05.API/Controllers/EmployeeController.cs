using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Exercise05.API.Models;

namespace Exercise05.API.Controllers
{
    //[Authorize]
    // [Authorize(Roles = "POC")]
    [Authorize(Roles = "Admin,POC")]
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees = new List<Employee>
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

        [HttpGet]
        public ActionResult<List<Employee>> GetEmployees()
        {
            return Ok(employees);
        }
    }
}