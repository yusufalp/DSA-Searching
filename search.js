function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end, index);
  if (item == value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

// console.log(binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16))
//------------------
function search(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
};
let arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,]

arr = arr.sort((a, b) => a - b)

// console.log(search(arr, 32))
// console.log(binarySearch(arr, 32))

//------------------

function profit(arr) {
  let profitMade = 0;
  let index = 0;

  // take the first item and compare to the rest of the items
  // find the difference while comparing
  // assign it to the profitMade if bigger. 

  while (index !== arr.length) {
    for (let i = index; i < arr.length; i++) {
      let startPoint = arr[index];
      if (startPoint < arr[i]) {
        if (profitMade < (arr[i] - startPoint)) {
          profitMade = arr[i] - startPoint
        }
      }
    }
    index++
  }
  return profitMade
}

console.log(profit([128, 97, 121, 123, 98, 97, 105]))

//------------------