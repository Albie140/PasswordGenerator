// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays//

var lowerCase = ["a", "b", "c"]
var upperCase = ["A", "B", "C"]
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",]
var Numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
var howManyNumbers =prompt("How many characters would you like your password to be?");

if (howManyNumbers< 8) {
    alert("Must be at least 8 characters")
}
else if (howManyNumbers>128) {
    alert("Can't be more than 128 characters")
}
var chooselowercase =confirm("Do you want lowercase letters in your password?");
var chooseuppercase =confirm("Would you like uppercase letters in your password?")
//create other confirm messages... spec char...

if (chooselowercase == false || chooseuppercase == false ) {

alert( "Must choose at least 1 character type")
}
var userArray = []
if (chooselowercase) {
    userArray=userArray.concat(lowerCase)
    console.log(userArray)
}
if (chooseuppercase) {
    userArray=userArray.concat(upperCase)
    console.log(userArray)
}
//create for specialCharacter & Numeric
var Password;
for (i=0; i<howManyNumbers; i++) {
var randomNum= Math.floor(Math.random()*userArray.length)
console.log(randomNum)
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


