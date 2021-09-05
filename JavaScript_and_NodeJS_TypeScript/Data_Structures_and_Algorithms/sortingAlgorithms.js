//bubble sorting - the worst kind, O(n^2)
//popular since it is simple conceptually
function bubbleSort(myArray) {
  let sortedArr = [...myArray];
  let len = sortedArr.length;
  do {
    for (let index = 0; index < myArray.length - 1; index++) {
      if (myArray[index] > sortedArr[index + 1]) {
        sortedArr = swap(sortedArr, index, index + 1);
      }
    }
  } while (len--);
  return sortedArr;
}

function swap(arr, indexA, indexB) {
  const swappedArr = [...arr];
  swappedArr[indexA] = arr[indexB];
  swappedArr[indexB] = arr[indexA];
  return swappedArr;
}
///this doesn't run well!!

const array = [5, 3, 2, 3, 8, 6, 5];

console.log(bubbleSort(array));
