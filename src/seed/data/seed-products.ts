interface SeedProduct {
  title: string;
  description: string;
  price: number;
  stock: number;
  sizes: ValidSizes[];
  type: ValidTypes;
  gender: 'men' | 'women' | 'kid' | 'unisex';
  images: string[];
}

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

interface SeedProductsData {
  products: SeedProduct[];
}

export const seedProductsData: SeedProductsData = {
  products: [
    {
      title: 'Awesome Fresh Chips',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1740176-00-A_0_2000.jpg', '1740176-00-A_1.jpg'],
      stock: 7,
      price: 75,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Ergonomic Concrete Towels',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['1740507-00-A_0_2000.jpg', '1740507-00-A_1.jpg'],
      stock: 5,
      price: 200,
      sizes: ['XS', 'S', 'M', 'XL', 'XXL'],
      type: 'shirts',
      gender: 'men',
    },

    {
      title: 'Generic Frozen Car',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['1740250-00-A_0_2000.jpg', '1740250-00-A_1.jpg'],
      stock: 10,
      price: 130,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      type: 'shirts',
      gender: 'men',
    },

    {
      title: 'Licensed Fresh Mouse',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1740280-00-A_0_2000.jpg', '1740280-00-A_1.jpg'],
      stock: 50,
      price: 45,
      sizes: ['XS', 'S', 'M', 'L'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Sleek Soft Fish',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1741416-00-A_0_2000.jpg', '1741416-00-A_1.jpg'],
      stock: 50,
      price: 40,
      sizes: ['M', 'L', 'XL', 'XXL'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Sleek Frozen Pizza',
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: ['7654393-00-A_2_2000.jpg', '7654393-00-A_3.jpg'],
      stock: 0,
      price: 35,
      sizes: ['M', 'L', 'XL', 'XXL'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Tasty Cotton Chair',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1703767-00-A_0_2000.jpg', '1703767-00-A_1.jpg'],
      stock: 15,
      price: 35,
      sizes: ['S', 'M', 'L', 'XL'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Practical Steel Bacon',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['1700280-00-A_0_2000.jpg', '1700280-00-A_1.jpg'],
      stock: 17,
      price: 35,
      sizes: ['XS', 'S', 'XL', 'XXL'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Sleek Fresh Chair',
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      images: ['8764734-00-A_0_2000.jpg', '8764734-00-A_1.jpg'],
      stock: 12,
      price: 35,
      sizes: ['XS', 'S', 'M'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Practical Steel Mouse',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['7652426-00-A_0_2000.jpg', '7652426-00-A_1.jpg'],
      stock: 5,
      price: 35,
      sizes: ['XS', 'S'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Refined Frozen Chips',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['8528839-00-A_0_2000.jpg', '8528839-00-A_2.jpg'],
      stock: 2,
      price: 35,
      sizes: ['XS', 'S', 'M'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Ergonomic Wooden Fish',
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: ['1549268-00-A_0_2000.jpg', '1549268-00-A_2.jpg'],
      stock: 82,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Small Rubber Pizza',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['9877034-00-A_0_2000.jpg', '9877034-00-A_2.jpg'],
      stock: 24,
      price: 35,
      sizes: ['XL', 'XXL'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Handmade Granite Salad',
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      images: ['1633802-00-A_0_2000.jpg', '1633802-00-A_2.jpg'],
      stock: 5,
      price: 30,
      sizes: ['XS', 'S', 'XXL'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Sleek Concrete Pants',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['7654399-00-A_0_2000.jpg', '7654399-00-A_1.jpg'],
      stock: 150,
      price: 30,
      sizes: ['M', 'L'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Refined Metal Cheese',
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: ['7652410-00-A_0.jpg', '7652410-00-A_1_2000.jpg'],
      stock: 10,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Gorgeous Fresh Pizza',
      description:
        'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      images: ['8764600-00-A_0_2000.jpg', '8764600-00-A_2.jpg'],
      stock: 34,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Small Steel Chair',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['8764813-00-A_0_2000.jpg', '8764813-00-A_1.jpg'],
      stock: 15,
      price: 40,
      sizes: ['XL', 'XXL'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Fantastic Cotton Shirt',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['8529198-00-A_0_2000.jpg', '8529198-00-A_1.jpg'],
      stock: 12,
      price: 40,
      sizes: ['XS', 'XXL'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Incredible Fresh Fish',
      description:
        'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      images: ['1740245-00-A_0_2000.jpg', '1740245-00-A_1.jpg'],
      stock: 10,
      price: 115,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      type: 'hoodies',
      gender: 'men',
    },
    {
      title: 'Practical Metal Pants',
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      images: ['1740051-00-A_0_2000.jpg', '1740051-00-A_1.jpg'],
      stock: 10,
      price: 130,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      type: 'hoodies',
      gender: 'unisex',
    },
    {
      title: 'Licensed Granite Shoes',
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      images: ['1741111-00-A_0_2000.jpg', '1741111-00-A_1.jpg'],
      stock: 100,
      price: 85,
      sizes: ['XS', 'L', 'XL', 'XXL'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Incredible Fresh Shirt',
      description:
        'The Football Is Good For Training And Recreational Purposes',
      images: ['1740140-00-A_0_2000.jpg', '1740140-00-A_1.jpg'],
      stock: 7,
      price: 85,
      sizes: ['XS', 'S', 'M'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Awesome Frozen Tuna',
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: ['1740145-00-A_2_2000.jpg', '1740145-00-A_1.jpg'],
      stock: 15,
      price: 85,
      sizes: ['XS', 'S', 'M', 'L'],
      type: 'shirts',
      gender: 'men',
    },
    {
      title: 'Fantastic Rubber Chips',
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: ['8529107-00-A_0_2000.jpg', '8529107-00-A_1.jpg'],
      stock: 15,
      price: 70,
      sizes: ['XS', 'S', 'XL', 'XXL'],
      type: 'hoodies',
      gender: 'unisex',
    },
    {
      title: 'Handmade Rubber Towels',
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      images: ['7654420-00-A_0_2000.jpg', '7654420-00-A_1_2000.jpg'],
      stock: 13,
      price: 60,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      type: 'hoodies',
      gender: 'unisex',
    },
    {
      title: 'Fantastic Concrete Gloves',
      description:
        'The Football Is Good For Training And Recreational Purposes',
      images: ['1657932-00-A_0_2000.jpg', '1657932-00-A_1.jpg'],
      stock: 11,
      price: 30,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      type: 'hats',
      gender: 'unisex',
    },
    {
      title: 'Rustic Concrete Cheese',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1740417-00-A_0_2000.jpg', '1740417-00-A_1.jpg'],
      stock: 13,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      type: 'hats',
      gender: 'unisex',
    },
    {
      title: 'Licensed Plastic Soap',
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: ['1740535-00-A_0_2000.jpg', '1740535-00-A_1.jpg'],
      stock: 85,
      price: 225,
      sizes: ['XS', 'S', 'M'],
      type: 'hoodies',
      gender: 'women',
    },
    {
      title: 'Generic Rubber Bacon',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1740226-00-A_0_2000.jpg', '1740226-00-A_1.jpg'],
      stock: 10,
      price: 130,
      sizes: ['XS', 'S', 'M', 'XXL'],
      type: 'hoodies',
      gender: 'women',
    },
    {
      title: 'Generic Soft Mouse',
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: ['1740260-00-A_0_2000.jpg', '1740260-00-A_1.jpg'],
      stock: 9,
      price: 110,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      type: 'hoodies',
      gender: 'women',
    },
    {
      title: 'Generic Granite Salad',
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      images: ['1740290-00-A_0_2000.jpg', '1740290-00-A_1.jpg'],
      stock: 10,
      price: 45,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      type: 'shirts',
      gender: 'women',
    },
    {
      title: 'Tasty Wooden Salad',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['1741441-00-A_0_2000.jpg', '1741441-00-A_1.jpg'],
      stock: 0,
      price: 40,
      sizes: ['XS', 'S'],
      type: 'shirts',
      gender: 'women',
    },
    {
      title: 'Rustic Concrete Mouse',
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: ['8765090-00-A_0_2000.jpg', '8765090-00-A_1.jpg'],
      stock: 30,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      type: 'shirts',
      gender: 'women',
    },
    {
      title: 'Generic Soft Chicken',
      description:
        'The Football Is Good For Training And Recreational Purposes',
      images: ['8765100-00-A_0_2000.jpg', '8765100-00-A_1.jpg'],
      stock: 16,
      price: 40,
      sizes: ['XS', 'S', 'L', 'XL', 'XXL'],
      type: 'shirts',
      gender: 'women',
    },
    {
      title: 'Rustic Soft Computer',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['8765120-00-A_0_2000.jpg', '8765120-00-A_1.jpg'],
      stock: 18,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      type: 'shirts',
      gender: 'women',
    },
    {
      title: 'Refined Rubber Cheese',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['8765115-00-A_0_2000.jpg', '8765115-00-A_1.jpg'],
      stock: 5,
      price: 35,
      sizes: ['XL', 'XXL'],
      type: 'shirts',
      gender: 'women',
    },
    {
      title: 'Refined Metal Chips',
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      images: ['1549275-00-A_0_2000.jpg', '1549275-00-A_1.jpg'],
      stock: 16,
      price: 35,
      sizes: ['S', 'M'],
      type: 'shirts',
      gender: 'women',
    },
    {
      title: 'Intelligent Metal Cheese',
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      images: ['9877040-00-A_0_2000.jpg', '9877040-00-A_1.jpg'],
      stock: 10,
      price: 130,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      type: 'shirts',
      gender: 'women',
    },
    {
      title: 'Practical Rubber Computer',
      description:
        'The Football Is Good For Training And Recreational Purposes',
      images: ['5645680-00-A_0_2000.jpg', '5645680-00-A_3.jpg'],
      stock: 3,
      price: 90,
      sizes: ['M', 'L', 'XL', 'XXL'],
      type: 'shirts',
      gender: 'women',
    },
    {
      title: 'Rustic Concrete Salad',
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      images: ['1740270-00-A_0_2000.jpg', '1740270-00-A_1.jpg'],
      stock: 162,
      price: 100,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      type: 'shirts',
      gender: 'women',
    },
    {
      title: 'Rustic Wooden Cheese',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1742694-00-A_1_2000.jpg', '1742694-00-A_3.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      type: 'shirts',
      gender: 'kid',
    },
    {
      title: 'Gorgeous Rubber Pizza',
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      images: ['8529312-00-A_0_2000.jpg', '8529312-00-A_1.jpg'],
      stock: 0,
      price: 25,
      sizes: ['XS', 'S', 'M'],
      type: 'shirts',
      gender: 'kid',
    },
    {
      title: 'Refined Metal Chair',
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: ['8529342-00-A_0_2000.jpg', '8529342-00-A_1.jpg'],
      stock: 10,
      price: 25,
      sizes: ['XS', 'S', 'M'],
      type: 'shirts',
      gender: 'kid',
    },
    {
      title: 'Ergonomic Rubber Tuna',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['8529354-00-A_0_2000.jpg', '8529354-00-A_1.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      type: 'shirts',
      gender: 'kid',
    },
    {
      title: 'Licensed Fresh Cheese',
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      images: ['7652465-00-A_0_2000.jpg', '7652465-00-A_1.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      type: 'shirts',
      gender: 'kid',
    },
    {
      title: 'Incredible Steel Salad',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['100042307_0_2000.jpg', '100042307_alt_2000.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      type: 'shirts',
      gender: 'kid',
    },
    {
      title: 'Fantastic Soft Bike',
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: ['1473809-00-A_1_2000.jpg', '1473809-00-A_alt.jpg'],
      stock: 16,
      price: 25,
      sizes: ['XS', 'S'],
      type: 'shirts',
      gender: 'kid',
    },
    {
      title: 'Handmade Fresh Fish',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['8529387-00-A_0_2000.jpg', '8529387-00-A_1.jpg'],
      stock: 0,
      price: 30,
      sizes: ['XS', 'S'],
      type: 'shirts',
      gender: 'kid',
    },
    {
      title: 'Refined Granite Tuna',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1473834-00-A_2_2000.jpg', '1473829-00-A_2_2000.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S'],
      type: 'shirts',
      gender: 'kid',
    },
    {
      title: 'Handcrafted Metal Chicken',
      description:
        'The Football Is Good For Training And Recreational Purposes',
      images: ['1742702-00-A_0_2000.jpg', '1742702-00-A_1.jpg'],
      stock: 10,
      price: 65,
      sizes: ['XS', 'S', 'M'],
      type: 'shirts',
      gender: 'kid',
    },
    {
      title: 'Sleek Wooden Towels',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1506211-00-A_0_2000.jpg', '1506211-00-A_1_2000.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      type: 'shirts',
      gender: 'kid',
    },
  ],
};
