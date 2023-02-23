// 1) Typles: super rigid arrays that has fixed length and particular order with specific types

// let tuple: [number, string];
// tuple = [10, "this is new!"]; ✅
// tuple = ["this is new!", 10]; ❌
// console.log(tuple);

// const stuff: string[] = ["hello", "snow", "rain"];
// const stuff: (string | number)[] = [0, 5, "hello", "snow", "rain"];
// console.log(stuff);

// Mixed types in a specific order
// const color: [number, number, string, boolean] = [45, "554", 223, 444, true]; ❌
// const color: [number, number, string, boolean] = [45, 223, "444", true];✅

//Once tuple is created, it doesnt follow the ridgd pattern anymore.
// color.push(456);✅ output: [ 45, 223, '444', true, 456 ]
// color.push("hello");✅ output: [ 45, 223, '444', true, 456, 'hello' ]
// color.pop();✅ output: [ 45, 223, '444', true ]
// console.log(color);

type HTTP_res = [number, string];

const goodRes: HTTP_res = [200, "ok"];

//It's an array of HTTP response tuples.
// The parent array is NOT tuples. Each element of the parent array follows that pattern.
const res: HTTP_res[] = [
  [404, "Not Found!"],
  [200, "Ok"],
];

console.log(goodRes);
console.log(res);

// 2) Enums: a set of named constants.
// If you set default value, it counts from the value that was decleared. otherwise, it starts from 0.
// There are numeric enums, literal enums, and heterogeneous enums
enum brands {
  ADIDAS, // 0
  PUMA = 55, // 55
  NIKE, // 56
  NEWBALANCE, // 57
}

const myShoes = brands.ADIDAS;
// const myShoes = brands.NIKE;

console.log(myShoes);

enum OrderStatus {
  PENDING,
  SHIPPERED,
  DELIEVED,
  REQUESTED,
}

const order = {
  orderNumber: 456123,
  status: 0 /* OrderStatus.PENDING */,
};

const order2 = {
  orderNumber: 789456,
  status: 2 /* OrderStatus.DELIVERED */,
};

// use keyof typeof instead of keyof.
