/**
 * @description The array will be divided into half until it cannot be divided. This means that if the array is completely divided and cannot be further divided,
 * the dividing will be stopped. We divide the arrays into halves and implement merge sort on each of the halves.
 * This algorithm is a process of taking two smaller divided arrays and combining them to larger array.
 */

const mergSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const leftSubArr = arr.slice(0, middle);
  console.log("Intial left divided sub arr in mergerSort:", leftSubArr);
  const rightSubArr = arr.slice(middle);
  console.log("Intial right divided sub arr in mergerSort:", rightSubArr);

  return merge(mergSort(leftSubArr), mergSort(rightSubArr));
};

const merge = (leftSubArr, rightSubArr) => {
  const sortedArr = [];
  console.log("Initial sorterArr:", sortedArr);
  while (leftSubArr.length && rightSubArr.length) {
    if (leftSubArr[0] < rightSubArr[0]) {
      console.log("leftSubArr under merge 1:", leftSubArr);
      sortedArr.push(leftSubArr.shift());
      console.log("leftSubArr sorterArr:", sortedArr);
      console.log("leftSubArr  under merge 2:", leftSubArr);
    } else {
      console.log("rightSubArr  under merge 1:", rightSubArr);
      sortedArr.push(rightSubArr.shift());
      console.log("rightSubArr sorterArr:", sortedArr);
      console.log("rightSubArr  under merge 2:", rightSubArr);
    }
  }
  console.log("Final sorterArr:", sortedArr);
  console.log("Final sorterArr with spread:", [...sortedArr]);
  console.log("Final leftSubArr with spread:", [...leftSubArr]);
  console.log("Final rightSubArr with spread:", [...rightSubArr]);
  console.log("Final array after each loop :", [...sortedArr, ...leftSubArr,...rightSubArr]);
  return [...sortedArr, ...leftSubArr, ...rightSubArr];
};
const arr = [2, 5, 6, -1, -3, -6];

console.log(mergSort(arr));

/**
 * @implimentation debugging consoles
 */

// Intial left divided sub arr in mergerSort: [ 2, 5, 6 ]
// Intial right divided sub arr in mergerSort: [ -1, -3, -6 ]
// Intial left divided sub arr in mergerSort: [ 2 ]
// Intial right divided sub arr in mergerSort: [ 5, 6 ]
// Intial left divided sub arr in mergerSort: [ 5 ]
// Intial right divided sub arr in mergerSort: [ 6 ]
// Initial sorterArr: []
// leftSubArr under merge 1: [ 5 ]
// leftSubArr sorterArr: [ 5 ]
// leftSubArr  under merge 2: []
// Final sorterArr: [ 5 ]
// Final sorterArr with spread: [ 5 ]
// Final leftSubArr with spread: []
// Final rightSubArr with spread: [ 6 ]
// Final array after each loop : [ 5, 6 ]
// Initial sorterArr: []
// leftSubArr under merge 1: [ 2 ]
// leftSubArr sorterArr: [ 2 ]
// leftSubArr  under merge 2: []
// Final sorterArr: [ 2 ]
// Final sorterArr with spread: [ 2 ]
// Final leftSubArr with spread: []
// Final rightSubArr with spread: [ 5, 6 ]
// Final array after each loop : [ 2, 5, 6 ]
// Intial left divided sub arr in mergerSort: [ -1 ]
// Intial right divided sub arr in mergerSort: [ -3, -6 ]
// Intial left divided sub arr in mergerSort: [ -3 ]
// Intial right divided sub arr in mergerSort: [ -6 ]
// Initial sorterArr: []
// rightSubArr  under merge 1: [ -6 ]
// rightSubArr sorterArr: [ -6 ]
// rightSubArr  under merge 2: []
// Final sorterArr: [ -6 ]
// Final sorterArr with spread: [ -6 ]
// Final leftSubArr with spread: [ -3 ]
// Final rightSubArr with spread: []
// Final array after each loop : [ -6, -3 ]
// Initial sorterArr: []
// rightSubArr  under merge 1: [ -6, -3 ]
// rightSubArr sorterArr: [ -6 ]
// rightSubArr  under merge 2: [ -3 ]
// rightSubArr  under merge 1: [ -3 ]
// rightSubArr sorterArr: [ -6, -3 ]
// rightSubArr  under merge 2: []
// Final sorterArr: [ -6, -3 ]
// Final sorterArr with spread: [ -6, -3 ]
// Final leftSubArr with spread: [ -1 ]
// Final rightSubArr with spread: []
// Final array after each loop : [ -6, -3, -1 ]
// Initial sorterArr: []
// rightSubArr  under merge 1: [ -6, -3, -1 ]
// rightSubArr sorterArr: [ -6 ]
// rightSubArr  under merge 2: [ -3, -1 ]
// rightSubArr  under merge 1: [ -3, -1 ]
// rightSubArr sorterArr: [ -6, -3 ]
// rightSubArr  under merge 2: [ -1 ]
// rightSubArr  under merge 1: [ -1 ]
// rightSubArr sorterArr: [ -6, -3, -1 ]
// rightSubArr  under merge 2: []
// Final sorterArr: [ -6, -3, -1 ]
// Final sorterArr with spread: [ -6, -3, -1 ]
// Final leftSubArr with spread: [ 2, 5, 6 ]
// Final rightSubArr with spread: []
// Final array after each loop : [ -6, -3, -1, 2, 5, 6 ]
// [ -6, -3, -1, 2, 5, 6 ]