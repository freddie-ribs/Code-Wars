// Problem link: https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

// Solution:

function factorial(n) {  
  if (n < 0 || n > 12) {
    throw new RangeError()
  }
  let out = 1
  let i = 1
  while (i <= n) {
    out *= i
    i++
  }
  return out
}