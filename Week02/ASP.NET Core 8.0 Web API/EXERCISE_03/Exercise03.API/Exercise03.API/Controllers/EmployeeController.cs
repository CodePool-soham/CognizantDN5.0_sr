using Exercise03.API.Filters;
using Exercise03.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Exercise03.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [CustomAuthFilter]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees = new List<Employee>();

        public EmployeeController()
        {
            if (employees.Count == 0)
            {
                employees.Add(new Employee
                {
                    Id = 1,
                    Name = "John",
                    Salary = 50000,
                    Permanent = true,
                    Department = new Department { Id = 1, Name = "IT" },
                    Skills = new List<Skill> { new Skill { Id = 1, Name = "C#" } },
                    DateOfBirth = new DateTime(1995, 5, 10)
                });

                employees.Add(new Employee
                {
                    Id = 2,
                    Name = "Alice",
                    Salary = 60000,
                    Permanent = false,
                    Department = new Department { Id = 2, Name = "HR" },
                    Skills = new List<Skill> { new Skill { Id = 2, Name = "Communication" } },
                    DateOfBirth = new DateTime(1993, 8, 15)
                });
            }
        }

        // GET ALL EMPLOYEES
        [HttpGet]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<List<Employee>> Get()
        {
            return Ok(employees);
        }

        // GET BY ID
        [HttpGet("{id}")]
        public ActionResult<Employee> Get(int id)
        {
            var emp = employees.FirstOrDefault(e => e.Id == id);
            if (emp == null)
                return NotFound();

            return Ok(emp);
        }

        // POST
        [HttpPost]
        public ActionResult AddEmployee([FromBody] Employee employee)
        {
            employees.Add(employee);
            return Ok(employee);
        }

        // PUT
        [HttpPut("{id}")]
        public ActionResult UpdateEmployee(int id, [FromBody] Employee employee)
        {
            var existing = employees.FirstOrDefault(e => e.Id == id);
            if (existing == null)
                return NotFound();

            existing.Name = employee.Name;
            existing.Salary = employee.Salary;
            existing.Permanent = employee.Permanent;
            existing.Department = employee.Department;
            existing.Skills = employee.Skills;
            existing.DateOfBirth = employee.DateOfBirth;

            return Ok(existing);
        }
    }
}