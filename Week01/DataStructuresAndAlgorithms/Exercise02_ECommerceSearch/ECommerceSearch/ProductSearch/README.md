# Exercise 02 - E-Commerce Platform Search Function

## 1. Understanding Asymptotic Notation

### What is Big O Notation?

Big O notation is used to measure the efficiency of an algorithm by describing how its execution time grows as the input size increases.

It helps developers:
- Compare algorithms.
- Predict performance on large datasets.
- Choose the most efficient solution.

---

## Search Operation Scenarios

### Best Case

The target element is found immediately.

Example:
- Searching for the first product in a list using Linear Search.

Time Complexity:
- Linear Search: O(1)
- Binary Search: O(1)

---

### Average Case

The target element is found somewhere in the middle of the dataset.

Time Complexity:
- Linear Search: O(n)
- Binary Search: O(log n)

---

### Worst Case

The target element is the last item or does not exist.

Time Complexity:
- Linear Search: O(n)
- Binary Search: O(log n)

---

## 2. Time Complexity Comparison

| Algorithm		| Best Case | Average Case | Worst Case |
|---------------|-----------|--------------|------------|
| Linear Search | O(1)      |      O(n)	   |	O(n)	|
| Binary Search | O(1)      |     O(log n) |   O(log n) |

### Linear Search

Linear Search checks each element one by one until the target is found.

Advantages:
- Works on unsorted data.
- Easy to implement.

Disadvantages:
- Slow for large datasets.

---

### Binary Search

Binary Search repeatedly divides the search space into half.

Advantages:
- Much faster for large datasets.
- Efficient searching.

Disadvantages:
- Requires sorted data.

---

## 3. Which Algorithm is More Suitable?

For an e-commerce platform containing thousands or millions of products, Binary Search is more suitable because its time complexity is O(log n), which is significantly faster than Linear Search's O(n).

However, Binary Search can only be used when the product data is sorted. If the data is unsorted, Linear Search must be used or the data should be sorted first.

### Conclusion

Binary Search is the preferred choice for large e-commerce platforms because it provides faster search performance and better scalability.