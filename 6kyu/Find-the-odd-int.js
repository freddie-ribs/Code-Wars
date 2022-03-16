// Problem link: https://www.codewars.com/kata/54da5a58ea159efa38000836

// Solution:

function findOdd(A) {
  let d = {}
  for (let n of A) {
    if (!(n in d)) {
      d[n] = 1
    } else {
      d[n]++
    }
  }
  const out = Object.entries(d).filter(item => item[1] % 2 !== 0)
  return +out[0][0]
}