// Problem link: https://www.codewars.com/kata/5842df8ccbd22792a4000245

// Solution:

function expandedForm(num) {
  let numStr = num.toString().split("")
  
  let out = []
  
  let multiplier = 1
  
  for (let i = numStr.length - 1; i >= 0; i--) {
    let digit = numStr[i]
    
    if (digit > 0) {
      out.push(digit * multiplier)    
    }
    
    multiplier *= 10
  }
  
  return out.reverse().join(" + ")
}