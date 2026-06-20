# Exercise08_NUnitExceptionTesting

## Objective

This lab demonstrates how to write automated unit tests using the NUnit framework, with a focus on **testing methods that throw exceptions**.

The exercise also demonstrates:

* Testing happy path scenarios.
* Testing exception scenarios using NUnit.
* Validating exception types and messages.
* Using `Assert.That()` with constraint-based syntax.

---

# Project Details

## Source Project

**UserManagerLib**

---

## System Under Test (SUT)

```csharp
User
```

---

## Methods Under Test

```csharp
CreateUser(User user)

ValidatePANCardNumber(string panCard)
```

---

# Business Rules

## PAN Card Validation Rules

A PAN Card number must satisfy the following conditions:

* Must not be null or empty.
* Must be exactly 10 characters long.
* Must be mandatory during user creation.

---

# Exception Rules

| Condition                 | Exception              |
| ------------------------- | ---------------------- |
| PAN Card is null or empty | NullReferenceException |
| PAN Card length is not 10 | FormatException        |

---

# Test Project

## Project Name

```text
UserManagerLib.Tests
```

## Test Class Name

```text
UserTests
```

## Naming Convention

```text
UnitUnderTest_Scenario_ExpectedOutcome
```

---

# NUnit Features Demonstrated

## 1. Exception Testing

NUnit provides built-in support for validating exceptions using:

```csharp
Assert.That(
    () => methodCall,
    Throws.TypeOf<ExceptionType>());
```

---

## 2. Assert.That Constraint Model

All tests use the NUnit constraint-based assertion model instead of classic assertions.

---

# Test Cases Implemented

## 1. Happy Path Test

### Test Method

```text
CreateUser_ValidPANCard_DoesNotThrowException
```

### Purpose

Ensures user creation works correctly when a valid PAN card is provided.

### Input

```text
ABCDE1234F
```

### Expected Result

```text
No exception thrown
```

### Assertion

```csharp
Assert.That(
    () => userManager.CreateUser(user),
    Throws.Nothing);
```

---

## 2. Null PAN Card Exception Test

### Test Method

```text
CreateUser_NullPANCard_ThrowsNullReferenceException
```

### Purpose

Verifies system behavior when the PAN card value is null.

### Expected Exception

```text
NullReferenceException
```

### Assertion

```csharp
Assert.That(
    () => userManager.CreateUser(user),
    Throws.TypeOf<NullReferenceException>());
```

---

## 3. Invalid PAN Length Test

### Test Method

```text
CreateUser_InvalidPANLength_ThrowsFormatException
```

### Purpose

Ensures the system throws an exception when the PAN card length is not 10 characters.

### Input

```text
ABC123
```

### Expected Exception

```text
FormatException
```

### Assertion

```csharp
Assert.That(
    () => userManager.CreateUser(user),
    Throws.TypeOf<FormatException>());
```

---

# Single Assertion Rule

Each test method contains exactly one assertion.

Example:

```csharp
Assert.That(...);
```

This ensures:

* Better readability.
* Easier debugging.
* Clear test failures.

---

# Test Execution

All tests were executed using NUnit Test Explorer.

## Initial Result

```text
3 Tests Passed
```

The test suite successfully verified:

* Valid PAN card processing.
* Null PAN card exception handling.
* Invalid PAN length exception handling.

---

# Breaking the Application

To validate test effectiveness, the source code was intentionally modified.

## Original Code

```csharp
panCard.Length != 10
```

## Modified Code

```csharp
panCard.Length != 8
```

---

# Observed Result After Modification

## Failed Test

```text
CreateUser_ValidPANCard_DoesNotThrowException
```

## Reason

The valid PAN card:

```text
ABCDE1234F
```

contains 10 characters, but the modified logic incorrectly expects 8 characters.

The test failure confirmed that the automated tests detected the introduced defect.

---

# Restoring the Application

The original validation logic was restored:

```csharp
panCard.Length != 10
```

## Final Result

```text
3 Tests Passed Successfully
```

---

# Concepts Demonstrated

* NUnit Test Project setup.
* Exception testing using NUnit.
* Happy path testing.
* Negative testing with invalid inputs.
* `NullReferenceException` handling.
* `FormatException` handling.
* `Assert.That()` constraint model.
* Single Assertion Rule.
* Test-driven validation of business rules.

---

# Conclusion

The `UserManagerLib` functionality was successfully tested using NUnit.

The test suite validated:

* Successful user creation with a valid PAN card.
* Proper exception handling for null PAN values.
* Proper exception handling for invalid PAN length.

The tests also successfully detected intentionally introduced defects, demonstrating the reliability and correctness of automated unit testing.

All objectives of the exercise were completed successfully.
