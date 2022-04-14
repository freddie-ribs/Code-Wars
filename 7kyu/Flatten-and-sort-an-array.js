// Problem link: https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

// Solution: 

"use strict";

function flattenAndSort(array){
    let flat = [].concat(...array);
    return flat.sort((a,b) => a - b);
}