\# Exercise 1: Ranking and Window Functions



\## Objective



The goal of this exercise is to understand and implement SQL Window Functions using:



\* ROW\_NUMBER()

\* RANK()

\* DENSE\_RANK()

\* OVER()

\* PARTITION BY



The exercise demonstrates how to rank products within each category and retrieve the top 3 most expensive products.



\---



\## Scenario



An organization wants to analyze product pricing across different categories. The requirement is to rank products based on their price and identify the top-performing products within each category.



\---



\## Database Used



\*\*Database Name:\*\* CognizantTraining



\*\*Table Name:\*\* Products



\### Table Structure



| Column Name | Data Type     |

| ----------- | ------------- |

| ProductID   | INT           |

| ProductName | VARCHAR(100)  |

| Category    | VARCHAR(50)   |

| Price       | DECIMAL(10,2) |



\---



\## Concepts Covered



\### OVER()



The OVER() clause defines a window of rows on which a ranking function operates.



\### PARTITION BY



PARTITION BY divides the result set into separate groups before applying ranking functions.



In this exercise, products are grouped by their category.



\### ORDER BY Price DESC



Products are sorted in descending order of price so that the most expensive products receive the highest rank.



\---



\## Ranking Functions



\### ROW\_NUMBER()



Assigns a unique sequential number to each row within a category.



Example:



| Product  | Price | Row Number |

| -------- | ----- | ---------- |

| Laptop A | 80000 | 1          |

| Laptop B | 80000 | 2          |

| Laptop C | 70000 | 3          |



Even if two products have the same price, different row numbers are assigned.



\---



\### RANK()



Assigns the same rank to rows with equal values.



Example:



| Product  | Price | Rank |

| -------- | ----- | ---- |

| Laptop A | 80000 | 1    |

| Laptop B | 80000 | 1    |

| Laptop C | 70000 | 3    |



Notice that Rank 2 is skipped.



\---



\### DENSE\_RANK()



Assigns the same rank to rows with equal values without skipping ranks.



Example:



| Product  | Price | Dense Rank |

| -------- | ----- | ---------- |

| Laptop A | 80000 | 1          |

| Laptop B | 80000 | 1          |

| Laptop C | 70000 | 2          |



No rank values are skipped.



\---



\## Finding the Top 3 Most Expensive Products



A Common Table Expression (CTE) was used along with ROW\_NUMBER() to rank products within each category.



The query filters records where the generated rank is less than or equal to 3, returning the top three products from every category.



\---



\## Output Screenshots



The following screenshots are included in the repository:



1\. Products Table

2\. ROW\_NUMBER() Output

3\. RANK() Output

4\. DENSE\_RANK() Output

5\. Top 3 Products Per Category



\---



\## Key Learnings



\* Learned how Window Functions operate on a set of rows without grouping the result.

\* Understood the difference between ROW\_NUMBER(), RANK(), and DENSE\_RANK().

\* Used PARTITION BY to create category-wise rankings.

\* Used ORDER BY within OVER() to rank products based on price.

\* Implemented a practical business use case to identify top-performing products.



\---



\## Conclusion



Window Functions provide a powerful way to perform ranking and analytical operations in SQL. They are widely used in reporting, business intelligence, and data analysis scenarios. This exercise demonstrated how ranking functions can be used to identify the top products within each category while handling ties in different ways.



