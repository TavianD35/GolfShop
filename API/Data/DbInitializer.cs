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
                /************BALL STENCILS************/
                new Product
                {
                    Name = "Calculator",
                    Description = "Calculator themed golf ball stencil for the most calculated shots.",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/CalculatorBlack.PNG",
                    PictureUrlBlue = "/images/products/CalculatorBlue.PNG",
                    PictureUrlOrange = "/images/products/CalculatorOrange.PNG",
                    PictureUrlRed = "/images/products/CalculatorRed.PNG",
                    PictureUrlWhite = "/images/products/CalculatorWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Golf Ball Stencil"
                },

                new Product
                {
                    Name = "Dummy Ball Stencil",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Golf Ball Stencil"
                },

                new Product
                {
                    Name = "Dummy Ball Stencil",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Golf Ball Stencil"
                },

                new Product
                {
                    Name = "Dummy Ball Stencil",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Golf Ball Stencil"
                },

                new Product
                {
                    Name = "Dummy Ball Stencil",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Golf Ball Stencil"
                },

                new Product
                {
                    Name = "Dummy Ball Stencil",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Golf Ball Stencil"
                },

                new Product
                {
                    Name = "Dummy Ball Stencil",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Golf Ball Stencil"
                },

                new Product
                {
                    Name = "Dummy Ball Stencil",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Golf Ball Stencil"
                },

                new Product
                {
                    Name = "Dummy Ball Stencil",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Golf Ball Stencil"
                },

                new Product
                {
                    Name = "Dummy Ball Stencil",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Golf Ball Stencil"
                },

                new Product
                {
                    Name = "Dummy Ball Stencil",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Golf Ball Stencil"
                },

                new Product
                {
                    Name = "Dummy Ball Stencil",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Golf Ball Stencil"
                },


                /************BALL MARKERS************/
                new Product
                {
                    Name = "Dummy Ball Marker",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Ball Marker"
                },

                new Product
                {
                    Name = "Dummy Ball Marker",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Ball Marker"
                },

                new Product
                {
                    Name = "Dummy Ball Marker",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Ball Marker"
                },

                new Product
                {
                    Name = "Dummy Ball Marker",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Ball Marker"
                },

                new Product
                {
                    Name = "Dummy Ball Marker",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Ball Marker"
                },

                new Product
                {
                    Name = "Dummy Ball Marker",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Ball Marker"
                },

                new Product
                {
                    Name = "Dummy Ball Marker",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Ball Marker"
                },

                new Product
                {
                    Name = "Dummy Ball Marker",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Ball Marker"
                },


                /************DIVOT REPAIR TOOLS************/
                new Product
                {
                    Name = "Dummy Divot Repair Tool",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Divot Repair Tool"
                },

                new Product
                {
                    Name = "Dummy Divot Repair Tool",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Divot Repair Tool"
                },

                new Product
                {
                    Name = "Dummy Divot Repair Tool",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Divot Repair Tool"
                },

                new Product
                {
                    Name = "Dummy Divot Repair Tool",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Divot Repair Tool"
                },

                new Product
                {
                    Name = "Dummy Divot Repair Tool",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Divot Repair Tool"
                },

                new Product
                {
                    Name = "Dummy Divot Repair Tool",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Divot Repair Tool"
                },

                new Product
                {
                    Name = "Dummy Divot Repair Tool",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Divot Repair Tool"
                },

                new Product
                {
                    Name = "Dummy Divot Repair Tool",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Divot Repair Tool"
                },

                new Product
                {
                    Name = "Dummy Divot Repair Tool",
                    Description = "Add witty description here!",
                    Price = 2000,
                    PictureUrlBlack = "/images/products/DummyBlack.PNG",
                    //PictureUrlBlue = "/images/products/DummyBlue.PNG",
                    //PictureUrlOrange = "/images/products/DummyOrange.PNG",
                    //PictureUrlRed = "/images/products/DummyRed.PNG",
                    //PictureUrlWhite = "/images/products/DummyWhite.PNG",
                    PlasticType = "PLA",
                    ProductType = "Divot Repair Tool"
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