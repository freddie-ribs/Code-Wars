// Problem link: https://www.codewars.com/kata/587e18b97a25e865530000d8

// Solution:

function anagramCounter (wordsArray) {
  let count = 0
  wordsArray.forEach((el, idx, arr) => {
    for (let i = idx + 1; i < arr.length; i++) {
      if (el.toLowerCase().split("").sort().join("") === arr[i].toLowerCase().split("").sort().join("")) {
        count += 1
      }
    }
  })
  return count
}