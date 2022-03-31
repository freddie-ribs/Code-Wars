// Problem link: https://www.codewars.com/kata/545a4c5a61aa4c6916000755

// Solution:

function gimme (triplet) {
  let min = Math.min(...triplet)
  let max = Math.max(...triplet)
  let num = triplet.filter(el => el !== min && el !== max)[0]
  return triplet.indexOf(num)
}