/**
 * @description Linear search in an array is simply traversinga an array from start ro end to find the given element.
 */
const linearSearch = (arr, num) =>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]==num) return i;
    }
    return -1;
}
console.log("Element found at index", linearSearch([1.4,7,89,24,-12,63], 89));


/**
 * @abstract Time complexity of linear seacrh algo is : O(n) , as there is one for loop
 */