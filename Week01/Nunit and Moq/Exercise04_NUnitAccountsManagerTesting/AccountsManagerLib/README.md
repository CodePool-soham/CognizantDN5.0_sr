# Exercise04_NUnitAccountsManagerTesting

## Objective

This lab demonstrates how to write automated unit tests using the NUnit framework and use NUnit custom attributes to identify and execute test cases.

The objective is to verify the functionality of the `ValidateUser()` method in the `AccountsManager` class under different scenarios.

---

# Project Details

## Source Project

**AccountsManagerLib**

---

## System Under Test (SUT)

```csharp id="5m8x2v"
AccountsManager
```

---

## Method Under Test

```csharp id="7q3n1a"
ValidateUser(string userId, string password)
```

---

# Test Project

## Project Name

```text id="9p2k6x"
AccountsManagerLib.Tests
```

## Test Class Name

```text id="4v7m3q"
AccountsManagerTests
```

## Naming Convention Used

```text id="6x1z8n"
UnitUnderTest_Scenario_ExpectedOutcome
```

### Examples

```text id="2h5w9m"
ValidateUser_ValidUser11Credentials_ReturnsWelcomeMessage

ValidateUser_ValidUser22Credentials_ReturnsWelcomeMessage

ValidateUser_InvalidCredentials_ReturnsInvalidUserMessage

ValidateUser_EmptyUserId_ThrowsFormatException

ValidateUser_EmptyPassword_ThrowsFormatException
```

---

# NUnit Attributes Used

## [Test]

The `[Test]` attribute is used to identify a method as a test case.

### Example

```csharp id="3n6q8x"
[Test]
public void ValidateUser_ValidUser11Credentials_ReturnsWelcomeMessage()
{
}
```

---

# Test Cases Implemented

## 1. ValidateUser_ValidUser11Credentials_ReturnsWelcomeMessage

### Input

```text id="7m2p5x"
User Id  : user_11
Password : secret@user11
```

### Expected Output

```text id="8q4n1v"
Welcome user_11!!!
```

### Purpose

Verifies that a valid user receives the correct welcome message.

---

## 2. ValidateUser_ValidUser22Credentials_ReturnsWelcomeMessage

### Input

```text id="1x5k9m"
User Id  : user_22
Password : secret@user22
```

### Expected Output

```text id="6v3q8p"
Welcome user_22!!!
```

### Purpose

Verifies that a second valid user receives the correct welcome message.

---

## 3. ValidateUser_InvalidCredentials_ReturnsInvalidUserMessage

### Input

```text id="4m8z2q"
User Id  : user_99
Password : wrongpassword
```

### Expected Output

```text id="9n1x5v"
Invalid user id/password
```

### Purpose

Verifies that invalid credentials return the appropriate error message.

---

## 4. ValidateUser_EmptyUserId_ThrowsFormatException

### Input

```text id="5q7m3x"
User Id  : ""
Password : secret@user11
```

### Expected Output

```text id="2v8n4p"
FormatException
```

### Purpose

Verifies that an exception is thrown when the user ID is not provided.

---

## 5. ValidateUser_EmptyPassword_ThrowsFormatException

### Input

```text id="3x6m9q"
User Id  : user_11
Password : ""
```

### Expected Output

```text id="8p1v5n"
FormatException
```

### Purpose

Verifies that an exception is thrown when the password is not provided.

---

# Single Assertion Rule

Each test method contains a single assertion.

### Example

```csharp id="4k7m2x"
Assert.That(
    result,
    Is.EqualTo("Welcome user_11!!!"));
```

This improves readability and makes failures easier to identify.

---

# Assertion Style Used

## NUnit Constraint Model

```csharp id="6n3q8v"
Assert.That(actual,
            Is.EqualTo(expected));
```

---

## Exception Assertion

```csharp id="9x5m1p"
Assert.That(
    () => manager.ValidateUser("", "secret@user11"),
    Throws.TypeOf<FormatException>());
```

---

# Test Execution

All test cases were executed using NUnit Test Explorer.

## Initial Test Result

```text id="2q8m6x"
5 Tests Passed
```

---

# Breaking the Application

To verify the effectiveness of the tests, the source code was intentionally modified.

## Original Code

```csharp id="7v3n9m"
outputMsg = string.Format("Welcome {0}!!!", userId);
```

## Modified Code

```csharp id="1m6q8x"
outputMsg = "Welcome User";
```

---

# Observed Result

After modifying the source code and rerunning the tests:

```text id="5n2v7q"
Valid User Tests Failed
Invalid Credential Test Passed
Exception Tests Passed
```

## Expected Outcome

```text id="8x4m1p"
2 Failed
3 Passed
```

This confirms that the tests are capable of detecting defects introduced into the application.

---

# Restoring the Application

The original implementation was restored:

```csharp id="3q7m9x"
outputMsg = string.Format("Welcome {0}!!!", userId);
```

Tests were executed again.

## Final Result

```text id="6p2n8v"
All Tests Passed Successfully
```

---

# Concepts Demonstrated

* NUnit Test Project Creation.
* NUnit Custom Attributes.
* `Assert.That()`.
* Exception Testing.
* Single Assertion Rule.
* Naming conventions for test methods.
* Validation of expected output.
* Defect detection through automated testing.

---

# Conclusion

The `ValidateUser()` functionality was successfully tested using NUnit.

All valid, invalid, and exception scenarios were verified through automated unit tests. The test suite successfully detected intentional defects introduced into the application and validated the corrected implementation.

All objectives of the exercise were completed successfully.
