// Problem link: https://www.codewars.com/kata/5592e3bd57b64d00f3000047

// Solution:

function findNb(m) {
  let i = 1
  let count = 0
  while (m > 0) {
    m = m - Math.pow(i, 3)
    i += 1
    count += 1
  }
  if (m === 0) {
    return count
  } else {
    return -1
  }
}