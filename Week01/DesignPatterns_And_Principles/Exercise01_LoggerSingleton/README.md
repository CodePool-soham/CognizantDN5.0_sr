\# Singleton Pattern Example



\## Overview



This project demonstrates the implementation of the \*\*Singleton Design Pattern\*\* using a `Logger` class.



The Singleton pattern ensures that a class has only \*\*one instance\*\* throughout the application's lifecycle and provides a global point of access to that instance.



\---



\## Scenario



A logging utility should have only one instance throughout the application to maintain consistent logging behavior and avoid creating multiple logger objects.



\---



\## Design Pattern Used



\### Singleton Pattern (Creational Design Pattern)



The Singleton pattern is used when:



\* Only one instance of a class is required.

\* A global access point to that instance is needed.

\* Shared resources must be managed consistently.



\---



\## Project Structure



```text

LoggingAction

│

├── Program.cs

└── Logger.cs

```



\---



\## Logger Class



The `Logger` class implements the Singleton pattern with the following features:



\### Key Characteristics



\* Private static instance variable.

\* Private constructor to prevent external object creation.

\* Public static `GetInstance()` method.

\* Returns the same object every time it is called.



\### Implementation



```csharp

public class Logger

{

&#x20;   private static Logger instance;



&#x20;   private Logger()

&#x20;   {

&#x20;   }



&#x20;   public static Logger GetInstance()

&#x20;   {

&#x20;       if (instance == null)

&#x20;       {

&#x20;           instance = new Logger();

&#x20;       }



&#x20;       return instance;

&#x20;   }



&#x20;   public void Log(string message)

&#x20;   {

&#x20;       Console.WriteLine("Log Message: " + message);

&#x20;   }

}

```



\---



\## Test Class



The `Program` class verifies that only one `Logger` instance exists.



```csharp

Logger logger1 = Logger.GetInstance();

Logger logger2 = Logger.GetInstance();



logger1.Log("Application started");

logger2.Log("User logged in");



if (logger1 == logger2)

{

&#x20;   Console.WriteLine("Only one Logger instance exists.");

}

```



\---



\## Expected Output



```text

Log Message: Application started

Log Message: User logged in

Only one Logger instance exists.

```



\---



\## How It Works



1\. The first call to `GetInstance()` creates a new `Logger` object.

2\. The object is stored in the static `instance` variable.

3\. Any subsequent call to `GetInstance()` returns the same object.

4\. Both `logger1` and `logger2` reference the same instance.



\---



\## Benefits of Singleton Pattern



\* Controlled access to a single instance.

\* Reduced memory usage.

\* Consistent logging across the application.

\* Easy access through a global point.



\---



\## Conclusion



This project successfully demonstrates the Singleton Design Pattern by ensuring that only one instance of the `Logger` class is created and shared throughout the application.



