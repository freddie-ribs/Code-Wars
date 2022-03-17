// Problem link:https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// Solution:
function duplicateEncode(word){
  let lWord = word.toLowerCase()
  let d = {}
  let out = ""
  for (let i = 0; i < word.length; i++) {
    if (!(lWord[i] in d)) {
      d[lWord[i]] = 1
    }
    else {
      d[lWord[i]] += 1
    }
  }
  
  for (let ch of lWord) {
    if (d[ch] === 1) {
      out += "("
    } else {
      out += ")"
    }
  }
  return out
}
