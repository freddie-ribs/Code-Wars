// Problem link: https://www.codewars.com/kata/529eef7a9194e0cbc1000255

// Solution:

var isAnagram = function(test, original) {
  test = test.toLowerCase()
  original = original.toLowerCase()
  
  return test.split("").sort().join("") === original.split("").sort().join("")
};