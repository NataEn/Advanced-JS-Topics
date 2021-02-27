// Here I am going to implement different native functions of JavaScript

// filter
/**
 * a predicate, to test each element of the array
 * @param {number} index - optional. index of element the function works upon
 * @param {Array} array-optional.the array object of the element
 * @return {Boolean} returnValue-value returned if the element passes the tested predicate.
 */
function callback(currentValue, index = 0, array) {
  return true;
}

/**
 * creates a new array with all elements that pass the test implemented by the provided function.
 * @param {function} callback - a predicate, to test each element of the array.
 * Return a value that coerces to true to keep the element, or to false otherwise.
 * @param {Array} array-the array the filter works upon
 * @param {any} thisArg-optional. Value to use as this when executing callback
 * @return {Array} returnValue-A new array with the elements that pass the test.
 * If no elements pass the test, an empty array will be returned.
 */
function myFilter(array, callback, thisArg = undefined) {
  const returnedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) returnedArray.push(array[i]);
  }
  return returnedArray;
}
