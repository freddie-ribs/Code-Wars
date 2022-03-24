// Problem link: https://www.codewars.com/kata/550498447451fbbd7600041c

// Solution:

function comp(array1, array2){
  if (array1 === null || array2 === null ) {
    return false
  }
  
  
  let sortedArr1 = array1.sort((a, b) => a - b)
  let sortedArr2 = array2.sort((a, b) => a - b)
  for (let i = 0; i < sortedArr1.length; i++) {
    if ((sortedArr1[i] * sortedArr1[i]) !== sortedArr2[i]) {
      return false
    }
  }
  return true
}