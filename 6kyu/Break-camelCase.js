// Problem link: https://www.codewars.com/kata/5208f99aee097e6552000148

// Solution:

function solution(string) {
  let out = ""
  let arr = string.split("")
  console.log(arr)
  arr.forEach(el => el !== el.toUpperCase() ? out+= el : out += ` ${el.toUpperCase()}`)
  return out
}