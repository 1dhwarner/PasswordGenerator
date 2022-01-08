// Assignment Code

// 1. Prompt the user for the password criteria. 
//     a. Password length 8 < 128 
//     b. Lowercase, uppercase, numbers, special characters 
// 2. Validate the input. 
// 3. Generate password based on criteria.


// 4. Display password to the page.

var generateBtn = document.querySelector("#generate");

var specialCharacters = "!@#$%^&*()-+=;:'<>{}[]~|`'";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "lowercaseCharacters.toUpperCase()";
var numericCharacters = "01234567890";
var passwordValue = "";

function generatePassword () {
  console.log("Hey! You clicked a button!");
  var characters = "";
  var passwordLength = prompt("How many characters would you like your password to contain? Must be between 8 and 128.");
  var useSpecialCharacters = confirm("Click OK to confirm including special characters");
  var useLowercaseCharacters = confirm("Click OK to confirm including lowercase characters");
  var useUppercaseCharacters = confirm("Click OK to confirm including uppercase characters");
  var useNumericCharacters = confirm("Click OK to confirm including numeric characters");
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128")
    return ""
  }
  
  if (useSpecialCharacters === true) {
    characters = characters.concat(specialCharacters);
  }
  if (useLowercaseCharacters === true) {
    characters = characters.concat(lowercaseCharacters);
  }
  if (useUppercaseCharacters === true) {
    characters = characters.concat(uppercaseCharacters);
  }
  if (useNumericCharacters === true) {
    characters = characters.concat(numericCharacters);
  }
  if (characters.length === 0) {
    alert("Password needs to have at least one type of character")
  }
  passwordValue = "";

  for (let i = 0; i < passwordLength; i++) {
    let number = Math.floor(Math.random() * characters.length);
    passwordValue += characters[number];
  } 

  password.value = passwordValue;
  
  return passwordValue;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
