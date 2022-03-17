// Problem link: https://www.codewars.com/kata/525f50e3b73515a6db000b83

// Solution: 

function createPhoneNumber(numbers){
  let out = "(xxx) xxx-xxxx";
  
  for(let i = 0; i < numbers.length; i++)
  {
    out = out.replace('x', numbers[i]);
  }
  
  return out;
}