// Problem link: https://www.codewars.com/kata/57f609022f4d534f05000024

// Solution:

function stray(numbers) {
  let d = {}
  for (let n of numbers) {
    if (n in d) {
      d[n] += 1
    } else {
      d[n] = 1
    }
  }
  
  for (let key of Object.keys(d)) {
    if (d[key] === 1) {
      return +key
    }
  }
}