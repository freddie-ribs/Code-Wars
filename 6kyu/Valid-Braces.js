// Problem link: https://www.codewars.com/kata/5277c8a221e209d3f6000b56

// Solution
function validBraces(braces){
  let stack = []
  let d = {"]": "[", "}": "{", ")": "("}
  for (let ch of braces) {
    if (Object.values(d).includes(ch)) {
      stack.push(ch)
    }
    else {
      if (stack.length === 0 || d[ch] !== stack.pop()) {
        return false
      }
  }
}
  return stack.length === 0
}