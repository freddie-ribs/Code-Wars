// Problem link: https://www.codewars.com/kata/58235a167a8cb37e1a0000db

// Solution:

function numberOfPairs(gloves) {
  let d = {}
  let out = 0
  
  for (let color of gloves) {
    if (color in d) {
      d[color] += 1
    } else {
      d[color] = 1
    }
  }
  
  for (let key of Object.keys(d)) {
    if (d[key] >= 2) {
      out += Math.floor(d[key] / 2)
    }
  }
  return out
}