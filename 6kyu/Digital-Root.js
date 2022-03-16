// Problem link: https://www.codewars.com/kata/541c8630095125aba6000c00

// Solution

function digital_root(n) {
  if (n == 0) {
    return 0
  } else {
    return (n - 1) % 9 + 1
  }
}