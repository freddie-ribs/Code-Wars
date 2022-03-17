// Problem link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// Solution

function findOutlier(integers){
  let countOdd = 0
  let countEven = 0
  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) {
      countEven += 1
    } else {
      countOdd += 1
    }
  }
  
  if (countOdd > countEven) {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        return integers[i]
      }
    }
  } else {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 !== 0) {
        return integers[i]
      }
    }
  }
}