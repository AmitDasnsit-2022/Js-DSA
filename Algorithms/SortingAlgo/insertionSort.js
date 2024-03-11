/**
 * @description Insertion Sort is a stable, in-place, and comparison-type algorithm
 */
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    console.log("Initial current :", current);
    let j;
    console.log("Current j: ", j);
    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      console.log("In loop j: ", j, arr[j], arr[j + 1]);
      arr[j + 1] = arr[j];
      console.log("In loop second j: ", j, arr[j], arr[j + 1]);
    }

    console.log("After loop j: ", j, arr[j], arr[j + 1]);
    arr[j + 1] = current;
    console.log("After current :", current);
    console.log("After loop second: ", j, arr[j], arr[j + 1]);
    console.log("Array after every interaion and j loop", arr);
  }
  return arr;
};

console.log(insertionSort([4, 2, 3, 5, 1, 6]));

/**
 * @implements Complete process impliementation for this algo loop iteration
 */

// Initial current : 2
// Current j:  undefined
// In loop j:  0 4 2
// In loop second j:  0 4 4
// After loop j:  -1 undefined 4
// After current : 2
// After loop second:  -1 undefined 2
// Array after every interaion and j loop [ 2, 4, 3, 5, 1, 6 ]
// Initial current : 3
// Current j:  undefined
// In loop j:  1 4 3
// In loop second j:  1 4 4
// After loop j:  0 2 4
// After current : 3
// After loop second:  0 2 3
// Array after every interaion and j loop [ 2, 3, 4, 5, 1, 6 ]
// Initial current : 5
// Current j:  undefined
// After loop j:  2 4 5
// After current : 5
// After loop second:  2 4 5
// Array after every interaion and j loop [ 2, 3, 4, 5, 1, 6 ]
// Initial current : 1
// Current j:  undefined
// In loop j:  3 5 1
// In loop second j:  3 5 5
// In loop j:  2 4 5
// In loop second j:  2 4 4
// In loop j:  1 3 4
// In loop second j:  1 3 3
// In loop j:  0 2 3
// In loop second j:  0 2 2
// After loop j:  -1 undefined 2
// After current : 1
// After loop second:  -1 undefined 1
// Array after every interaion and j loop [ 1, 2, 3, 4, 5, 6 ]
// Initial current : 6
// Current j:  undefined
// After loop j:  4 5 6
// After current : 6
// After loop second:  4 5 6
// Array after every interaion and j loop [ 1, 2, 3, 4, 5, 6 ]
// [ 1, 2, 3, 4, 5, 6 ]

/**
 * @description Time complexity of the algorithm
 */
// Worst case time complexity of Insertion Sort
// If the array is in “random” order or in reverse, Insertion Sort will run at O(n^2) – quadratic time
// Insertion Sort is done in-place, meaning that it requires no auxiliary data structures. Therefore, the space complexity of Insertion Sort is O(1) – constant space.
// To summarise, Insertion Sort is good for:

// Small arrays
// Any size, almost sorted arrays
// Sorting data in real-time