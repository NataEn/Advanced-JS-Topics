//importing from a file to main.js

// example 1
//in file:
//step 1: executing from the exports object:

module.exports = {
  log: console.log("in imported file"),
  logFunc: () => console.log("from second file logfunc"),
};

//in main.js:

const second = require("./second");
console.log("in mainjs file");
second.log; ////this is not being executed because its returning undefined

/* in terminal:
node main.js
>> 'in imported file' ///from 'const second'
>> 'in mainjs file'   /// from 'console.log("in mainjs file");'*/

//explanation: when importing from a file, the entire content of it will be read and executed. this is why importing the second file will automatically
//execute the 'log' field in the module.exports object.

//step 2: executing from a function:

//in main.js:
const second = require("./second");
console.log("in mainjs file");
second.log; /// as we saw this does not do anything since undefined does nothing...
second.logfunc();

/* in terminal: node main.js
>> from second file
>> in mainjs file
>> from second file logfunc

conclusion: always save exported data in functions!!! so thing will not be executed at the import line (unless this is what you intensionally want)
*/
