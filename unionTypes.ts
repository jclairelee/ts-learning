// // Union types allows us to have diferent type options
// let age: number | string | boolean = 21;
// age = 23;
// age = "25";
// age = true;
// console.log(age);

// type OptionOne = {
//   x: number;
//   y: number;
// };

// type OptionTwo = {
//   lat: number;
//   long: number;
// };

// let baseline: OptionOne | OptionTwo = { x: 2, y: 55 };
// baseline = { lat: 456.123, long: 12.3664 };
// console.log(baseline); //output: { lat: 456.123, long: 12.3664 }

// function print(age: number | string): void {
//   console.log(`You are ${age} years old`);
// }

// print(45); //output: You are 45 years old
// print("N/A"); //output: You are N/A years old

// function calculateSomething(numOne: number | string, numTwo: number) {
//   if (typeof numOne === "string") {
//     numOne = parseFloat(numOne);
//   }
//   return numOne * numTwo;
// }

// console.log(calculateSomething(4, 55)); // output: 220
// console.log(calculateSomething("20", 55)); // output: 1100
// console.log(calculateSomething("77", 55)); // output: 4235

// // var mixable: (number | boolean)[] = [1, true, 3, 4, false, 6]; ✅
// // var notMixable: number[] | boolean[] = [1, true, 3, 4, false, 6]; ❌
// // var notMixable: number[] | boolean[] = [1, 3, 4, 6]; ✅
// // console.log(mixable);
// // console.log(notMixable);

// const point: (OptionOne | OptionTwo)[] = [];
// point.push({ lat: 321.112, long: 45.555 });
// point.push({ x: 452, y: 55 });

// console.log(point);

// // Literal types
// let zero: 0 = 0;
// //a function with a literal+union type parameter
// let answerOptions = (answer: "yes" | "no" | "maybe") => {
//   return `the answer is ${answer}`;
// };

// // console.log(answerOptions("no"));✅
// // console.log(answerOptions("well"));❌

// let mood: "Happy" | "Sad" = "Happy";
// mood = "Sad";
// console.log(mood); // output: Sad
// type Month = "Jan" | "Feb" | "Mar" | "Apr" | "June" | "July";

// let current: Month = "Aug"; ❌
// let current: Month = "Jan"; ✅
// console.log(current);

// // Part 1. Create a variable called highScore that can be a number OR a boolean

// let highScore: number | boolean = true;
// console.log(highScore);

// highScore = 45;
// console.log(highScore);

// // Part 2. create an array called stuff.
// // It can be an array of nums or an array of strings.
// // It cannot be an array of nums and strings mixed together

// let stuff: number[] | string[];

// stuff = [4, 5, 6, 6];
// console.log(stuff);

// stuff = ["hey", "there"];
// console.log(stuff);

// // Part 3. Create a literal type called skillLevel
// // there are 4 allowed values: "beginner", "intermediate", "advanced", and "expert"

type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

let mySkill: SkillLevel = "beginner";
console.log(mySkill);

// Part 4. Create a type called SkiSchoolStudent
// name => string, age => num, sport => "ski" or "snowboard", level => a value from the SkillLevel type

type SkilSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

// Part 5. Define a type to represent an RGB color: r(num), g(num), and b(num)
// Define a type to represent an HSL color: h(num), s(num), and l(num)
type RGBcolor = {
  r: number;
  g: number;
  b: number;
};

type HSLcolor = {
  h: number;
  s: number;
  l: number;
};

//create an array called colors that can hold a mixture of RGB and HSL color types
let colors: (RGBcolor | HSLcolor)[];

//  part 6. write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format

// My solution:
const greet = (name: string | string[]): void => {
  if (Array.isArray(name)) {
    for (let i = 0; i < name.length; i++) {
      console.log(`Hello, ${name[i]}`);
    }
  } else {
    return console.log(`Hello, ${name}`);
  }
};

greet("Claire"); // output: Hello, Claire
greet(["Claire", "Rob", "Sam"]);
// output: Hello, Claire;
// Hello, Rob;
// Hello, Sam;

// Answer provided:
// const greet = (person: string | string[]): void => {
//   if (typeof person === "string") {
//     console.log(console.log(`Hello, ${person}`));
//   } else {
//     for (let p of person) {
//       console.log(`Hello, ${p}`);
//     }
//   }
// };
// greet("Claire");
// greet(["Claire", "Rob", "Sam"]);
