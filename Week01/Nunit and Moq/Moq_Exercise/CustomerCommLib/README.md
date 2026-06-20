#  CustomerCommLib - Moq Unit Testing Example

##  Overview

This project demonstrates how to build a **testable C# application using Dependency Injection and Moq**.

The system simulates a mail-sending module where emails are sent to customers after transactions.

To avoid sending real emails during unit testing, the SMTP dependency is replaced using **Moq (mocking framework)**.

---

#  Project Structure

```text
moq_exercises
│
├── CustomerCommLib
│   ├── IMailSender.cs
│   ├── MailSender.cs
│   └── CustomerComm.cs
│
└── CustomerComm.Tests
    └── CustomerCommTests.cs
```

---

#  Technologies Used

* C# (.NET Framework / .NET Core)
* NUnit (Unit Testing Framework)
* Moq (Mocking Framework)
* Visual Studio

---

#  CustomerCommLib (Production Code)

## 🔹 IMailSender Interface

The `IMailSender` interface defines the contract for sending emails.

```csharp
public interface IMailSender
{
    bool SendMail(string toAddress, string message);
}
```

---

## 🔹 MailSender Implementation

The `MailSender` class implements the `IMailSender` interface.

In a real-world application, this class would communicate with an SMTP server to send emails.

```csharp
public class MailSender : IMailSender
{
    public bool SendMail(string toAddress, string message)
    {
        Console.WriteLine($"Mail sent to {toAddress}");

        return true;
    }
}
```

---

# 🔹 CustomerComm Class

The `CustomerComm` class depends on `IMailSender`.

Dependency Injection is used to provide the mail-sending implementation.

```csharp
public class CustomerComm
{
    private readonly IMailSender mailSender;

    public CustomerComm(IMailSender mailSender)
    {
        this.mailSender = mailSender;
    }

    public bool SendCustomerMail(
        string email,
        string message)
    {
        return mailSender.SendMail(
            email,
            message);
    }
}
```

---

# 🧪 CustomerComm.Tests (Unit Testing)

The test project verifies the behavior of `CustomerComm` without using the real email service.

Moq is used to create a fake implementation of `IMailSender`.

---

# 🔹 Why Mocking is Required?

Directly testing email functionality can create problems:

* Requires SMTP configuration.
* Depends on external services.
* Slower test execution.
* Difficult to test failures.

Using Moq allows us to simulate email sending behavior without actually sending emails.

---

#  Moq Mock Object Creation

Example:

```csharp
var mockMailSender = new Mock<IMailSender>();
```

The mock object behaves like a fake email service.

---

#  Test Case Implemented

## SendCustomerMail_WithValidDetails_ReturnsTrue

### Purpose

Verifies that customer email sending returns success when the mail service works correctly.

---

## Mock Setup

```csharp
mockMailSender
    .Setup(x => x.SendMail(
        "customer@test.com",
        "Welcome"))
    .Returns(true);
```

The mock is configured to return `true` when the expected email details are provided.

---

## Test Execution

```csharp
CustomerComm customerComm =
    new CustomerComm(mockMailSender.Object);

bool result =
    customerComm.SendCustomerMail(
        "customer@test.com",
        "Welcome");
```

---

## Assertion

```csharp
Assert.That(
    result,
    Is.True);
```

---

# 🔍 Verify Method Invocation

Moq can verify whether a dependency method was called.

Example:

```csharp
mockMailSender.Verify(
    x => x.SendMail(
        "customer@test.com",
        "Welcome"),
    Times.Once);
```

This confirms that the email service was called exactly one time.

---

# 🧪 Test Scenarios Covered

| Test Scenario                 | Expected Result    |
| ----------------------------- | ------------------ |
| Valid email details           | Returns true       |
| Mail sending failure          | Returns false      |
| Verify mail sender invocation | Method called once |

---

# ✅ Test Execution

All tests were executed using NUnit Test Explorer.

## Result

```text
All Tests Passed Successfully
```

---

# 🧠 Concepts Demonstrated

* Dependency Injection.
* Interface-based programming.
* Unit testing with NUnit.
* Mocking using Moq.
* Isolation of external dependencies.
* Mock object configuration.
* Method invocation verification.
* Testable application design.

---

# ⭐ Advantages of Using Moq

* Avoids dependency on external systems.
* Makes unit tests faster.
* Allows simulation of different scenarios.
* Improves code testability.
* Supports verification of interactions.
* Helps achieve better separation of concerns.

---

# Conclusion

The `CustomerCommLib` application was successfully tested using NUnit and Moq.

Dependency Injection was used to separate the email-sending logic from business logic, while Moq provided a fake implementation of the email service during testing.

The exercise demonstrated how mocking frameworks help create reliable, isolated, and maintainable unit tests.

All objectives of the exercise were completed successfully.
