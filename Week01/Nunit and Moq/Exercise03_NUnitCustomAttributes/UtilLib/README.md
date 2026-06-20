# Exercise03_NUnitCustomAttributes

## Objective

This lab demonstrates how to write automated unit tests using the NUnit framework and use NUnit custom attributes to identify and execute test cases.

The exercise focuses on testing the functionality of the `ParseHostName()` method in the `UrlHostNameParser` class under different scenarios.

---

# Project Details

## Source Project

**UtilLib**

---

## System Under Test (SUT)

```csharp id="6p9z2m"
UrlHostNameParser
```

---

## Method Under Test

```csharp id="x8v4t1"
ParseHostName(string url)
```

---

# Test Project

## Project Name

```text id="w4y7kx"
UtilLib.Tests
```

## Test Class Name

```text id="1p9m7a"
UrlHostNameParserTests
```

## Naming Convention Used

```text id="z2r5qs"
UnitUnderTest_Scenario_ExpectedOutcome
```

### Examples

```text id="q5j8cx"
ParseHostName_ValidHttpUrl_ReturnsHostName

ParseHostName_ValidHttpsUrl_ReturnsHostName

ParseHostName_InvalidProtocol_ThrowsFormatException
```

---

# NUnit Attributes Used

## [Test]

The `[Test]` attribute identifies a method as an NUnit test case.

### Example

```csharp id="3k7v1q"
[Test]
public void ParseHostName_ValidHttpUrl_ReturnsHostName()
{
}
```

---

# Test Cases Implemented

## 1. ParseHostName_ValidHttpUrl_ReturnsHostName

### Input

```text id="6r8h0p"
http://www.google.com/search
```

### Expected Output

```text id="8v0q3n"
www.google.com
```

### Purpose

Verifies that the parser correctly extracts the host name from a valid HTTP URL.

---

## 2. ParseHostName_ValidHttpsUrl_ReturnsHostName

### Input

```text id="2k5v9s"
https://www.microsoft.com/login
```

### Expected Output

```text id="9m4x2a"
www.microsoft.com
```

### Purpose

Verifies that the parser correctly extracts the host name from a valid HTTPS URL.

---

## 3. ParseHostName_InvalidProtocol_ThrowsFormatException

### Input

```text id="7w3q5m"
ftp://www.google.com
```

### Expected Output

```text id="4p8y1d"
FormatException
```

### Purpose

Verifies that the parser throws a `FormatException` when an unsupported protocol is provided.

---

# Single Assertion Rule

Each test method contains only one assertion.

### Example

```csharp id="8q2v6m"
Assert.That(result,
            Is.EqualTo("www.google.com"));
```

This improves readability and makes test failures easier to identify.

---

# Assertion Style Used

## NUnit Constraint Model

```csharp id="1h6z9p"
Assert.That(actual,
            Is.EqualTo(expected));
```

---

## Exception Assertion

```csharp id="5t7m2x"
Assert.That(
    () => parser.ParseHostName("ftp://www.google.com"),
    Throws.TypeOf<FormatException>());
```

---

# Test Execution

All test cases were executed using NUnit Test Explorer.

## Initial Test Result

```text id="9q1w4v"
3 Tests Passed
```

---

# Breaking the Application

To verify the effectiveness of the tests, the source code was intentionally modified.

## Original Code

```csharp id="0x5m8n"
return hostName;
```

## Modified Code

```csharp id="3v6p2r"
return "BrokenHost";
```

---

# Observed Result

After modifying the source code and rerunning the tests:

```text id="6z4n1q"
Valid URL Tests Failed
Invalid Protocol Test Passed
```

This confirms that the automated tests are capable of detecting defects in the application.

---

# Restoring the Application

The original implementation was restored:

```csharp id="2k7m5x"
return hostName;
```

Tests were executed again.

## Final Result

```text id="8n3p6v"
All Tests Passed Successfully
```

---

# Conclusion

The `ParseHostName` functionality was successfully tested using NUnit.

The following concepts were demonstrated:

* NUnit Test Project Creation.
* NUnit Custom Attributes.
* `Assert.That()`.
* Exception Testing.
* Single Assertion Rule.
* Naming conventions for test methods.
* Defect detection through automated testing.

All objectives of the exercise were completed successfully.
