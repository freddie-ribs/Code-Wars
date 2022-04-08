// Problem link: https://www.codewars.com/kata/54129112fb7c188740000162

// Solution:

function prefill(n, v) {
  if (!Number.isInteger(+n) || +n < 0 || typeof(n) === "boolean") {
    throw new TypeError(`${n} is invalid`)
  }
  return +n ? Array(n).fill(v) : []
}