using Microsoft.EntityFrameworkCore;
using RetailInventory.Data;

using var context = new AppDbContext();

//===================================================================[Writing Queries with LINQ ]====================================================================================
// 1. Filter and Sort Products

var filteredProducts = await context.Products
    .Where(p => p.Price > 1000)
    .OrderByDescending(p => p.Price)
    .ToListAsync();


Console.WriteLine("Products above Rs 1000:");

foreach (var p in filteredProducts)
{
    Console.WriteLine($"{p.Name} - Rs {p.Price}");
}


// 2. Project into DTO

var productDTOs = await context.Products
    .Select(p => new
    {
        p.Name,
        p.Price
    })
    .ToListAsync();


Console.WriteLine();

Console.WriteLine("Product DTO Data:");

foreach (var p in productDTOs)
{
    Console.WriteLine($"{p.Name} - Rs {p.Price}");
}

/*===================================================================[Updating and deleting Records in database]====================================================================

// Update Laptop price

var product = await context.Products
    .FirstOrDefaultAsync(p => p.Name == "Laptop");

if (product != null)
{
    product.Price = 70000;

    await context.SaveChangesAsync();

    Console.WriteLine("Laptop price updated!");
}


// Delete Rice Bag

var toDelete = await context.Products
    .FirstOrDefaultAsync(p => p.Name == "Rice Bag");

if (toDelete != null)
{
    context.Products.Remove(toDelete);

    await context.SaveChangesAsync();

    Console.WriteLine("Rice Bag deleted!");
}

*/




/*===================================================================[Code for retrieving data from database]========================================================================

// 1. Retrieve all products

var products = await context.Products.ToListAsync();

Console.WriteLine("All Products:");

foreach (var p in products)
{
    Console.WriteLine($"{p.Name} - Rs {p.Price}");
}


// 2. Find product by ID

var product = await context.Products.FindAsync(1);

Console.WriteLine();

Console.WriteLine($"Found Product: {product?.Name}");


// 3. Find first product with price greater than 50000

var expensive = await context.Products
    .FirstOrDefaultAsync(p => p.Price > 50000);

Console.WriteLine();

Console.WriteLine($"Expensive Product: {expensive?.Name}");

*/


/*
 ===================================================================[Code for injecting data into database]========================================================================

var electronics = new Category
{
    Name = "Electronics"
};

var groceries = new Category
{
    Name = "Groceries"
};

await context.Categories.AddRangeAsync(electronics, groceries);


var product1 = new Product
{
    Name = "Laptop",
    Price = 75000,
    Category = electronics
};

var product2 = new Product
{
    Name = "Rice Bag",
    Price = 1200,
    Category = groceries
};

await context.Products.AddRangeAsync(product1, product2);

await context.SaveChangesAsync();

Console.WriteLine("Data inserted successfully!");
 
 
 
 */


