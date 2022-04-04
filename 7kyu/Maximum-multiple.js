// Problem link: https://www.codewars.com/kata/5aba780a6a176b029800041c

// Solution

function maxMultiple(divisor, bound){
    let remainder = bound % divisor;
    return bound-remainder;
}