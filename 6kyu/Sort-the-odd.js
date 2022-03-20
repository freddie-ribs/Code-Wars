// Problem link: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

// Solution:
function sortArray(array) {
  const odds = array.filter(el => el % 2 !== 0)
  const sortedOdds = odds.sort((first, second) => first - second)
  return array.map(el => el % 2 !== 0 ? odds.shift() : el)
}