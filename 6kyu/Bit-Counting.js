// Problem link: https://www.codewars.com/kata/526571aae218b8ee490006f4
// Solution:

var countBits = function(n) {
  let str = n.toString(2)
  return str.split("").map(el => el === "1" ? "1": "").join("").length
};