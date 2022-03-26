// Problem link: https://www.codewars.com/kata/52685f7382004e774f0001f7

// Solution: 

function humanReadable (seconds) {
  let hours = parseInt(seconds / 3600)
  let minutes = parseInt(seconds / 60) % 60
  let secs = seconds % 60
  
  let hoursOut = hours < 10 ? "0" + hours : hours
  let minutesOut = minutes < 10 ? "0" + minutes : minutes
  let secondsOut = secs < 10 ? "0" + secs : secs
  
  return `${hoursOut}:${minutesOut}:${secondsOut}`
}