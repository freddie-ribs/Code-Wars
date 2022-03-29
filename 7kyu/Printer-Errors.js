// Problem link: https://www.codewars.com/kata/56541980fa08ab47a0000040

// Solution:
function printerError(s) {
    return `${s.replace(/[a-m]/gi,'').length}/${s.length}`;
}