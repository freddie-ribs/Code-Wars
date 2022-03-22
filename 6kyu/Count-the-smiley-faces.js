// Problem link: https://www.codewars.com/kata/583203e6eb35d7980400002a

// Solution
function countSmileys(arr) {
  return arr.filter(ch => ch.match(/(:|;)(-|~)?(\)|D)/)).length
}