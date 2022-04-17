// Problem link: https://www.codewars.com/kata/5ac6932b2f317b96980000ca

// Solution:

function minValue(values){
  let numset = new Set(values)
  let arr = Array.from(numset).sort((a, b) => a - b)
  return Number(arr.join(""))
}