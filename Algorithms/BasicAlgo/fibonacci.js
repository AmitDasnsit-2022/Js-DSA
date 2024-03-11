/**
 * @Description fibonacci series function
 */
const fibonacci = (n) => {
  const fibArr = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
  }
  return fibArr;
};
console.log("Fibonacci series", fibonacci(8));
