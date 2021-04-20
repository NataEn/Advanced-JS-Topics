//Promises, async await and Ajax calls.
//? prototypes and bind,call, apply.

//Promises:

/*JavaScript is single threaded, 
    meaning that two bits of script cannot run at the same time.
    Promise- 
    A promise can be:

    - fulfilled - The action relating to the promise succeeded
    - rejected - The action relating to the promise failed
    - pending - Hasn't fulfilled or rejected yet
    */
const asyncProcess = (i) => {
  const promise = new Promise(function (resolve, reject) {
    // do a thing, possibly async, then…

    if (/* everything turned out fine */ i === true) {
      resolve("Stuff worked!");
    } else {
      reject("It broke");
    }
  });
  return promise;
};

//Here's how you use that promise:
asyncProcess(true).then(
  function (result) {
    console.log(result); // "Stuff worked!"
  },
  function (err) {
    console.log(err); // Error: "It broke"
  }
);
//Here's how you use that promise:
asyncProcess(false).then(
  function (result) {
    console.log(result); // "Stuff worked!"
  },
  function (err) {
    console.log(err); // Error: "It broke"
  }
);

//async-await:

//is like:
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();

{
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 0);
  });

  async function awaitTiming() {
   
    await promise;
    
  }

  awaitTiming();
}

//AJAX- Asynchronous JavaScript and XML Calls
{
  async function showAvatar() {
    // read github user

    const name = "Bobby";
    let githubResponse = await fetch(`https://api.github.com/users/${name}`);
    let githubUser = await githubResponse.json();

    // show the avatar
    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.appendChild(img);

    // wait 3 seconds
    // await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    return githubUser;
  }

  showAvatar();
}
//prototypes:
function Point2D(x, y) {
  this.x = x;
  this.y = y;
}
/**
 * As Point2D function is declared,
 * a default property named prototype will be created for it (note that, in JavaScript,
 * a function is also an object). The prototype property is
 * an object which contains a constructor property and its value is Point2D function:
 */
console.log(Point2D.prototype.constructor);
/**
 * when you call Point2D with new keyword,
 * newly created objects will inherit all properties from Point2D.prototype
 * lets add a method to check that
 */
Point2D.prototype.move = function (dx, dy) {
  this.x += dx;
  this.y += dy;
};

const p1 = new Point2D(1, 2);
p1.move(3, 4);
console.log(p1.x); // 4
console.log(p1.y); // 6

//call bind apply
const Bob = {
  firstName: "Bob",
  lastName: "Dillen",
  getFullName() {
    return `${this.firstName}  ${this.lastName}`;
  },
};
const logName = function (method, line) {
  console.log("Logged: " + this.getFullName());
  console.log("I was using the: " + method + " on line " + line);
};
const ls = ["apply", 16];
logName.bind(Bob, "bind", 15)();
logName.apply(Bob, ls);
logName.call(Bob, ...ls);
const pini = {
  firstName: "Pini",
  lastName: "Hodadad",
};
const logPini = Bob.getFullName;
console.log(logPini.call(pini));
