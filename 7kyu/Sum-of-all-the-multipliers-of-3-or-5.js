// Problem link: https://www.codewars.com/kata/57f36495c0bb25ecf50000e7

// Solution:

function findSum(n) {
  let result = 0
  for (let i = 0; i <= n; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) result += i
  }
  return result
}
