/**cookies vs local storage vs session storage */
localStorage.setItem("fruits", ["apple", "orange", "lemon"]);
console.log(localStorage.getItem("fruits"));

sessionStorage.setItem("numbers", [1, 33, 000, 54]);
sessionStorage.setItem("numbers", [1, 33, 898, 54]);

console.log(sessionStorage.getItem("numbers"));
document.cookie = "hello=true";
console.log(document.cookie);
