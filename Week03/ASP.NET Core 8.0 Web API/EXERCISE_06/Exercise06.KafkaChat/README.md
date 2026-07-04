\# EXERCISE 06 – Kafka Integration with C#



\## Objective



\* Understand Apache Kafka as a distributed streaming platform.

\* Learn Kafka Architecture including Topics, Partitions, Brokers, and ZooKeeper.

\* Install and configure Kafka on Windows.

\* Integrate Kafka with .NET applications using the Confluent.Kafka package.

\* Implement a Chat Application using Kafka for message publishing and consumption.

\* Demonstrate message exchange through Console Application and Windows Forms Application.



\---



\# Theory



\## What is Apache Kafka?



Apache Kafka is an open-source distributed event streaming platform used for building real-time data pipelines and streaming applications. It enables applications to publish, subscribe, store, and process streams of records.



\### Key Features



\* High Throughput

\* Scalability

\* Fault Tolerance

\* Real-Time Processing

\* Distributed Architecture



\---



\## Kafka Architecture



\### Producer



A Producer publishes messages to Kafka topics.



\### Consumer



A Consumer subscribes to topics and reads messages.



\### Topic



A Topic is a logical channel used to categorize messages.



Example:



```text

chat-topic

```



\### Partition



Topics are divided into partitions for scalability and parallel processing.



\### Broker



A Kafka Broker is a server responsible for storing and serving messages.



\### ZooKeeper



ZooKeeper manages Kafka cluster metadata, broker coordination, and configuration management.



\---



\# Software Requirements



\* Visual Studio 2022

\* .NET 8.0

\* Apache Kafka 3.7.1

\* Java JDK 17/21/22

\* Confluent.Kafka NuGet Package



\---



\# Kafka Installation and Configuration



\## Step 1 – Download Kafka



Download Apache Kafka 3.7.1 and extract it to:



```text

C:\\kafka\_2.13-3.7.1

```



\---



\## Step 2 – Start ZooKeeper



Open Command Prompt and execute:



```cmd

bin\\windows\\zookeeper-server-start.bat config\\zookeeper.properties

```



ZooKeeper starts on port 2181.



\---



\## Step 3 – Start Kafka Server



Open a new Command Prompt and execute:



```cmd

bin\\windows\\kafka-server-start.bat config\\server.properties

```



Kafka Broker starts on port 9092.



\---



\## Step 4 – Create Topic



Open another Command Prompt and execute:



```cmd

bin\\windows\\kafka-topics.bat --create --topic chat-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1

```



Output:



```text

Created topic chat-topic

```



\---



\## Step 5 – Verify Topic



```cmd

bin\\windows\\kafka-topics.bat --list --bootstrap-server localhost:9092

```



Output:



```text

chat-topic

```



\---



\# Hands-On 1: Console Chat Application



\## NuGet Package



Install:



```text

Confluent.Kafka

```



\---



\## Producer Application



The producer accepts user input and publishes chat messages to Kafka Topic.



\### Configuration



```csharp

var config = new ProducerConfig

{

&#x20;   BootstrapServers = "localhost:9092"

};

```



\### Topic



```text

chat-topic

```



\---



\## Consumer Application



The consumer subscribes to the topic and receives messages continuously.



\### Configuration



```csharp

var consumerConfig = new ConsumerConfig

{

&#x20;   BootstrapServers = "localhost:9092",

&#x20;   GroupId = "chat-group",

&#x20;   AutoOffsetReset = AutoOffsetReset.Earliest

};

```



\---



\## Output



Producer:



```text

Kafka Chat Publisher

Type message and press Enter



Hello Kafka

Sent: Hello Kafka

```



Consumer:



```text

Hello Kafka

```



\---



\# Hands-On 2: Windows Forms Chat Application



\## Objective



Create a Windows Forms Chat Client using Kafka.



Messages sent from one client should be visible in all connected clients.



\---



\## Controls Used



\### TextBox



```text

txtMessage

```



\### Button



```text

btnSend

```



\### ListBox



```text

lstMessages

```



\---



\## Producer Functionality



When the user clicks the Send button:



1\. Read text from TextBox.

2\. Publish message to Kafka Topic.

3\. Clear TextBox.



\---



\## Consumer Functionality



A background task continuously:



1\. Subscribes to chat-topic.

2\. Receives messages.

3\. Displays them in ListBox.



\---



\## Output



Client 1:



```text

Hello from Client 1

```



Client 2:



```text

Hello from Client 1

```



Both clients successfully receive messages through Kafka.



\---



\# Result



Successfully integrated Apache Kafka with C# applications.



Implemented:



\* Kafka Producer

\* Kafka Consumer

\* Console Chat Application

\* Windows Forms Chat Application



Messages were successfully published and consumed using Kafka Topics, demonstrating real-time communication between multiple clients.



\---



\# References



1\. https://www.c-sharpcorner.com/article/apache-kafka-net-application/



2\. https://www.c-sharpcorner.com/article/step-by-step-installation-and-configuration-guide-of-apache-kafka-on-windows-ope/



3\. https://kafka.apache.org/



4\. https://docs.confluent.io/



