// Problem link: https://www.codewars.com/kata/57f8ff867a28db569e000c4a

// Solution:

function kebabize(str) {
  let out = ""
  for (let c of str) {
    if (!Object.is(parseInt(c), NaN)) {
      continue
    }
    if (c !== c.toUpperCase()) {
      out += c
    } else {
      out += "-" + c.toLowerCase()
    }
  }
  return out[0] === "-" ? out.slice(1) : out
}