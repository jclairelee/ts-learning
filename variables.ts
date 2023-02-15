// let price: number = 15;
// price += 1;✅
// console.log(price);❌

// let food: string = "cupcake";
// food = 50; ❌
// food.toUpperCase();✅

// let completed: boolean = false;
// completed = true;
// completed = "true";❌
// completed = 0;❌

// // Ts infers types of variables
// let country = "Canada";
// country = "Frence";
// country = false;

// // Any type
// let thing: any = "phone"
// thing = 1;
// thing = true;
// thing.toUpperCase();

const colors = ["red", "green", "yellow", "pink", "blue"];

// When we don't annotate a variable's type
// AND we don't initialize it with a value, it has a type of "any"
let pickColor;

for (let color of colors) {
  if (color === "red") {
    pickColor = "red";
  }
}
pickColor();
pickColor = 1;
