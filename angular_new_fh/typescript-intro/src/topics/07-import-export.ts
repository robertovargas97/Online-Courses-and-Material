import { calculateTax, Product } from "./04-destructuring";

const shoppingCart: Product[] = [
  {
    description: "Nokia",
    price: 100,
  },
  {
    description: "Ipad",
    price: 200,
  },
];

const [total, tax] = calculateTax({ tax: 0.13, products: shoppingCart });

console.log({ total });
console.log({ tax });

// console.log(shoppingCart);
