using Microsoft.AspNetCore.Mvc;
using Exercise04.API.Models;

namespace Exercise04.API.Controllers
{
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

        [HttpPut("{id}")]
        public ActionResult<Employee> UpdateEmployee(int id, [FromBody] Employee updatedEmployee)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            var employee = employees.FirstOrDefault(e => e.Id == id);

            if (employee == null)
            {
                return BadRequest("Invalid employee id");
            }

            employee.Name = updatedEmployee.Name;
            employee.Department = updatedEmployee.Department;
            employee.Salary = updatedEmployee.Salary;

            return Ok(employee);
        }


        [HttpPost]
        public ActionResult<Employee> CreateEmployee([FromBody] Employee newEmployee)
        {
            int newId = employees.Max(e => e.Id) + 1;

            newEmployee.Id = newId;

            employees.Add(newEmployee);

            return Ok(newEmployee);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteEmployee(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            var employee = employees.FirstOrDefault(e => e.Id == id);

            if (employee == null)
            {
                return BadRequest("Invalid employee id");
            }

            employees.Remove(employee);

            return Ok($"Employee with id {id} deleted successfully");
        }
    }
}