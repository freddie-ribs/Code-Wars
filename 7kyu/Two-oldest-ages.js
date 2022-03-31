// Problem link: https://www.codewars.com/kata/511f11d355fe575d2c000001

// Solution

function twoOldestAges(ages){
  let sorted = ages.sort((a, b) => a - b)
  return [sorted[sorted.length - 2], sorted[sorted.length - 1]]
}