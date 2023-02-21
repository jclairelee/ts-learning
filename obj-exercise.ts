// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly

type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};

const dune: Movie = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villeneuve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};
//Write a function calle getProfit tgar accepts a single Movie object
// It should return the movite's worldwide gross minus its budget

// solution 1.
function getProfit1(movie: Movie): number {
  return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}

// solution 2.
function getProfit2(movie: Movie): number {
  const { grossWorldwide, budget } = movie.boxOffice;
  return grossWorldwide - budget;
}

// solution 3.
function getProfit3({ boxOffice: { grossWorldwide, budget } }: Movie): number {
  return grossWorldwide - budget;
}

console.log(getProfit1(dune));
console.log(getProfit1(cats));
console.log(getProfit2(dune));
console.log(getProfit2(cats));
console.log(getProfit3(dune));
console.log(getProfit3(cats));
