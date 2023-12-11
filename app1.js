//task 3

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var evenArray = [];
var oddArray = [];

for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
        evenArray.push(numberArray[i]);
    } else {
        oddArray.push(numberArray[i]);
    }
}

// Display the results in the browser console
console.log("Even Numbers: " + evenArray);
console.log("Odd Numbers: " + oddArray);

//task 2

let palindrome = prompt("enter the palindrome")
let flag = true;


const len = palindrome.length;

for (let i = 0; i <  len / 2; i++) {
    if (palindrome[i] !== palindrome[len - i - 1]) {
        flag = false;
        break;
    }
}
if (flag) {
    console.log(`${(palindrome)}: word is  a palindrome`)
}
else {
    console.log(`${(palindrome)}:word is not a palindrome`)
}