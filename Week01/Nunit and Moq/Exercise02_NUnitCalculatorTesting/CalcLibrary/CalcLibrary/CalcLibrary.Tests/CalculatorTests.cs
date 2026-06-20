using NUnit.Framework;
using CalcLibrary;

namespace CalcLibrary.Tests
{
    public class CalculatorTests
    {
        [TestCase(10, 5, 5)]
        [TestCase(20, 10, 10)]
        [TestCase(15, 5, 10)]
        [TestCase(-10, -5, -5)]
        public void TestSubtraction(double num1, double num2, double expected)
        {
            SimpleCalculator calc = new SimpleCalculator();

            double actual = calc.Subtraction(num1, num2);

            Assert.That(actual, Is.EqualTo(expected));
        }

        [TestCase(5, 2, 10)]
        [TestCase(10, 10, 100)]
        [TestCase(3, 4, 12)]
        [TestCase(-2, 3, -6)]
        public void TestMultiplication(double num1, double num2, double expected)

        {
            SimpleCalculator calc = new SimpleCalculator();

            double actual = calc.Multiplication(num1, num2);

            Assert.That(actual, Is.EqualTo(expected));
        }

        [TestCase(10, 2, 5)]
        [TestCase(20, 5, 4)]
        [TestCase(100, 10, 10)]
        [TestCase(15, 3, 5)]
        public void TestDivision(double num1, double num2, double expected)
        {
            SimpleCalculator calc = new SimpleCalculator();

            double actual = calc.Division(num1, num2);

            Assert.That(actual, Is.EqualTo(expected));
        }



        [Test]
        public void TestDivisionByZero()
        {
            SimpleCalculator calc = new SimpleCalculator();

            try
            {
                calc.Division(10, 0);

                Assert.Fail("Division by zero");
            }
            catch (ArgumentException ex)
            {
                Assert.That(ex.Message, Is.EqualTo("Second Parameter Can't be Zero"));

            }
        }

        [Test]
        public void TestAddAndClear()
        {
            SimpleCalculator calc = new SimpleCalculator();

            calc.Addition(10, 20);

            Assert.That(calc.GetResult, Is.EqualTo(30));


            calc.AllClear();

            Assert.That(calc.GetResult, Is.EqualTo(0));

        }
    }
}