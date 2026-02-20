// Objetos

interface Details {
  author: string;
  year: number;
}

interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Roberteque",
    year: 1997,
  },
};

const { audioVolume: myVolume, details } = audioPlayer;
const { author } = details;

//  Arreglos
const dbz: string[] = ["Goku", "Broly", "Vegeta"];

const [goku] = dbz;
const [, broly] = dbz;
const [, , vegeta] = dbz;

// console.log(myVolume);
// console.log(author);

// console.log(goku);
// console.log(broly);
// console.log(vegeta);

// Funciones

export interface Product {
  description: string;
  price: number;
}
const phone: Product = {
  description: "Nokia",
  price: 20,
};

const tablet: Product = {
  description: "iPad 1",
  price: 200,
};

interface TaxOptions {
  tax: number;
  products: Product[];
}

// function calculateTax({ tax, products }: TaxOptions): [number, number] {
function calculateTax(options: TaxOptions): [number, number] {
  const { tax, products } = options;
  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, calculatedTax] = calculateTax({ products: shoppingCart, tax });

console.log({ Total: total });
console.log({ Tax: calculatedTax });
