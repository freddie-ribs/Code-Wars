// Problem link: https://www.codewars.com/kata/513e08acc600c94f01000001

// Solution:
function rgb(r, g, b){
  function toHex(n) {
    if (n <= 0) {
      return "00"
    }
    
    if (n > 255) {
      return "FF"
    }
    
    let hexNum = n.toString(16).toUpperCase()
    if (hexNum.length < 2) {
      hexNum = "0" + hexNum
    }
    return hexNum
  }
  
  return toHex(r) + toHex(g) + toHex(b)
}