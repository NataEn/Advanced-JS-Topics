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
// Two to One
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
function longest(s1, s2) {
  const total_string = s1 + s2;
  return [...new Set(total_string.split(""))].sort().join("");
}
