// Interface: similar to type aliases
// Interfaces can only describe the "shape" of objects

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string; //optional
  sayHi: () => string; //this method means takes 0 argument and returns string
}

const student: Person = {
  first: "Christoper",
  last: "Hardy",
  nickname: "Chris",
  id: 456,
  sayHi: () => {
    return "Hi there";
  },
};
console.log(student);
// output: {
//   first: 'Christoper',
//   last: 'Hardy',
//   nickname: 'Chris',
//   id: 456,
//   sayHi: [Function: sayHi]
// }

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const cooper: Dog = {
  name: "cooper",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "Woof! Woof!";
  },
};
console.log(cooper);

interface Owner {
  ownerName: string;
  ownerContact: number;
  ownerEmail: string;
}

interface ServiceDog extends Dog, Owner {
  job: "guide dog" | "detection dog";
}

// const Riley: ServiceDog = {
//   name: "riley",
// }; ❌ // Type '{ name: string; }' is missing the following properties from type 'ServiceDog': job, age, breed, bark

const riley: ServiceDog = {
  name: "Riley",
  age: 1,
  breed: "Siberian Husky",
  bark() {
    return "Bark!";
  },
  job: "detection dog",
  ownerName: "claire",
  ownerContact: 2502222222,
  ownerEmail: "jjjjjjj@gmail.com",
};

console.log(riley);
// output: {
//   name: 'Riley',
//   age: 1,
//   breed: 'Siberian Husky',
//   bark: [Function: bark],
//   job: 'detection dog',
//   ownerName: 'claire',
//   ownerContact: 2502222222,
//   ownerEmail: 'jjjjjjj@gmail.com'
// }

// interface vs type: type alias cannot be editted later on while interface can be re-declared.
// interface can extend other interface while type alias can use "&" to add
