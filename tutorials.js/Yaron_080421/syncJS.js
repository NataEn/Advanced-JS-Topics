console.log("starting to read code");
function myFunc_1() {
  console.log("executing myFunc_1..");
}
myFunc_1();
const myConst = [1, 2, 3, 4];
console.log(`myConst: ${myConst}`);
function myFunc_2() {
  console.log("executing myFunc_2..");
}
myFunc_2();
console.log("end of code");

/// question-1

const compareToTen = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(num + " is greater than 10, success!");
    } else {
      reject(num + " is less than 10, error!");
    }
  });
};

compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// async-await

const getCompared = async () => {
  try {
    const result = await compareToTen(15);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
getCompared();
const getCompared = async () => {
  try {
    const result = await compareToTen(8);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
getCompared();

// question 2
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    let capsArray = array.map((word) => {
      if (typeof word === "string") {
        return word.toUpperCase();
      } else {
        reject("Error: Not all items in the array are strings!");
      }
    });
    resolve(capsArray);
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    if (array) {
      array.forEach((el) => {
        if (typeof el !== "string") {
          reject("Error: Not all items in the array are strings!");
        }
      });
      resolve(array.sort());
    } else {
      reject("Error: Something went wrong with sorting words.");
    }
  });
};

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//question 3
const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });

const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Pinchas Hodadad",
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};
getIDs()
  .then((IDs) => {
    console.log(IDs);
    return getRecipe(IDs[2]);
  })
  .then((recipe) => {
    console.log(recipe);
  })
  .catch((error) => {
    console.log("It is an error!");
  });

const retrieveRecipe = async () => {
  try {
    const ids = await getIDs();
    const recipes = await getRecipe(ids[2]);
    console.log(recipes);
  } catch (err) {
    console.log("fetch Failed", err);
  }
};

retrieveRecipe();
