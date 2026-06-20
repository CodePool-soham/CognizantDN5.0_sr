using System;

public class BinarySearch
{
    public static Product Search(Product[] products, string target)
    {
        int left = 0;
        int right = products.Length - 1;

        while (left <= right)
        {
            int mid = (left + right) / 2;

            int result = string.Compare(products[mid].ProductName, target, StringComparison.OrdinalIgnoreCase);

            if (result == 0)
            {
                return products[mid];
            }
            else if (result < 0)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }

        return null;
    }
}