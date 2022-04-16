// Problem link: https://www.codewars.com/kata/52f3149496de55aded000410

// Solution:
function sumDigits(number) {
  return String(Math.abs(number)).split("").reduce((p, c) => Number(p) + Number(c), 0)
}