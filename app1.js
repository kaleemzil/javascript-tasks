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

//TASK 3


let username = prompt("Enter your Name");
let phoneNumber = +prompt("phone number");
let email = prompt("Enter your email");
let Password = prompt("Enter your Password");
let confirmPassword = prompt("Enter your confirmPassword");


if(!username){
    alert('Error: Enter the Field');
}
if(!phoneNumber){
    alert('Error:Enter the Field');
}
if(!email){
    alert('Error:Enter the Field');
}
if(!Password){
    alert('Error:Enter the Field');
}
if(!confirmPassword){
    alert('ErrorEnter the Field');
}

if(Password === confirmPassword){
    alert(`Succesfully Login The confirmPassword Is Same`)
}
else{
    alert(`The Password Is Not same`)
}