// Problem link: https://www.codewars.com/kata/5b1b27c8f60e99a467000041

// Solution:

function anagramDifference(w1,w2){
  let d = {}
  let count = 0

  for (let ch of w1) {
    if (ch in d) {
      d[ch] += 1
    } else {
      d[ch] = 1
     }
  }

  for (let ch of w2) {
    if (!(ch in d)) {
      count += 1
    } else {
      d[ch] -= 1
    }
  }

  for (let ch of Object.values(d)) {
    if (ch !== 0) {
      count += Math.abs(ch)
    }
  }

  return count
}