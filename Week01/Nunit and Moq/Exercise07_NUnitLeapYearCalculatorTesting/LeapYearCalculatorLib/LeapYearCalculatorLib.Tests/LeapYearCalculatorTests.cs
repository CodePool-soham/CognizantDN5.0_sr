using NUnit.Framework;
using LeapYearCalculatorLib;

namespace LeapYearCalculatorLib.Tests
{
    public class LeapYearCalculatorTests
    {
        [TestCase(2000, 1)]
        [TestCase(2024, 1)]
        [TestCase(2028, 1)]
        [TestCase(2023, 0)]
        [TestCase(2025, 0)]
        [TestCase(1900, 0)]
        [TestCase(1700, -1)]
        [TestCase(10000, -1)]
        public void IsLeapYear_ValidAndInvalidYears_ReturnsExpectedResult(
            int year,
            int expected)
        {
            LeapYearCalculator calculator =
                new LeapYearCalculator();

            int actual =
                calculator.IsLeapYear(year);

            Assert.That(
                actual,
                Is.EqualTo(expected));
        }
    }
}