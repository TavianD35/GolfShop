namespace API.Entities
{
    public class Product
    {
       public int Id { get; set; }
       public string Description { get; set; } 
       public string Name { get; set; }
       public long Price { get; set; }
       public string PictureUrlBlack { get; set; }
       public string PictureUrlBlue { get; set; }
       public string PictureUrlOrange { get; set; }
       public string PictureUrlRed { get; set; }
       public string PictureUrlWhite { get; set; }
       public string PlasticType { get; set; }
       public string ProductType { get; set; }

    }
}