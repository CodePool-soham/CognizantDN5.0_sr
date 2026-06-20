using System;

namespace FinancialForecasting
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double currentValue = 10000;
            double growthRate = 0.10;
            int years = 5;

            double futureValue = ForecastCalculator.PredictFutureValue(currentValue, growthRate, years);

         

            Console.WriteLine("Financial Forecast");
            Console.WriteLine("------------------");
            Console.WriteLine($"Current Value : {currentValue}");
            Console.WriteLine($"Growth Rate   : {growthRate:P}");
            Console.WriteLine($"Years         : {years}");
            Console.WriteLine($"Future Value  : {futureValue:F2}");
        }
    }
}