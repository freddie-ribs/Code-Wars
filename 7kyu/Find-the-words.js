// Problem link: https://www.codewars.com/kata/5680781b6b7c2be860000036

// Solution

function vowelIndices(word){
  let vowels = "aeiouyAEIOUY"
  let out = []
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      out.push(i + 1)
    }
  }
  return out
}