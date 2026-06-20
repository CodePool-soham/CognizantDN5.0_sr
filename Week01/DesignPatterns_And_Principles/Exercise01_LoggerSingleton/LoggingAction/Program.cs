using System;

namespace LoggingAction
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Logger logger1 = Logger.GetInstance();
            Logger logger2 = Logger.GetInstance();

            logger1.Log("Application started");
            logger2.Log("User logged in");

            if (logger1 == logger2)
            {
                Console.WriteLine("Only one Logger instance exists.");
            }
            else
            {
                Console.WriteLine("Multiple Logger instances created.");
            }
        }
    }
}


/*
 
 
 # Singleton Pattern Example

## Scenario
A logging utility should have only one instance throughout the application lifecycle to ensure consistent logging.

## Pattern Used
Singleton Pattern (Creational Design Pattern)

## Key Features
- Private constructor
- Static instance variable
- Public GetInstance() method
- Ensures only one Logger object exists

## Output
Only one Logger instance exists.
 
 */