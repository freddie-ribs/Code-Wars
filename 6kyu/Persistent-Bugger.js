// Problem link: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

// Solution
function persistence(num) {
  let count = 0
  while (num > 9) {
    let arr = Array.from(String(num))
    num = arr.reduce((prev, cur) => prev * cur,1)
    count += 1
  }
  return count
}