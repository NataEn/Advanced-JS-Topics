function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line

  for (const obj of collection) {
    //if values in obj equal values in source=> return
    /**
     // let selectedObj = false;- this is what we did last time, 

     this is not goog since if we had more than one key-value pairs 
     one-is not equal but the other is, the second key-value pair will turn the 
      "selectedObj" to be "true" --> and will push the obj to the returned array->
      when it is not supposed to be pushed since it doesn't include the same 
      values as in the source.

      Solution->we will create an array with a boolean item for each key-value pairs in the source
      instead of just one  "selectedObj".  
     */
    const equalPairs = [];

    for (const key in source) {
      console.log("obj[key] === source[key]", obj[key], source[key]);
      if (obj[key] === source[key]) {
        equalPairs.push(true);
        // selectedObj = true;-->what we did last time
      } else {
        console.log("key not found or not equal");
        // selectedObj = false; --> what we did last time
        equalPairs.push(false);
        console.log("selectedObj", selectedObj);
      }
    }
    /**
     what wi did last time:
    if (selectedObj) {
          arr.push(obj);
        }
 */
    if (!equalPairs.includes(false)) {
      arr.push(obj);
    }
  }

  // Only change code above this line
  return arr;
}

// console.log(
//   whatIsInAName(
//     [
//       { first: "Romeo", last: "Montague" },
//       { first: "Mercutio", last: null },
//       { first: "Tybalt", last: "Capulet" },
//     ],
//     { last: "Capulet" }
//   )
// );
// console.log("expected", [{ first: "Tybalt", last: "Capulet" }]);
console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);

console.log("expected", [
  { apple: 1, bat: 2 },
  { apple: 1, bat: 2, cookie: 2 },
]);
