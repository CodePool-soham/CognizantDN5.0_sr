\# Factory Method Pattern Example



\## Overview



This project demonstrates the implementation of the \*\*Factory Method Design Pattern\*\* in a Document Management System.



The Factory Method Pattern provides an interface for creating objects while allowing subclasses to decide which class to instantiate. This helps promote loose coupling and makes the system easier to extend.



\---



\## Scenario



A document management system needs to create different types of documents such as:



\* Word Documents

\* PDF Documents

\* Excel Documents



Instead of creating document objects directly in the client code, the Factory Method Pattern is used to delegate object creation to specialized factory classes.



\---



\## Design Pattern Used



\### Factory Method Pattern (Creational Design Pattern)



The Factory Method Pattern defines an interface for creating objects but lets subclasses decide which object to create.



\### Benefits



\* Encapsulates object creation logic.

\* Promotes loose coupling.

\* Simplifies maintenance and extension.

\* Adheres to the Open/Closed Principle.



\---



\---



\## Components



\### 1. Product Interface



The `IDocument` interface defines a common operation for all document types.



```csharp

public interface IDocument

{

&#x20;   void Open();

}

```



\---



\### 2. Concrete Products



Each document type implements the `IDocument` interface.



\#### WordDocument



```csharp

public class WordDocument : IDocument

{

&#x20;   public void Open()

&#x20;   {

&#x20;       Console.WriteLine("Opening Word Document...");

&#x20;   }

}

```



\#### PdfDocument



```csharp

public class PdfDocument : IDocument

{

&#x20;   public void Open()

&#x20;   {

&#x20;       Console.WriteLine("Opening PDF Document...");

&#x20;   }

}

```



\#### ExcelDocument



```csharp

public class ExcelDocument : IDocument

{

&#x20;   public void Open()

&#x20;   {

&#x20;       Console.WriteLine("Opening Excel Document...");

&#x20;   }

}

```



\---



\### 3. Abstract Factory



The abstract factory declares the factory method.



```csharp

public abstract class DocumentFactory

{

&#x20;   public abstract IDocument CreateDocument();

}

```



\---



\### 4. Concrete Factories



Each factory creates a specific document type.



\#### WordDocumentFactory



```csharp

public class WordDocumentFactory : DocumentFactory

{

&#x20;   public override IDocument CreateDocument()

&#x20;   {

&#x20;       return new WordDocument();

&#x20;   }

}

```



\#### PdfDocumentFactory



```csharp

public class PdfDocumentFactory : DocumentFactory

{

&#x20;   public override IDocument CreateDocument()

&#x20;   {

&#x20;       return new PdfDocument();

&#x20;   }

}

```



\#### ExcelDocumentFactory



```csharp

public class ExcelDocumentFactory : DocumentFactory

{

&#x20;   public override IDocument CreateDocument()

&#x20;   {

&#x20;       return new ExcelDocument();

&#x20;   }

}

```



\---



\## Testing the Factory Method



The client code uses factories to create document objects.



```csharp

DocumentFactory wordFactory = new WordDocumentFactory();

IDocument wordDocument = wordFactory.CreateDocument();

wordDocument.Open();



DocumentFactory pdfFactory = new PdfDocumentFactory();

IDocument pdfDocument = pdfFactory.CreateDocument();

pdfDocument.Open();



DocumentFactory excelFactory = new ExcelDocumentFactory();

IDocument excelDocument = excelFactory.CreateDocument();

excelDocument.Open();

```



\---



\## Expected Output



```text

Opening Word Document...

Opening PDF Document...

Opening Excel Document...

```



\---



\## How the Factory Method Works



1\. The client requests a document from a factory.

2\. The factory creates the appropriate document object.

3\. The client interacts with the document through the common `IDocument` interface.

4\. The client does not need to know the concrete class being instantiated.



\---



\## Advantages of This Implementation



\* Easy to add new document types.

\* No changes required in client code when adding new factories.

\* Centralized object creation logic.

\* Improved code maintainability and scalability.



\---



\## Conclusion



This project successfully demonstrates the Factory Method Design Pattern by creating Word, PDF, and Excel documents through dedicated factory classes. The pattern provides flexibility, extensibility, and cleaner code organization by separating object creation from object usage.



