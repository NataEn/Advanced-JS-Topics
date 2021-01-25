// The function must return the truncated version of the given string up to the given limit followed or concatenated by "..." if the result is shorter than the original. Return the same string if nothing was truncated.

// Example:

// solution('Testing String', 3) --> 'Tes...'
// solution('Testing String', 8) --> 'Testing ...'
// solution('Test', 8)           --> 'Test'

function solution(string, limit) {
  if (string.length && string.length > limit) {
    const newString = string.slice(0, limit);
    return newString + "...";
  } else {
    return string;
  }
}
function highAndLow(numbers) {
  const stringArr = numbers.split(" ");
  const min = Math.min(...stringArr);
  const max = Math.max(...stringArr);
  return `${max} ${min}`;
}
