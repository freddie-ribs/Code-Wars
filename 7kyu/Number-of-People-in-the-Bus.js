// Problem link: https://www.codewars.com/kata/5648b12ce68d9daa6b000099

// Solution:

var number = function(busStops){
  return busStops.reduce( (prev, cur) => prev + cur[0] - cur[1], 0)
}