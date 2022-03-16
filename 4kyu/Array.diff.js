// Problem link: https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

// Solution

function arrayDiff(a, b) {
  for (let i = 0; i < b.length; i++) {
    if (a.includes(b[i])) {
      a = a.filter(item => item !== b[i])
    }
  }
  return a
}