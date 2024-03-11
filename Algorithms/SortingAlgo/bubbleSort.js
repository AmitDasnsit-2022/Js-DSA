/**
 * @description Bubble sort algorithm is a simple sorting technique that compares two adjacent elements in an array and swaps
 * them if they are in the wrong order. It keeps repeating this process until the array is sorted.
 */

const bubbleSort = (arr) => {
  let swapped;
  console.log(arr);
  do {
    swapped = false;
    for (let i = 0; i < arr.length ; i++) {
      if (arr[i] > arr[i + 1]) {
        let item = arr[i]; //swapping elements
        arr[i] = arr[i + 1];
        arr[i + 1] = item;
        swapped = true;
      }
    }

  } while (swapped);

  return arr;
};

console.log(bubbleSort([12, 34, -23, 76, 13, 14]));

/**
 * @summary Time complexity of bubble sort is : O(n^2) as there is a nested loop.It is good for short length arrays and almost sorted array
 * However, bubble sort can be useful for small arrays or in cases where the array is nearly sorted, as it has a simple implementation and requires only constant space.
 */
