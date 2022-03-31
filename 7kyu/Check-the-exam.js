// Problem link: https://www.codewars.com/kata/5a3dd29055519e23ec000074

// Solution
function checkExam(array1, array2) {
  let sum = array1.reduce((pre, cur, i) => cur === array2[i] ? 4 + pre : array2[i] === "" ? pre : pre - 1, 0)
  return sum > 0 ? sum : 0
}