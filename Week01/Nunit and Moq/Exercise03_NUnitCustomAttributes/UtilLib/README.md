\# Exercise03\_NUnitCustomAttributes



\## Objective



This lab demonstrates how to write automated unit tests using the NUnit framework and use NUnit custom attributes to identify tests.



The exercise focuses on testing the functionality of the `ParseHostName()` method in the `UrlHostNameParser` class under different scenarios.



\---



\## Project Details



\### Source Project



\*\*UtilLib\*\*



\### System Under Test (SUT)



```csharp

UrlHostNameParser

```



\### Method Under Test



```csharp

ParseHostName(string url)

```



\---



\## Test Project



Project Name:



```text

UtilLib.Tests

```



Test Class Name:



```text

UrlHostNameParserTests

```



Naming Convention Used:



```text

UnitUnderTest\_Scenario\_ExpectedOutcome

```



Examples:



```text

ParseHostName\_ValidHttpUrl\_ReturnsHostName

ParseHostName\_ValidHttpsUrl\_ReturnsHostName

ParseHostName\_InvalidProtocol\_ThrowsFormatException

```



\---



\## NUnit Attributes Used



\### \[Test]



The `\[Test]` attribute is used to identify a method as a test case.



Example:



```csharp

\[Test]

public void ParseHostName\_ValidHttpUrl\_ReturnsHostName()

{

}

```



\---



\## Test Cases Implemented



\### 1. ParseHostName\_ValidHttpUrl\_ReturnsHostName



\#### Input



```text

http://www.google.com/search

```



\#### Expected Output



```text

www.google.com

```



\#### Purpose



Verifies that the parser correctly extracts the host name from a valid HTTP URL.



\---



\### 2. ParseHostName\_ValidHttpsUrl\_ReturnsHostName



\#### Input



```text

https://www.microsoft.com/login

```



\#### Expected Output



```text

www.microsoft.com

```



\#### Purpose



Verifies that the parser correctly extracts the host name from a valid HTTPS URL.



\---



\### 3. ParseHostName\_InvalidProtocol\_ThrowsFormatException



\#### Input



```text

ftp://www.google.com

```



\#### Expected Output



```text

FormatException

```



\#### Purpose



Verifies that the parser throws a FormatException when an unsupported protocol is supplied.



\---



\## Single Assertion Rule



Each test method contains only one assertion.



Example:



```csharp

Assert.That(result,

&#x20;           Is.EqualTo("www.google.com"));

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

&#x20;   () => parser.ParseHostName("ftp://www.google.com"),

&#x20;   Throws.TypeOf<FormatException>());

```



\---



\## Test Execution



All test cases were executed using NUnit Test Explorer.



\### Initial Test Result



```text

3 Tests Passed

```



\---



\## Breaking the Application



To verify the effectiveness of the tests, the source code was intentionally modified.



Original Code:



```csharp

return hostName;

```



Modified Code:



```csharp

return "BrokenHost";

```



\---



\## Observed Result



After modifying the source code and rerunning the tests:



```text

Valid URL Tests Failed

Invalid Protocol Test Passed

```



This confirms that the tests are capable of detecting defects in the application.



\---



\## Restoring the Application



The original implementation was restored:



```csharp

return hostName;

```



Tests were executed again.



\### Final Result



```text

All Tests Passed Successfully

```



\---



\## Conclusion



The ParseHostName functionality was successfully tested using NUnit.



The following concepts were demonstrated:



\* NUnit Test Project Creation

\* NUnit Custom Attributes

\* Assert.That()

\* Exception Testing

\* Single Assertion Rule

\* Naming Conventions for Test Methods

\* Defect Detection Through Automated Tests



All objectives of the exercise were completed successfully.



