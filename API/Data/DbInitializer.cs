using System.Collections.Generic;
using System.Linq;
using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                    Name = "Golf Stencil",
                    Description = "Calculator themed golf ball stencil.",
                    Price = 15000,
                    PictureURL = "/images/products/CalculatorBlack.PNG",
                    Brand = "Angular",
                    Type = "Boards",
                    QuantityInStock = 100
                },
            };

            foreach(var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}