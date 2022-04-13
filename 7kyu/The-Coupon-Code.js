// Problem link: https://www.codewars.com/kata/539de388a540db7fec000642

// Solution

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    Date.parse(expirationDate) - Date.parse(currentDate) >= 0
  )
}
