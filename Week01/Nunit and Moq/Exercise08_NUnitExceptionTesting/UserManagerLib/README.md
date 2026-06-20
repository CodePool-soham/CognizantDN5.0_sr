\# Exercise08\_NUnitExceptionTesting



\## Objective



This lab demonstrates how to write automated unit tests using the NUnit framework, with a focus on \*\*testing methods that throw exceptions\*\*.



The exercise also demonstrates:



\* Testing happy path scenarios

\* Testing exception scenarios using NUnit

\* Validating exception types and messages

\* Using `Assert.That()` with constraint-based syntax



\---



\## Project Details



\### Source Project



UserManagerLib



\### System Under Test (SUT)



```csharp id="u1s9ad"

User

```



\### Methods Under Test



```csharp id="k2m8qp"

CreateUser(User user)

ValidatePANCardNumber(string panCard)

```



\---



\## Business Rules



\### PAN Card Validation Rules



A PAN Card number must satisfy the following:



\* Must not be null or empty

\* Must be exactly 10 characters long

\* Must be mandatory during user creation



\---



\## Exception Rules



| Condition                 | Exception              |

| ------------------------- | ---------------------- |

| PAN Card is null or empty | NullReferenceException |

| PAN Card length is not 10 | FormatException        |



\---



\## Test Project



\### Project Name



```text id="p1q8xz"

UserManagerLib.Tests

```



\### Test Class Name



```text id="t8k3lm"

UserTests

```



\### Naming Convention



```text id="m4n7op"

UnitUnderTest\_Scenario\_ExpectedOutcome

```



\---



\## NUnit Features Demonstrated



\### 1. Exception Testing



NUnit provides built-in support for validating exceptions using:



```csharp id="e9r2qw"

Assert.That(() => methodCall, Throws.TypeOf<ExceptionType>());

```



\---



\### 2. Assert.That Constraint Model



All tests use constraint-based assertions instead of classic assertions.



\---



\## Test Cases Implemented



\### 1. Happy Path Test



\#### Test Method



```csharp id="h1a2bc"

CreateUser\_ValidPANCard\_DoesNotThrowException

```



\#### Purpose



Ensures user creation works when a valid PAN card is provided.



\#### Input



```text id="x3y9za"

ABCDE1234F

```



\#### Expected Result



```text id="l6m2qp"

No exception thrown

```



\#### Assertion



```csharp id="a1b2c3"

Assert.That(

&#x20;   () => userManager.CreateUser(user),

&#x20;   Throws.Nothing);

```



\---



\### 2. Null PAN Card Exception Test



\#### Test Method



```csharp id="d4e5fg"

CreateUser\_NullPANCard\_ThrowsNullReferenceException

```



\#### Purpose



Verifies system behavior when PAN card is null.



\#### Expected Exception



```text id="p9q1rs"

NullReferenceException

```



\#### Assertion



```csharp id="z7x6cv"

Assert.That(

&#x20;   () => userManager.CreateUser(user),

&#x20;   Throws.TypeOf<NullReferenceException>());

```



\---



\### 3. Invalid PAN Length Test



\#### Test Method



```csharp id="k8l9mn"

CreateUser\_InvalidPANLength\_ThrowsFormatException

```



\#### Purpose



Ensures system throws exception when PAN length is not 10.



\#### Input



```text id="o2p3qr"

ABC123

```



\#### Expected Exception



```text id="t5u6vw"

FormatException

```



\#### Assertion



```csharp id="y7z8ab"

Assert.That(

&#x20;   () => userManager.CreateUser(user),

&#x20;   Throws.TypeOf<FormatException>());

```



\---



\## Single Assertion Rule



Each test method contains exactly one assertion:



```csharp id="s1d2ef"

Assert.That(...);

```



This ensures:



\* Better readability

\* Easier debugging

\* Clear test failures



\---



\## Test Execution



\### Initial Result



```text id="g1h2ij"

3 Tests Passed

```



\---



\## Breaking the Application



To validate test effectiveness, the source code was intentionally modified.



\### Original Code



```csharp id="k3l4mn"

panCard.Length != 10

```



\### Modified Code



```csharp id="p5q6rs"

panCard.Length != 8

```



\---



\## Observed Result After Modification



\### Failed Test



\* `CreateUser\_ValidPANCard\_DoesNotThrowException`



\### Reason



Valid PAN card `"ABCDE1234F"` has 10 characters, but modified logic expects 8 characters.



\---



\## Restoring the Application



The original logic was restored:



```csharp id="u7v8wx"

panCard.Length != 10

```



\### Final Result



```text id="z9a0bc"

3 Tests Passed Successfully

```



\---



\## Concepts Demonstrated



\* NUnit Test Project setup

\* Exception testing using NUnit

\* Happy path testing

\* Negative testing (invalid inputs)

\* `NullReferenceException` handling

\* `FormatException` handling

\* Assert.That constraint model

\* Single Assertion Rule

\* Test-driven validation of business rules



\---



\## Conclusion



The `UserManagerLib` functionality was successfully tested using NUnit.



The tests validate:



\* Successful user creation with valid PAN

\* Proper exception handling for null PAN

\* Proper exception handling for invalid PAN length



The test suite also successfully detects intentional defects in the application, ensuring reliability and correctness of the system.



All objectives of the exercise were completed successfully.



