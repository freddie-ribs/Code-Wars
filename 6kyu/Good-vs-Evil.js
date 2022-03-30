// Prolbem link: https://www.codewars.com/kata/52761ee4cffbc69732000738

// Solution:

function goodVsEvil(good, evil){
  let lookupForGood = {0: 1, 1: 2, 2: 3, 3: 3, 4: 4, 5: 10}
  let lookupForEvil = {0: 1, 1: 2, 2: 2, 3: 2, 4: 3, 5: 5, 6: 10}
  
  let sumOfGood = good.split(" ").map((el, i) => el * lookupForGood[i]).reduce((pre, cur) => pre + cur,0)
  let sumOfEvil = evil.split(" ").map((el, i) => el * lookupForEvil[i]).reduce((pre, cur) => pre + cur,0)
  
  if ( sumOfGood > sumOfEvil) {
    return "Battle Result: Good triumphs over Evil"
  } else if (sumOfEvil > sumOfGood) {
    return "Battle Result: Evil eradicates all trace of Good"
  } else {
    return "Battle Result: No victor on this battle field"
  }
}