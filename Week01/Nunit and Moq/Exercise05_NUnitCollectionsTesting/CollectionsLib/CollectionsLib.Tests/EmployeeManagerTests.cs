using CollectionsLib;
using NUnit.Framework;
using NUnit.Framework.Legacy;
using System.Linq;

namespace CollectionsLib.Tests
{
    public class EmployeeManagerTests
    {
        [Test]
        public void GetEmployees_NoNullEmployees_ReturnsCollectionWithoutNullValues()
        {
            EmployeeManager manager = new EmployeeManager();

            var employees = manager.GetEmployees();

            Assert.That(
                employees,
                Has.None.Null);
        }

        [Test]
        public void GetEmployees_Employee100Exists_ReturnsTrue()
        {
            EmployeeManager manager = new EmployeeManager();

            var employees = manager.GetEmployees();

            Assert.That(
                employees.Any(e => e.EmpId == 100),
                Is.True);
        }

        [Test]
        public void GetEmployees_AllEmployeeIdsAreUnique_ReturnsTrue()
        {
            EmployeeManager manager = new EmployeeManager();

            var employees = manager.GetEmployees();

            Assert.That(
                employees.Select(e => e.EmpId).Distinct().Count(),
                Is.EqualTo(employees.Count));
        }

        [Test]
        public void GetEmployeesAndPreviousYearEmployees_CollectionsAreEqual()
        {
            EmployeeManager manager = new EmployeeManager();

            var employees = manager.GetEmployees();

            var previousEmployees =
                manager.GetEmployeesWhoJoinedInPreviousYears();

            CollectionAssert.AreEquivalent(employees, previousEmployees);


        }

    }


}