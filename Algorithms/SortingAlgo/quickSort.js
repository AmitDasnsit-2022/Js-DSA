/**
 * @description Refrenece Link - @link https://www.doabledanny.com/quick-sort-in-javascript
 * Quick Sort one of the most efficient sorting algorithms. However, it is also one of the less intuitive sorting algorithms
 * Quick Sort is an in-place, unstable, and comparison-type algorithm.
 *
 * What’s an in-place algorithm? Here’s Wikipedia’s answer: “an algorithm which transforms input using no auxiliary data structure.
 * However, a small amount of extra storage space is allowed for auxiliary variables.”
 * it usually just means that the input is overwritten (via swapping or replacement) by the output as the algorithm executes.
 * The advantage of in-place algorithms is that they take up less space in memory.
 *
 * Unstable means that two elements with equal values can appear in different order in the sorted output compared with their
 * order in the unsorted input array.
 *
 * comparison sort is a sorting algorithm that only reads the list of elements through a single abstract comparison operation
 * (usually a “less than” or “equal to”) that determines which of the two elements should occur first in the final sorted output array.
 */

const quickSort = (arr) => {
  let pivotRandom = arr[Math.floor(Math.random() * arr.length)]; // The random pivot selection helps to mitigate the worst-case time complexity scenarios, //providing good average-case performance
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];
  if (arr.length < 2) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};
console.log(quickSort([-1, 6, 1, 2, -7, 3, 4]));

/**
 * @Timecomplexity Time complexity of this approach for quick sort when takin pivot as the last elemet is : Worst case O(n^2), average case : O(nlogn)
 */

// When pivot taken as starting same time complexity is bad i.e O(n^2)

/**
 * @description But when pivot taken as middlle element then time complexity is quite better than other approach
 */
