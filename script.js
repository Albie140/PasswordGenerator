// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays for possible password characters//
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]", "{", "}", "~"]
var Numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
//Prompt user with question about how long desired password should be & store user input//
function generatePassword() {
    var howManyNumbers = prompt("How many characters would you like your password to be?");

    if (howManyNumbers < 8) {
        alert("Must be at least 8 characters");

    }
    else if (howManyNumbers > 128) {
        alert("Can't be more than 128 characters");

    }
   
// Confirm type of characters user would like in password, user must choose at least 1//

    var chooselowercase = confirm("Would you like lowercase letters in your password?");
    var chooseuppercase = confirm("Would you like uppercase letters in your password?");
    var chooseSpChar = confirm("Would you like special characters in your password?");
    var chooseNumeric = confirm("Would you like numbers in your password?");


    if (chooselowercase == false && chooseuppercase == false && chooseSpChar == false && chooseNumeric == false) {

        alert("Must choose at least 1 character type")
    }
//Concat arrays for possible password combinations//
    var userArray = []
    if (chooselowercase) {
        userArray = userArray.concat(lowerCase)
        console.log(userArray)
    }

    if (chooseuppercase) {
        userArray = userArray.concat(upperCase)
        console.log(userArray)
    }

    if (chooseSpChar) {
        userArray = userArray.concat(specialCharacter)
        console.log(userArray)
    }

    if (chooseNumeric) {
        userArray = userArray.concat(Numeric)
        console.log(userArray)
    }
//Display password with all chosen criteria//
    var password = "";
    for (i = 0; i < howManyNumbers; i++) {
        password += userArray[Math.floor(Math.random() * userArray.length)];
        console.log(password)
    }
    return password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

