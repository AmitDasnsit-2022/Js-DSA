/**
 * @description A set is a collection of items that are unique i.e. no element can be repeated. Set in ES6 are ordered: elements of the set can be iterated in the insertion order.
 * The set can store any type of value whether primitive or objects.
 */

// const set = new Set();
// console.log(set);  //outpt : Set(0) {}

const set = new Set([1, 2, 3, 4, 5, 8]);
set.add("SetsValue");
for (let item of set) {
  console.log(item);
}
// console.log(set);

console.log(set.delete(9)); //false
console.log(set); //didnt effect as 9 is not there
set.clear();
console.log(set);