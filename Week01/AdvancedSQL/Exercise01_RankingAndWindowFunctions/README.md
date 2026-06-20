# Exercise 1: Ranking and Window Functions

## Objective

The goal of this exercise is to understand and implement SQL Window Functions using:

* `ROW_NUMBER()`
* `RANK()`
* `DENSE_RANK()`
* `OVER()`
* `PARTITION BY`

This exercise demonstrates how to rank products within each category and retrieve the top 3 most expensive products from every category.

---

## Scenario

An organization wants to analyze product pricing across different categories.

The requirement is to rank products based on their price and identify the top-performing products within each category using SQL Window Functions.

---

## Database Used

**Database Name:** `CognizantTraining`

**Table Name:** `Products`

---

## Table Structure

| Column Name | Data Type     |
| ----------- | ------------- |
| ProductID   | INT           |
| ProductName | VARCHAR(100)  |
| Category    | VARCHAR(50)   |
| Price       | DECIMAL(10,2) |

---

# Concepts Covered

## OVER()

The `OVER()` clause defines the window of rows on which a window function operates.

It allows ranking and analytical functions to perform calculations without grouping the result set.

Example:

```sql
ROW_NUMBER() OVER(ORDER BY Price DESC)
```

---

## PARTITION BY

The `PARTITION BY` clause divides the result set into separate groups before applying ranking functions.

In this exercise, products are grouped by their category.

Example:

```sql
RANK() OVER(PARTITION BY Category ORDER BY Price DESC)
```

This creates separate rankings for each product category.

---

## ORDER BY Price DESC

The `ORDER BY Price DESC` clause sorts products from the highest price to the lowest price.

The most expensive products receive the highest priority in ranking.

---

# Ranking Functions

## ROW_NUMBER()

`ROW_NUMBER()` assigns a unique sequential number to each row within a category.

Even if two products have the same price, each product receives a different row number.

### Example

| Product  | Price | Row Number |
| -------- | ----- | ---------- |
| Laptop A | 80000 | 1          |
| Laptop B | 80000 | 2          |
| Laptop C | 70000 | 3          |

---

## RANK()

`RANK()` assigns the same rank to rows with equal values.

When duplicate values exist, the next rank value is skipped.

### Example

| Product  | Price | Rank |
| -------- | ----- | ---- |
| Laptop A | 80000 | 1    |
| Laptop B | 80000 | 1    |
| Laptop C | 70000 | 3    |

Here, Rank 2 is skipped because two products share Rank 1.

---

## DENSE_RANK()

`DENSE_RANK()` assigns the same rank to rows with equal values but does not skip ranking numbers.

### Example

| Product  | Price | Dense Rank |
| -------- | ----- | ---------- |
| Laptop A | 80000 | 1          |
| Laptop B | 80000 | 1          |
| Laptop C | 70000 | 2          |

No rank values are skipped.

---

# Finding the Top 3 Most Expensive Products

A Common Table Expression (CTE) is used with `ROW_NUMBER()` to rank products within each category.

The generated ranking is then filtered using a condition:

```sql
WHERE Rank <= 3
```

This returns the top three most expensive products from every category.

---

# Output Screenshots

The following screenshots are included in the repository:

1. Products Table
2. `ROW_NUMBER()` Output
3. `RANK()` Output
4. `DENSE_RANK()` Output
5. Top 3 Products Per Category

---

# Key Learnings

* Learned how SQL Window Functions operate without grouping the result set.
* Understood the difference between `ROW_NUMBER()`, `RANK()`, and `DENSE_RANK()`.
* Used `PARTITION BY` to create category-wise rankings.
* Used `ORDER BY` inside `OVER()` to rank products based on price.
* Implemented a real-world business scenario to identify top-performing products.

---

# Conclusion

Window Functions provide a powerful way to perform ranking and analytical operations in SQL.

They are widely used in reporting, business intelligence, and data analysis scenarios.

This exercise demonstrated how ranking functions can be used to identify the top products within each category while handling duplicate values using different ranking approaches.
