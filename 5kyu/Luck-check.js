// Problem link: https://www.codewars.com/kata/5314b3c6bb244a48ab00076c

// Solution

function luckCheck(ticket) {
  let l = 0
  let r = ticket.length - 1
  let lSum = 0
  let rSum = 0

  while (l < r) {
    lSum += +ticket[l]
    rSum += +ticket[r]
    l += 1
    r -= 1
  }

  return lSum === rSum
}
