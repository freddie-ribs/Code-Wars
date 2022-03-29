// Problem link: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

// Solution:

var number=function(array){
  return array.map((el, i) => `${i + 1}: ${el}`)
}