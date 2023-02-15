// Part 1. Write a function that accepts a person's name and returns `one for <a person's name>, one for me`

function twoFer(name: string = "you"): string {
  return `one for ${name}, one for me`;
}

console.log(twoFer());
console.log(twoFer("Elton"));

// Part 2. Write a function that accepts a year and returns true or false depending on if the year is a leap year

const isLeapyear = (yr: number): boolean => {
  return (yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0;
};

console.log(isLeapyear(2012));
console.log(isLeapyear(2013));
console.log(isLeapyear(2020));
