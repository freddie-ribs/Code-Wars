// Problem link: https://www.codewars.com/kata/54da539698b8a2ad76000228

// Solution
function isValidWalk(walk) {
  if (walk.length > 10 || walk.length < 10) {
    return false
  }
  
  let countNS = 0
  let countEW = 0
  
  for (let direction of walk) {
    if (direction === "n") {
      countNS += 1
    } else if (direction === "s") {
      countNS -= 1
    } else if (direction === "e") {
      countEW += 1
    } else {
      countEW -= 1
    }
  }
  
  if (countNS !== 0 || countEW !== 0) {
    return false
  } else {
    return true
  }
}