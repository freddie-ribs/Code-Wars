// Problem link: https://www.codewars.com/kata/51e0007c1f9378fa810002a9

// Solution:
function parse( data ){
  let count = 0
  let out = []
  data.split("").map(ch => {
    if (ch === "i") {
      count++
    } else if (ch === "d") {
      count--
    } else if (ch === "s") {
      count = Math.pow(count, 2)
    } else if (ch === "o") {
      out.push(count)
    }
  })
  return out
}