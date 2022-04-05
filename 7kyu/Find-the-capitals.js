// Problem link: https://www.codewars.com/kata/539ee3b6757843632d00026b

// Solution:

var capitals = function (word) {
  let arr = word.split("").map((el, i) => el === el.toUpperCase() ? i : null)
  return arr.filter(el => el !== null)
};