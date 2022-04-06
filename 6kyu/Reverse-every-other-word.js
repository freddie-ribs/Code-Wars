// Problem link: https://www.codewars.com/kata/58d76854024c72c3e20000de

// Solution:

function reverse(str){
  return str.trim().split(" ").map((e, i) => i % 2 === 0 ? e : e.split("").reverse().join("")).join(" ")
}