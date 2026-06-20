\# Exercise04\_NUnitAccountsManagerTesting



\## Objective



This lab demonstrates how to write automated unit tests using the NUnit framework and use NUnit custom attributes to identify tests.



The objective is to verify the functionality of the `ValidateUser()` method in the `AccountsManager` class under different scenarios.



\---



\## Project Details



\### Source Project



\*\*AccountsManagerLib\*\*



\### System Under Test (SUT)



```csharp

AccountsManager

```



\### Method Under Test



```csharp

ValidateUser(string userId, string password)

```



\---



\## Test Project



Project Name:



```text

AccountsManagerLib.Tests

```



Test Class Name:



```text

AccountsManagerTests

```



Naming Convention Used:



```text

UnitUnderTest\_Scenario\_ExpectedOutcome

```



Examples:



```text

ValidateUser\_ValidUser11Credentials\_ReturnsWelcomeMessage

ValidateUser\_ValidUser22Credentials\_ReturnsWelcomeMessage

ValidateUser\_InvalidCredentials\_ReturnsInvalidUserMessage

ValidateUser\_EmptyUserId\_ThrowsFormatException

ValidateUser\_EmptyPassword\_ThrowsFormatException

```



\---



\## NUnit Attributes Used



\### \[Test]



The `\[Test]` attribute is used to identify a method as a test case.



Example:



```csharp

\[Test]

public void ValidateUser\_ValidUser11Credentials\_ReturnsWelcomeMessage()

{

}

```



\---



\## Test Cases Implemented



\### 1. ValidateUser\_ValidUser11Credentials\_ReturnsWelcomeMessage



\#### Input



```text

User Id  : user\_11

Password : secret@user11

```



\#### Expected Output



```text

Welcome user\_11!!!

```



\#### Purpose



Verifies that a valid user receives the correct welcome message.



\---



\### 2. ValidateUser\_ValidUser22Credentials\_ReturnsWelcomeMessage



\#### Input



```text

User Id  : user\_22

Password : secret@user22

```



\#### Expected Output



```text

Welcome user\_22!!!

```



\#### Purpose



Verifies that a second valid user receives the correct welcome message.



\---



\### 3. ValidateUser\_InvalidCredentials\_ReturnsInvalidUserMessage



\#### Input



```text

User Id  : user\_99

Password : wrongpassword

```



\#### Expected Output



```text

Invalid user id/password

```



\#### Purpose



Verifies that invalid credentials return the appropriate error message.



\---



\### 4. ValidateUser\_EmptyUserId\_ThrowsFormatException



\#### Input



```text

User Id  : ""

Password : secret@user11

```



\#### Expected Output



```text

FormatException

```



\#### Purpose



Verifies that an exception is thrown when the user id is not supplied.



\---



\### 5. ValidateUser\_EmptyPassword\_ThrowsFormatException



\#### Input



```text

User Id  : user\_11

Password : ""

```



\#### Expected Output



```text

FormatException

```



\#### Purpose



Verifies that an exception is thrown when the password is not supplied.



\---



\## Single Assertion Rule



Each test method contains a single assertion.



Example:



```csharp

Assert.That(

&#x20;   result,

&#x20;   Is.EqualTo("Welcome user\_11!!!"));

```



This improves readability and makes failures easier to identify.



\---



\## Assertion Style Used



NUnit Constraint Model:



```csharp

Assert.That(actual,

&#x20;           Is.EqualTo(expected));

```



Exception Assertion:



```csharp

Assert.That(

&#x20;   () => manager.ValidateUser("", "secret@user11"),

&#x20;   Throws.TypeOf<FormatException>());

```



\---



\## Test Execution



All test cases were executed using NUnit Test Explorer.



\### Initial Test Result



```text

5 Tests Passed

```



\---



\## Breaking the Application



To verify the effectiveness of the tests, the source code was intentionally modified.



\### Original Code



```csharp

outputMsg = string.Format("Welcome {0}!!!", userId);

```



\### Modified Code



```csharp

outputMsg = "Welcome User";

```



\---



\## Observed Result



After modifying the source code and rerunning the tests:



```text

Valid User Tests Failed

Invalid Credential Test Passed

Exception Tests Passed

```



Expected Outcome:



```text

2 Failed

3 Passed

```



This confirms that the tests are capable of detecting defects in the application.



\---



\## Restoring the Application



The original implementation was restored:



```csharp

outputMsg = string.Format("Welcome {0}!!!", userId);

```



Tests were executed again.



\### Final Result



```text

All Tests Passed Successfully

```



\---



\## Concepts Demonstrated



\* NUnit Test Project Creation

\* NUnit Custom Attributes

\* Assert.That()

\* Exception Testing

\* Single Assertion Rule

\* Naming Conventions for Test Methods

\* Validation of Expected Output

\* Defect Detection Through Automated Testing



\---



\## Conclusion



The `ValidateUser()` functionality was successfully tested using NUnit.



All valid, invalid, and exception scenarios were verified through automated unit tests. The test suite successfully detected intentional defects introduced into the application and validated the corrected implementation.



All objectives of the exercise were completed successfully.



