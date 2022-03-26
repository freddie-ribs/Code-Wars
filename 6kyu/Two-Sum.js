// Problem link: https://www.codewars.com/kata/52c31f8e6605bcc646000082

// Solution:

function twoSum(numbers, target) {
  let l = 0
  let r = numbers.length - 1
  while (l < r) {
    let sum = numbers[l] + numbers[r]
    if (sum === target) {
      return [l, r]
    } else if (sum < target) {
      l += 1
    } else {
      r -= 1
    }
  }
  return []
}