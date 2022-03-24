// Problem link: https://www.codewars.com/kata/550554fd08b86f84fe000a58

// Solution:

function inArray(array1,array2){
  const filteredArr = array1.filter(word => array2.some(w => w.includes(word)))
  return filteredArr.sort()
}