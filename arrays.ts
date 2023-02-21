// it only allows the specific type of data that was initialized with [].
// empty array doesnt take any data inside.

// 1. Using Brackets:
const activeUsers: string[] = [];
activeUsers.push("steven");

console.log(activeUsers);
// output: [ 'steven' ]

const age: number[] = [24, 33, 22, 1];

// 2. alternate syntax:
const names: Array<string> = ["hello", "world"];
const ages: Array<number> = [22, 24, 36, 89];
names[1] = "claire";
console.log(names);

const bools: boolean[] = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 9 });
coords.push({ x: 55, y: 15 });
coords.push({ x: 5, y: 1 });
console.log(coords);

//2D array
const board: string[][] = [
  ["x", "o", "x"],
  ["x", "o", "x"],
  ["x", "o", "x"],
];

console.log(board);

//3D array
const demo: number[][][] = [[[1]]];
console.log(demo);
