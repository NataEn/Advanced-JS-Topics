const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
function countLetters(arr) {
  const totalWords = array.join("").toLocaleLowerCase();
  console.log(totalWords);
  const lettersObj = {};
  for (let i = 0; i < totalWords.length - 1; i++) {
    lettersObj[totalWords[i]] = 0;
    lettersObj[totalWords[i]] += 1;
  }
  return lettersObj;
}
console.log(JSON.stringify(countLetters(array)));
