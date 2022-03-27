// Problem link: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

// Solution: 
function reverseWords(str) {
  return str.split(" ").map(w => w.split("").reverse().join("")).join(" ")
}