// Problem link: https://www.codewars.com/kata/58ba6fece3614ba7c200017f

// Solution:

function palindrome(num) { 
  if(typeof(num) !== "number" || num < 0) {
    return "Not valid"
  }
  let str = String(num)
  let l = 0
  let r = str.length - 1
  
  while(l < r) {
    if (str[l] !== str[r]) {
      return false
    }
    l += 1
    r -= 1
  }
  return true
} 