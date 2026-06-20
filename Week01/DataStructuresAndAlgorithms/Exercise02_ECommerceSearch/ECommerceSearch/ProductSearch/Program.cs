using System;

namespace ProductSearch
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== E-Commerce Product Search ===\n");

            Product[] products =
            {
                new Product(101, "Camera", "Electronics"),
                new Product(102, "Laptop", "Electronics"),
                new Product(103, "Phone", "Electronics"),
                new Product(104, "Tablet", "Electronics"),
                new Product(105, "Watch", "Accessories")
            };

            // Existing Product Search
            Console.WriteLine("Searching for 'Phone'\n");

            Product linearResult = LinearSearch.Search(products, "Phone");

            Console.WriteLine("Linear Search Result:");
            if (linearResult != null)
            {
                DisplayProduct(linearResult);
            }
            else
            {
                Console.WriteLine("Product Not Found");
            }

            Console.WriteLine();

            Product binaryResult = BinarySearch.Search(products, "Phone");

            Console.WriteLine("Binary Search Result:");
            if (binaryResult != null)
            {
                DisplayProduct(binaryResult);
            }
            else
            {
                Console.WriteLine("Product Not Found");
            }

            Console.WriteLine("\n---------------------------------\n");

            // Edge Case: Product does not exist
            Console.WriteLine("Searching for 'Headphones'\n");

            Product missingProduct = LinearSearch.Search(products, "Headphones");

            Console.WriteLine("Linear Search Result:");
            if (missingProduct != null)
            {
                DisplayProduct(missingProduct);
            }
            else
            {
                Console.WriteLine("Product Not Found");
            }
        }

        static void DisplayProduct(Product product)
        {
            Console.WriteLine($"Product ID   : {product.ProductId}");
            Console.WriteLine($"Product Name : {product.ProductName}");
            Console.WriteLine($"Category     : {product.Category}");
        }
    }
}