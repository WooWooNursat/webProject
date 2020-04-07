import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
//import { foods} from '../foods';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
createDb()
{

   const foods = [
    {
        id:1,
      name: 'a Hot Food Merchandiser',
      category_id: 1,
      price: 5.38,
      description: 'Kid Wedding Dresses for Girls Elegant Flower Princess Long Gown Baby Girl Christmas Dress vestidos infantil Size 6 12 14 Years',
      ingredients:'ingredients',
     images:'https://image.shutterstock.com/image-photo/steam-vegetables-carrot-broccoli-cauliflower-260nw-1443335471.jpg'
  
    },
    {
        id:2,
        category_id: 1,
      name: 'Vindaloo ',
      price: 4.88,
      description: 'New Princess Lace Dress Kids Flower Embroidery Dress For Girls Vintage Children Dresses For Wedding Party Formal Ball Gown 14T',
      ingredients:'ingredients',
      images:"https://netstorage-nur.akamaized.net/images/cc7c70b118ddfff8.jpg?imwidth=900"
    },
    {

        id:3,
        category_id: 1,
      name: 'Shrimp Creole',
      price: 5.58,
      description: 'Elegant Christmas Princess Dress 6-14 Years Kids Dresses For Girls New Year Party Costume First Communion Children Clothes'
      ,
      ingredients:'ingredients',
      images:'https://lh3.googleusercontent.com/proxy/w76sk4jpPwA1bwZV-Bbf-kBXIWNOuXzc15eS42wQWowQlrP_ByawdH5AJGjzI8fnkR2K6iuOjhv-ruCkqUXdCEEOs9BQ5nq0zgaGAMI629EDuDZJBBgtaezck6pIOCG_pB-pGE0rEHfndM_G6lk7QKCzafvO'
    },
    {
        id:4,
        category_id: 1,
      name: ' Phaal Curry',
      price: 14.32,
      description: '2019 Christmas Frozen 2 Queen Anna Dress Cosplay Costumes For Kid Girls Party Princess Vestidos Child Clothing Dress 3-12 year',
      
      ingredients:'ingredients',
       images:'https://www.1001eda.com/wp-content/uploads/2012/11/41_17_12_2012_2606.jpg'
    },
    {
        id:5,
        category_id: 1,
      name: ' Papa a la Huancaina',
      price: 14.32,
      description: '2019 Christmas Frozen 2 Queen Anna Dress Cosplay Costumes For Kid Girls Party Princess Vestidos Child Clothing Dress 3-12 year',
      
      ingredients:'ingredients',
       images:'https://2016.life/media/upload/goryachee.jpg'
    },
   
   
     
    {
      id:13,
      category_id: 2,
    name: 'Beef Burgers',
    price: 3.37,
    description: 'Bow Sandals for Girls Baby Shoes Cotton Baby Girl Sandals Fashion Bow Breathable Baby Sandals Sandy Beach Shoes',
    ingredients:'ingredients',
  images:'https://image.freepik.com/free-photo/_23-2148273031.jpg'
  }
  ,
     
    {
      id:14,
      category_id: 2,
    name: 'Pizza',
    price: 4.07,
    description: 'Baby Sandals Newborn Girl Shoes Fashion PU Bow Baby Girl Sandals Cute Baby Shoes Sandals for Girls',
    ingredients:'ingredients',
  images:'https://image.freepik.com/free-photo/_127657-159.jpg'
  }
  ,
     
    {
      id:15,
      category_id: 2,
    name: 'Hot Dogs',
    price: 4.40,
    description: 'Baby Sandals Girl Shoes Newborn Baby Tassel Bow Fashion Infant Baby Girl Sandals 2018 Baby Shoes',
    ingredients:'ingredients',
  images:'https://apelsinka-rezept.ru/wp-content/uploads/domashniy-hot-dog.jpg'
  }
  ,
     
    {
      id:16,
      category_id: 2,
    name: 'Naggets',
    price: 6.03,
    description: 'Cute Girl Princess Sandals Summer Girl Sandals Toddler Shoes PU Rubber Bottom Slip Flowers Baby Shoes Brand 2019',
    ingredients:'ingredients',
  images:'https://previews.123rf.com/images/tbralnina/tbralnina1706/tbralnina170600171/81161011-chicken-naggets-with-sauces-on-dark-background-top-view-.jpg'
  }
  ,
     
    {
      id:17,
      category_id: 2,
    name: 'Warm Kids Baby Shoes',
    price: 4.45,
    description: '2020 Winter Warm Kids Baby Shoes for Boy Girl Toddler Boots PU Leather Waterproof Non-slip Plush Infant Snow Boots',
    ingredients:'ingredients',
  images:'https://s.zagranitsa.com/images/articles/4337/870x486/d504d61ee4c9723205fbd859e9dd7d9e.jpg?1472199509'
  }
  ,
     
  
  {
    id:25,
    category_id: 3,
  name: 'Healthy Fresh Smoothie ',
  price: 5.89,
  description: '1 pcs 30-60CM Cute Avocado Stuffed Plush Toy Soft Baby Doll Cartoon Fruit Pillow Sofa Cushion kids Girls Christmas birthday Gift',
  ingredients:'fresh fruit ice cream',
images:'https://hhp-blog.s3.amazonaws.com/2016/07/Smoothie-post.jpg'
}
,
     
  {
    id:26,
    category_id: 3,
  name: 'Lets Start Juice',
  price: 4.09,
  description: '28cm Cute Alpaca Plush Toy Baby Kids Appease Sleeping Pillow Doll Animal Lama Stuffed Soft Toy Birthday Gifts For Girls Children',
  ingredients:'fresh fruit',
images:'https://images11.cosmopolitan.ru/upload/img_cache/4c4/4c43c1641bf1bd57708d734d7340a96b_ce_1024x679x0x0_fitted_740x0.jpg'
}
,
     
  {
    id:27,
    category_id: 3,
  name: ' Strawberry Smoothie',
  price: 1.04,
  description: '2019 New 1Pcs Kids Toys Soft Interactive Baby Dolls Toy Mini Doll For girls and boys Dolls & Stuffed Toys Free Shipping',
  ingredients:'Ingredients',
images:'https://notefood.ru/wp-content/uploads/2017/02/08_smoothies_Posta-Magazine-600x375.jpg'
}
,
     
  {
    id:28,
    category_id: 3,
  name: 'Play Mini Simulation',
  price: 3.84,
  description: '1PCS Kawaii Pretend Play Mini Simulation Kitchen Toys Light-up & Sound Pink Household Appliances Toy for Kids Children Baby Girl',
  ingredients:'Coffee',
images:'https://i.pinimg.com/originals/03/86/19/0386196a57bc3066f397c5297c17574d.jpg'
}
,
     
  {
    id:29,
    category_id: 3,
  name: 'Mochaccino',
  price: 2.65,
  description: 'Baby Rattle Toys Lovely Cartoon Fun Chick Penguin Tumbler Brain Game for Boys Girls Birthday Gifts Kids Toys High Quality Fe25',
  ingredients:'capuccino',
images:'https://avatars.mds.yandex.net/get-pdb/199965/d1af1cef-305a-4ec1-9782-bcccdcb277d7/s375'
}
,
     
  {
    id:30,
    category_id: 3,
  name: 'Café Latte',
  price: 1.49,
  description: 'Cute Bunny Baby Toys Newborn Rattle Mobile Educational Toys For Boys Girls Soft Plush Toy with Musical Infant Toddler Bed Toys',
  ingredients:'ingredients is ',
images:'https://bipbap.ru/wp-content/uploads/2017/05/1355892162_vlyublennym-v-kofe-2.jpg'
}
,
     
  {
    id:31,
    category_id: 4,
  name: 'Strawberry Capcakes',
  price: 14.49,
  description: 'Disney princess children pu messenger bag girl Frozen Elsa shoulder bag Sofia handbag kid fashion shopping bag gift',
  ingredients:'ingredients',
images:'https://parade.com/wp-content/uploads/2014/06/editedStrawberryShortcakeBrownieCupcakes5BeanSalad-025.jpg'
}
,
     
  {
    id:32,
    category_id: 4,
  name: 'Chiffon Cake ',
  price: 11.49,
  description: 'New Baby Kindergarten Primary School Cartoon Travel Backpack Mickey Minnie Bowknot Plush Backpack Boys Girl Bowknot Bags 2-7 Yrs',
  ingredients:'ingredients',
images:'https://cleobuttera.com/wp-content/uploads/2019/06/kk-ice-cream-full-mood-720x720.jpg'
}
,
     
  {
    id:33,
    category_id: 4,
  name: 'Cinnamon Twist Doughnut',
  price: 5.31,
  description: 'Pudcoco Cute Kids Baby Girls Mini Backpack School bag Toddler Girls Sequin Rabbit Schoolbag Backpack Shoulder Bag Satchel Travel',
  ingredients:'ingredients',
images:'https://www.unreservedmedia.com/wp-content/uploads/2019/03/doghnuts-4.jpg'
}
,
     
  {
    id:34,
    category_id: 4,
  name: 'White Chocolate Raspberry Truffle',
  price: 1.33,
  description: '2019 Brand Cute Kid Baby Womens Coin Unicorn Wallet Card Purse Bag Keys Pouch Girls Mini Backpack Saddlebag',
  ingredients:'ingredients',
images:'https://www.dairyfoods.com/ext/resources/DF/2019/September/desserts/dfx0919-Outlook-img-open.jpg'
}
,
     
  {
    id:35,
    category_id: 4,
  name: 'Chocolate Cake with strawberry',
  price: 3.22,
  description: 'Our chefs have cranked their ever-popular flourless chocolate cake up several notches. How? With a heavenly ganache glaze. Moist, rich, and fudgy, this elegant dessert goes great with a scoop of vanilla ice cream.',
  ingredients:'Butter (Cream, Natural Flavorings), Semi-Sweet Chocolate (Cacao Beans, Pure Cane Sugar, Cocoa Butter, Sunflower Lecithin, Vanilla Beans), Egg Yolks, Sugar, Egg Whites, Unsweetened Chocolate (Cocoa Mass), Heavy Cream (Heavy Cream, Less Than 0.5% Of Mono And Diglycerides, Polysorbate 80, Carrageenan), Semisweet Chocolate (Sugar, Unsweetened Chocolate, Cocoa Butter, Unsweetened Chocolate [Processed With Alkali], Soy Lecithin [Emulsifier], Salt), White Chocolate Chips (Pure Cane Sugar, Cocoa Butter, Full Cream Milk, Lactose, Sunflower Lecithin, Vanilla Beans), Light Corn Syrup (High Fructose Corn Syrup, Salt, Vanilla), Vanilla Extract (Water, Ethyl Alcohol, Vanilla Bean Extractives, Sugar), Salt.',
images:'https://biancazapatka.com/wp-content/uploads/2019/06/best-vegan-chocolate-cake-recipe-cherry-frosting-ganache.jpg',
}
,
     
];
return(foods);
}
  constructor() { }
}
