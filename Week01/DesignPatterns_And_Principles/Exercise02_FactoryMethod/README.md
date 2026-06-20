# Factory Method Pattern Example

## Overview

This project demonstrates the implementation of the **Factory Method Design Pattern** in a Document Management System.

The Factory Method Pattern provides an interface for creating objects while allowing subclasses to decide which class should be instantiated. This promotes loose coupling and makes the system easier to maintain and extend.

---

## Scenario

A document management system needs to create different types of documents, such as:

* Word Documents
* PDF Documents
* Excel Documents

Instead of creating document objects directly in the client code, the Factory Method Pattern delegates object creation to specialized factory classes.

---

## Design Pattern Used

### Factory Method Pattern (Creational Design Pattern)

The Factory Method Pattern defines an interface for creating objects but allows subclasses to determine which specific object should be created.

### Benefits

* Encapsulates object creation logic.
* Promotes loose coupling between classes.
* Simplifies maintenance and future extensions.
* Follows the Open/Closed Principle.

---

# Components

## 1. Product Interface

The `IDocument` interface defines a common operation that all document types must implement.

### Implementation

```csharp
public interface IDocument
{
    void Open();
}
```

---

## 2. Concrete Products

Each document type implements the `IDocument` interface and provides its own implementation of the `Open()` method.

### WordDocument

```csharp
public class WordDocument : IDocument
{
    public void Open()
    {
        Console.WriteLine("Opening Word Document...");
    }
}
```

### PdfDocument

```csharp
public class PdfDocument : IDocument
{
    public void Open()
    {
        Console.WriteLine("Opening PDF Document...");
    }
}
```

### ExcelDocument

```csharp
public class ExcelDocument : IDocument
{
    public void Open()
    {
        Console.WriteLine("Opening Excel Document...");
    }
}
```

---

## 3. Abstract Factory

The abstract factory class declares the factory method responsible for creating document objects.

```csharp
public abstract class DocumentFactory
{
    public abstract IDocument CreateDocument();
}
```

---

## 4. Concrete Factories

Each concrete factory creates a specific type of document.

### WordDocumentFactory

```csharp
public class WordDocumentFactory : DocumentFactory
{
    public override IDocument CreateDocument()
    {
        return new WordDocument();
    }
}
```

### PdfDocumentFactory

```csharp
public class PdfDocumentFactory : DocumentFactory
{
    public override IDocument CreateDocument()
    {
        return new PdfDocument();
    }
}
```

### ExcelDocumentFactory

```csharp
public class ExcelDocumentFactory : DocumentFactory
{
    public override IDocument CreateDocument()
    {
        return new ExcelDocument();
    }
}
```

---

# Testing the Factory Method

The client code uses factories to create document objects without directly creating concrete classes.

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

---

# Expected Output

```text
Opening Word Document...
Opening PDF Document...
Opening Excel Document...
```

---

# How the Factory Method Works

1. The client requests a document object from a factory.
2. The factory creates the required document instance.
3. The client interacts with the object through the common `IDocument` interface.
4. The client does not need to know the concrete class being created.

---

# Advantages of This Implementation

* Easy to add new document types.
* Client code remains unchanged when new factories are introduced.
* Object creation logic is centralized.
* Improves code maintainability and scalability.
* Reduces dependency between client code and concrete classes.

---

# Conclusion

This project successfully demonstrates the Factory Method Design Pattern by creating Word, PDF, and Excel documents through dedicated factory classes.

The pattern provides flexibility and cleaner code organization by separating object creation from object usage, making the application easier to extend and maintain.
