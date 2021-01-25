// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

function findUniq(arr) {
  const sortedArr = arr.sort();
  if (sortedArr[0] === sortedArr[1]) {
    return sortedArr[sortedArr.length - 1];
  } else {
    return sortedArr[0];
  }
}
// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 3 strings.
function findUniqStr(arr) {
  for (let i = 0; i < arr.length - 3; i += 3) {
    const firstLetter = arr[i].toLowerCase().split().sort()[0];
    const secondLetter = arr[i + 1].toLowerCase().split().sort()[0];
    const thirdLetter = arr[i + 2].toLowerCase().split().sort()[0];
    const objArr = [
      { letter: firstLetter, index: i },
      { letter: secondLetter, index: i + 1 },
      { letter: thirdLetter, index: 1 + 2 },
    ];
    objArr.sort((a, b) => (a.letter !== b.letter ? a : b));
    if (
      objArr[0].letter !== objArr[2].letter &&
      objArr[0].letter === objArr[1].letter
    ) {
      return arr[objArr[2].index];
    } else if (
      objArr[0].letter !== objArr[2].letter &&
      objArr[1].letter === objArr[2].letter
    ) {
      return arr[objArr[0].index];
    }
  }
}
["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"];
