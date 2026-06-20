# Exercise 7 - Financial Forecasting Using Recursion

## Understanding Recursive Algorithms

### What is Recursion?

Recursion is a programming technique in which a method calls itself to solve a smaller version of the same problem. A recursive solution typically consists of:

1. **Base Case** – The condition that stops the recursion.
2. **Recursive Case** – The part where the method calls itself with a smaller input.

In this exercise, recursion is used to calculate the future value of an investment by repeatedly applying the growth rate until the desired number of years is reached.

### How Recursion Simplifies Problems

Recursion allows complex problems to be broken down into smaller, more manageable subproblems. Instead of using loops and additional variables, the solution can be expressed in a way that closely resembles the mathematical definition of the problem.

For financial forecasting:

Future Value (n years) = Future Value (n - 1 years) × (1 + Growth Rate)

This relationship naturally lends itself to a recursive solution.

---

## Time Complexity Analysis

### Recursive Algorithm

The recursive method makes one recursive call for each year until it reaches the base case.

For a forecast of **n years**:

* Year n calls Year n-1
* Year n-1 calls Year n-2
* ...
* Year 1 calls Year 0

Therefore, the number of recursive calls grows linearly with the number of years.

### Time Complexity

**O(n)**

Where:

* n = number of years being forecast

The algorithm performs one calculation for each recursive call.

### Space Complexity

**O(n)**

Each recursive call is stored on the call stack until the base case is reached. Therefore, memory usage also grows linearly with the number of years.

---

## Optimization of the Recursive Solution

Although recursion makes the solution easy to understand, excessive recursive calls can increase memory usage and execution time for large inputs.

### 1. Iterative Approach

The recursive solution can be replaced with a loop.

Advantages:

* Eliminates recursive call overhead.
* Reduces space complexity from O(n) to O(1).
* More efficient for large numbers of years.

### 2. Mathematical Formula

The future value can be calculated directly using:

Future Value = Current Value × (1 + Growth Rate)^Years

In C#, this can be implemented using:

```csharp
Math.Pow(1 + growthRate, years)
```

Advantages:

* Faster execution.
* No recursion or iteration required.
* Suitable for large forecasting periods.

---

## Conclusion

Recursion provides a simple and intuitive way to implement financial forecasting by breaking the problem into smaller subproblems. The recursive solution has a time complexity of O(n) and a space complexity of O(n). For larger datasets or longer forecasting periods, iterative solutions or mathematical formulas are preferred because they reduce memory usage and improve performance.
