// Problem link: https://www.codewars.com/kata/5679aa472b8f57fb8c000047

// Solution

function findEvenIndex(arr) {  
  for (let i = 0; i < arr.length; i++) {
    let sumLeft = arr.slice(0, i).reduce((pre, cur) => pre + cur, 0)
    let sumRight = arr.slice(i + 1).reduce((pre, cur) => pre + cur, 0)
    if (sumLeft === sumRight) { 
      return i
    }
  }
  return -1
}