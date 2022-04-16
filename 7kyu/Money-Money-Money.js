// Problem link: https://www.codewars.com/kata/563f037412e5ada593000114

// Solution:
function calculateYears(principal, interest, tax, desired) {
  let year = 0
  while (principal < desired) {
    let dividents = principal * interest
    let taxMoney = dividents * tax
    principal = principal + (dividents - taxMoney)
    year += 1
  }
  return year
}

