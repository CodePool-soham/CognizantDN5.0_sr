\# 📧 CustomerCommLib - Moq Unit Testing Example



\## 📌 Overview



This project demonstrates how to build a \*\*testable C# application using Dependency Injection and Moq\*\*.



The system simulates a mail sending module where emails are sent to customers after transactions.  

To avoid sending real emails during unit testing, we replace the SMTP dependency using \*\*Moq (mocking framework)\*\*.



\---



\## 🏗️ Project Structure



moq\_exercises

│

├── CustomerCommLib

│   ├── IMailSender.cs

│   ├── MailSender.cs

│   └── CustomerComm.cs

│

└── CustomerComm.Tests

&#x20;   └── CustomerCommTests.cs



\---



\## ⚙️ Technologies Used



\- C# (.NET Framework / .NET Core)

\- NUnit (Unit Testing Framework)

\- Moq (Mocking Framework)

\- Visual Studio



\---



\## 📦 CustomerCommLib (Production Code)



\### 🔹 IMailSender Interface



Defines the contract for sending emails.



```csharp

public interface IMailSender

{

&#x20;   bool SendMail(string toAddress, string message);

}

