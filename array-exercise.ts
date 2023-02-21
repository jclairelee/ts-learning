// Q1. Create an empty array of numbers called "ages"
// const ages: number[] = [];
// const ages2: Array<number> = [];

//Q2. create an array variable called gameBoard that starts as an empty array
// It should be typed to hold a 2D array of strings

const gameBoard: string[][] = [];

//Q3. Create a product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
  name: string;
  price: number;
};

//Q4. write a function calle getTotal that accepts an array of product types
//it should return the sum of all the products' prices
let list = [
  {
    name: "cream",
    price: 5,
  },
  {
    name: "gum",
    price: 2,
  },
  {
    name: "donut",
    price: 3,
  },
];

function getTotal(products: Product[]): number {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  return total;
}

console.log(getTotal(list)); //output: 10
