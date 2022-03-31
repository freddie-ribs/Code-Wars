// Problem link: https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

// Solution

function reverseLetter(str) {
  return str.split("").reverse().map(ch => (/[a-z]/i).test(ch) ? ch : "").join("")
}