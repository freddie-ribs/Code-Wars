// Problem link: https://www.codewars.com/kata/52597aa56021e91c93000cb0


// Solution:

function moveZeros(arr) {
  let i = arr.length
  while (i >= 0) {
    if (arr[i] === 0) {
      arr.push(0) 
      arr.splice(i, 1)
    }
    i -= 1
  }
  
  return arr
}