# Exercise 06 – Kafka Integration with C#

## Overview

This project demonstrates how to integrate **Apache Kafka** with **C# (.NET 8)** applications using the **Confluent.Kafka** library. It covers Kafka fundamentals, installation, configuration, and the implementation of both **Console** and **Windows Forms** chat applications for real-time message publishing and consumption.

---

## Objectives

- Understand Apache Kafka and its distributed architecture.
- Learn Kafka components such as Producers, Consumers, Topics, Partitions, Brokers, and ZooKeeper.
- Install and configure Apache Kafka on Windows.
- Integrate Kafka with .NET applications using the Confluent.Kafka NuGet package.
- Implement Kafka Producer and Consumer applications.
- Build real-time chat applications using Console and Windows Forms.

---

## Technologies Used

- C#
- .NET 8
- Apache Kafka 3.7.1
- Java JDK 17 or later
- Confluent.Kafka
- Windows Forms
- Visual Studio 2022

---

## Apache Kafka Overview

Apache Kafka is an open-source distributed event streaming platform designed for building real-time data pipelines and streaming applications. It enables applications to publish, subscribe to, store, and process streams of records efficiently.

### Key Features

- High Throughput
- Scalability
- Fault Tolerance
- Distributed Architecture
- Real-Time Message Streaming

---

## Kafka Architecture

### Producer

Publishes messages to Kafka topics.

### Consumer

Subscribes to Kafka topics and receives published messages.

### Topic

A logical channel used to organize messages.

Example:

```text
chat-topic
```

### Partition

Divides topics into multiple segments to support scalability and parallel processing.

### Broker

Kafka server responsible for storing and serving messages.

### ZooKeeper

Manages Kafka broker coordination, cluster metadata, and configuration.

---

## Software Requirements

- Visual Studio 2022
- .NET 8 SDK
- Apache Kafka 3.7.1
- Java JDK 17 or later
- Confluent.Kafka NuGet Package

---

# Kafka Installation

## Step 1 – Download Kafka

Download Apache Kafka from the official website and extract it.

Example location:

```text
C:\kafka_2.13-3.7.1
```

---

## Step 2 – Start ZooKeeper

Open Command Prompt and execute:

```cmd
bin\windows\zookeeper-server-start.bat config\zookeeper.properties
```

ZooKeeper starts on:

```text
localhost:2181
```

---

## Step 3 – Start Kafka Broker

Open another Command Prompt and run:

```cmd
bin\windows\kafka-server-start.bat config\server.properties
```

Kafka Broker starts on:

```text
localhost:9092
```

---

## Step 4 – Create Kafka Topic

```cmd
bin\windows\kafka-topics.bat --create --topic chat-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1
```

Expected Output:

```text
Created topic chat-topic
```

---

## Step 5 – Verify Topic

```cmd
bin\windows\kafka-topics.bat --list --bootstrap-server localhost:9092
```

Output:

```text
chat-topic
```

---

# Console Chat Application

## NuGet Package

Install:

```text
Confluent.Kafka
```

---

## Kafka Producer

The Producer accepts user input and publishes messages to the Kafka topic.

### Producer Configuration

```csharp
var config = new ProducerConfig
{
    BootstrapServers = "localhost:9092"
};
```

### Topic

```text
chat-topic
```

---

## Kafka Consumer

The Consumer subscribes to the topic and continuously receives messages.

### Consumer Configuration

```csharp
var consumerConfig = new ConsumerConfig
{
    BootstrapServers = "localhost:9092",
    GroupId = "chat-group",
    AutoOffsetReset = AutoOffsetReset.Earliest
};
```

---

## Sample Output

### Producer

```text
Kafka Chat Publisher

Type your message:

Hello Kafka

Sent: Hello Kafka
```

### Consumer

```text
Hello Kafka
```

---

# Windows Forms Chat Application

## Objective

Develop a Windows Forms application that enables multiple clients to communicate in real time through Kafka.

---

## User Interface

### TextBox

```text
txtMessage
```

### Button

```text
btnSend
```

### ListBox

```text
lstMessages
```

---

## Producer Workflow

When the **Send** button is clicked:

1. Read the message from the TextBox.
2. Publish it to the Kafka topic.
3. Clear the TextBox.

---

## Consumer Workflow

A background task continuously:

1. Subscribes to the topic.
2. Receives new messages.
3. Displays them in the ListBox.

---

## Sample Output

### Client 1

```text
Hello from Client 1
```

### Client 2

```text
Hello from Client 1
```

Both clients receive the message instantly through Kafka.

---

# Project Features

- Kafka Producer implementation
- Kafka Consumer implementation
- Console-based chat application
- Windows Forms chat application
- Real-time messaging
- Topic-based communication
- Multiple client support

---

# Project Structure

```text
Exercise06.Kafka

│
├── KafkaProducer
│   └── Program.cs
│
├── KafkaConsumer
│   └── Program.cs
│
├── KafkaChatWinForms
│   ├── Form1.cs
│   ├── Form1.Designer.cs
│   └── Program.cs
│
└── README.md
```

---

# Results

The project successfully demonstrates:

- Apache Kafka installation and configuration
- Kafka Producer implementation
- Kafka Consumer implementation
- Real-time communication using Kafka Topics
- Console-based messaging
- Windows Forms chat application using Kafka
- Message broadcasting across multiple clients

---

# Key Learnings

- Apache Kafka architecture
- Topic-based messaging
- Producer and Consumer communication
- Kafka integration with .NET applications
- Event-driven application development
- Real-time messaging using Kafka

---

# References

- Apache Kafka Documentation: https://kafka.apache.org/
- Confluent Documentation: https://docs.confluent.io/
- C# Corner – Apache Kafka .NET Application: https://www.c-sharpcorner.com/article/apache-kafka-net-application/
- C# Corner – Kafka Installation Guide: https://www.c-sharpcorner.com/article/step-by-step-installation-and-configuration-guide-of-apache-kafka-on-windows-ope/

---

## Conclusion

This exercise demonstrates the successful integration of Apache Kafka with C# (.NET 8) applications. Kafka Producers and Consumers were implemented using the Confluent.Kafka library, enabling real-time communication through both Console and Windows Forms applications. The project provides a practical introduction to event-driven application development using Apache Kafka.
