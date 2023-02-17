const printNote = (note: { title: string; text: string }) => {
  console.log(note);
  console.log(note.title);
  console.log(note.text);
};

printNote({ title: "Good Morning", text: "Bye" });
// output>>
// { title: 'Good Morning', text: 'Bye' }
// Good Morning
// Bye

// a pattern of object type can be set like this
const baseline: { x: number; y: number } = { x: 45 }; ❌ didn't follow the declared pattern
const base: { x: number; y: number } = { x: 45, y: 2 };

// return type annptation of an object literal
function randomBase(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

console.log(randomBase());


printNote({ title: "Hi", text: "Byeeee!", id: 456 }); ❌ error occurs due to the extra property of id
const addInfo = {
  title: "wow",
  text: "great!",
  id: 456,
};

printNote(addInfo); ✅ this works. It only prints out the required two properties
// output>>
// wow
// great!

function randomBase(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

console.log(randomBase());

// Type aliases
type Base = {
  x: number;
  y: number;
};

function randomLocation(): Base {
  return { x: Math.random(), y: Math.random() };
}

console.log(`Random Location>>>>`);
console.log(randomLocation());

function randomLocationDouble(two: Base): Base {
  return { x: two.x * 2, y: two.y * 4 };
}

type Num = number;
let age: Num = 565;

//Nested Objects

type Book = {
  title: string;
  author: string;
  yearPublish: number;
  review: {
    writer: string;
    title: string;
    comment: string;
    id: number;
  };
};
function recommendBooks(book: Book): number {
  return book.yearPublish * 2;
}✅

function printBooks(book: Book): void ❌{
  return `${book.title}`;
}

const bookone = {
  title: "how to write",
  author: "you are the best author",
  yearPublish: 2002,
  review: {
    writer: "me",
    title: "this is helpful",
    comment: "gooooood!",
    id: 42,
  },
};
console.log(recommendBooks(bookone));✅
console.log(printBooks(bookone));❌


//this prints out 
function printBooks(book: Book): void {
  console.log(`${book.title} - ${book.author}`);
}
printBooks(bookone);✅


//OPTIONAL PROPERTIES
type Point = {
  a: number;
  b: number;
  c?: number;
};


const myPoint: Point = { a: 1, b: 55};❌ // ERR: missing c property 
const myPoint: Point = { a: 1, b: 55 }; ✅ // just need to add '?' after c

// readonly modifier
type Client = {
  readonly id: number;
  clientName: string;
};
const client: Client = {
  id: 12365478,
  clientName: "Mina",
};

console.log(client.id);✅
client.id = 45;❌

//Combine Two Type Aliases
type Solidity = {
  solidity: number;
};
type Color = {
  color: string;
};
type Meterial = {
  meterial: string;
};

type CombinedInfo = Solidity & Color;

const goodContainer: CombinedInfo = {
  solidity: 5,
  color: "blue",
};
console.log(goodContainer);


//Add extra type object 
type Cat = {
  weight: number;
};
type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const combineAll: CatDog = {
  weight: 55,
  breed: "Husky",
  age: 4,
};

console.log(combineAll);✅
