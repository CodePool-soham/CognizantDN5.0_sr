using System;

public class LinearSearch
{
    public static Product Search(Product[] products, string target)
    {
        foreach (Product product in products)
        {
            if (product.ProductName.Equals(target, StringComparison.OrdinalIgnoreCase))

            {
                return product;
            }
        }

        return null;
    }
}