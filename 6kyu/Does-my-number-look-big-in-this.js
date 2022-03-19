// Problem link:https://www.codewars.com/kata/5287e858c6b5a9678200083c

// Solution
function narcissistic(value) {
  function digits(value) {
    let i = 0
    while (value > 0) {
      value = Math.floor((value / 10))
      i += 1
    }
    return i
  }
  
  let sum = 0
  let i = digits(value)
  let ogValue = value
  
  while (value > 0) {
    let num = value % 10
    value = Math.floor((value / 10))
    sum += Math.pow(num, i)
  }
  
  return sum === ogValue
}