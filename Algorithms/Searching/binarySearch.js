/**
 * @description This method is used to find element using divide and conquer approach in an sorted array.
 */

const binarySearch = (arr, elem) => {
  arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    // console.log("Initail middle", middle);
    if (arr[middle] === elem) {
      return middle;
    } else if (elem > arr[middle]) {
      start = middle + 1;
      //   console.log("Initial start", start);
    } else {
      end = middle - 1;
      //   console.log("End", end);
    }
    // console.log("start", start, end);
  }
  return -1;
};
console.log(
  "Index of the found element is : ",
  binarySearch([1, 2, 5, 8, 9, 10, 11, 12, 15, 18, 19, 20, 4, 3], 15)
);

/**
 * @description Recursive binary search
 */

const recuriveBinarySearch = (arr, elem) => {
  return search(arr, elem, 0, arr.length - 1);
};
const search = (arr, elem, start, end) => {
  let middleIndex = Math.floor((start + end) / 2);
  if (start > end) return -1;
  else if (arr[middleIndex] == elem) return middleIndex;
  else if (elem > arr[middleIndex]) {
    // start = middleIndex+1;
    return search(arr, elem, middleIndex + 1, end);
  } else {
    // end = middleIndex-1;
    return search(arr, elem, start, middleIndex - 1);
  }
};

console.log(
  "Index of the given element is : ",
  recuriveBinarySearch([1, 2, 34, 56, 85, 96], 85)
);

/**
 * @abstract Time complexity of binary search is : O(logn) , as argument size is becomes half with every iteration
 */