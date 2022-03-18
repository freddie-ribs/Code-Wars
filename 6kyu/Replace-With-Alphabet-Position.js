// Problem link: https://www.codewars.com/kata/546f922b54af40e1e90001da

// Solution
function alphabetPosition(text) {
  let alpha = "abcdefghijklmnopqrstuvwxyz"
  let lText = text.toLowerCase()
  let out = ""
  
  for (let ch of lText) {
    if (alpha.includes(ch))
    out += `${alpha.indexOf(ch) + 1} `
  }
  return out.slice(0, out.length - 1)
}