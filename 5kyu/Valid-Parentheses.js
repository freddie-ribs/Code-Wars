// Problem link: https://www.codewars.com/kata/52774a314c2333f0a7000688

// Solution:

function validParentheses(parens) {
  let d = {")": "(", "}": "{", "]": "["}
  let stack = []
  for (let ch of parens) {
    if (Object.values(d).includes(ch)) {
      stack.push(ch)
    } else {
      if (stack.length === 0 || d[ch] !== stack.pop()) {
        return false
      }
    }
  }
  return stack.length === 0
}