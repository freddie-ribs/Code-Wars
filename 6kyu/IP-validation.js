// Problem link: https://www.codewars.com/kata/515decfd9dcfc23bb6000006

// Solution

function isValidIP(str) {
  let arr = str.split(".")
  
  for (let el of arr) {    
    if (el.includes("\n") || el.includes(" ") || el.includes("e") || el === "" || el.includes(".")) {
      return false
    }
    if (Object.is(Number(el), NaN)) {
      return false
    } else if (Number(el) > 255 || Number(el) < 0) {
      return false
    } else if (el[0] === "0" && el.length > 1) {
      return false
    }
  }
  
  return arr.length === 4
}