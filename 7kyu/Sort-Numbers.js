// Problem link: https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

// Solution 
function solution(nums){
  if (!Array.isArray(nums) || nums.length === 0) return []
  
  return nums.sort((a, b) => a - b)
}