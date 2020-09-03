// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays//

var lowerCase = []
var upperCase = []
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
var howManyNumbers =prompt("How many characters would you like your password to be?");
var chooselowercase =confirm("Do you want lowercase letters in your password?");
var chooseuppercase =confirm("Would you like uppercase letters in your password?")



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


