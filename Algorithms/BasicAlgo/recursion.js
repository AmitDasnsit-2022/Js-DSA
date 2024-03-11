/**
 * @description Fibonacci sequence using recursion
 */
const recursivefibonacci = (n) => {
  if (n < 2) {
    return n;
  } // Base case to avoid infinite recursion
  return recursivefibonacci(n - 1) + recursivefibonacci(n - 2); // If there is no end point the maximum call stack size exceeded error comes in.
};
console.log("Fibonacci value: ",recursivefibonacci(8));

/**
 * @description Recursive Fibonacci sequence
 */
const recursiveFactorial = (n) => {
  if (n == 1) return 1;            //Base case to avoid infinite recursion
  return recursiveFactorial(n - 1) * n;
};

console.log("Factorial value: ",recursiveFactorial(5));
