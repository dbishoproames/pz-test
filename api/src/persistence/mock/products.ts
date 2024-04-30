import { v4 as uuid4 } from 'uuid';
import { Product } from '../../model/product';

// create mock data store
export const productMap = new Map<string, Product>();

// populate mock data store with some mock data
let uuid = "";
productMap.set(uuid = uuid4(), {
  uuid: uuid,
  productName: "Brie",
  pricePerKilogram: 1.25,
  pictures: [
    'assets/images/TasmanianHeritage_DoubleBrie1.png'
  ],
  colour: 'cream'
});
productMap.set(uuid = uuid4(), {
  uuid: uuid,
  productName: "Blue",
  pricePerKilogram: 1.375,
  pictures: [
    'assets/images/Castello_CreamyBlue1.png',
    'assets/images/Castello_CreamyBlue2.png'
  ],
  colour: 'blue'
});
productMap.set(uuid = uuid4(), {
  uuid: uuid,
  productName: "Mozzarella",
  pricePerKilogram: 7,
  pictures: [
    'assets/images/Mozzarella2.jpeg'
  ],
  colour: 'white'
});
productMap.set(uuid = uuid4(), {
  uuid: uuid,
  productName: "Parmesan",
  pricePerKilogram: 999,
  pictures: [
    'assets/images/Parmesan1.jpeg',
    'assets/images/Parmesan2.jpeg',
    'assets/images/Parmesan3.jpeg',
    'assets/images/Parmesan4.png'
  ],
  colour: 'straw'
});
productMap.set(uuid = uuid4(), {
  uuid: uuid,
  productName: "Langres",
  pricePerKilogram: 0,
  pictures: [
    'assets/images/Langres1.jpeg'
  ],
  colour: 'orange'
});
/*
productMap.set(uuid = uuid4(), {
  uuid: uuid,
  productName: "Gorgonzola",
  pricePerKilogram: 3,
  pictures: [
    'assets/images/Gorgonzola1.jpeg',
    'assets/images/Gorgonzola2.png'
  ],
  colour: 'blue'
});
*/
