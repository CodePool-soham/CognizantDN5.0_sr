using System;

public class ForecastCalculator
{
    public static double PredictFutureValue(double currentValue, double growthRate, int years) { 
    
        // Base Case
        if (years == 0)
        {
            return currentValue;
        }

        return PredictFutureValue(currentValue, growthRate,  years-1) * (1 + growthRate);
        
               
    }
}