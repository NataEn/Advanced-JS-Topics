//q-1:
//given the next countries array
const countries = [
  [
    {
      name: "Toronto",
      population: "6.0 million",
    },
    {
      name: "Calgary",
      population: "1.2 million",
    },
    { name: "Regina", population: "200,000" },
  ],
  [
    {
      name: "Asmara",
      population: "960,000",
    },
    {
      name: "Mitsiwa",
      population: "53,000",
    },
    { name: "Assab", population: "20,000" },
  ],
];

//what would be printed to the console?
console.log(countries[0][1]);
console.log(countries[2]);
countries.push([{ name: "Tel-Aviv", population: "4.26 million" }]);
console.log(countries[2][0].name);
console.log(countries[1].slice(1, 2));

//q-2:
//what code will create this map object out of the array in the prevues question?
const countriesMap = {
  canada: [
    {
      name: "Toronto",
      population: "6.0 million",
    },
    {
      name: "Calgary",
      population: "1.2 million",
    },
    { name: "Regina", population: "200,000" },
  ],
  eritrea: [
    {
      name: "Asmara",
      population: "960,000",
    },
    {
      name: "Mitsiwa",
      population: "53,000",
    },
    { name: "Assab", population: "20,000" },
  ],
};
//corect solution:
function mapCountries(countries) {
  let countriesMap = {};
  const countriesNames = ["canada", "eritrea"];
  let counter = 0;
  for (let country of countriesNames) {
    countriesMap[country] = countries[counter];
    counter++;
  }
  return countriesMap;
}

// buggy solution
function mapCountries(countries) {
  let countriesMap = {};
  const countriesNames = ["canada", "eritrea"];
  let counter = 0;
  for (let country in countriesNames) {
    countriesMap[country] = countries[counter];
  }
  return countriesMap;
}

//q3-question about "this"
function Country() {}

//open question-1:
// a-implement array.map

const myArray = [1, 2, 3, 4];
function myMapFunction(arr, cb) {
  //implement code here
}
myMapFunction(myArray, callbackFunction);
//b-use implemented function for combining two arrays:
const myGroceries = [
  { name: "Apple", price: 10 },
  { name: "Tomato", price: 4.5 },
  { name: "Onion", price: "2.5" },
  { name: "Strawberry", price: 15 },
];
const groceriesImages = [
  "Apple.png",
  "Onion.png",
  "Strawberry.png",
  "Tomato.png",
];
