// Assignment Code

// PSUEDO-CODE:
// 1. Run series of prompts and confirms for password criteria
  // a. special characters 
  // b. lowercase characters 
  // c. uppercase characters 
  // d. numeric characters
  // 1b. Write contingency in case user selects no character type 
// 2. Validate inputs and feed information into password generating functions 
// 3. Generate password based on criteria 
// 4. Display randomly generated password to the page 

//-------------------------------------------------------------------------------------------


var generateBtn = document.querySelector("#generate");


// Define criteria variables 
var specialCharacters = "!@#$%^&*()-+=;:'<>{}[]~|`'";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "lowercaseCharacters.toUpperCase()";
var numericCharacters = "01234567890";
var passwordValue = "";

// Activates series of prompts and confirms, then generates a random password based off of user inputs. Added contingency in case user selects no character types.
function generatePassword () {
  var characters = "";
  var passwordLength = prompt("How many characters would you like your password to contain? Must be between 8 and 128.");
  var useSpecialCharacters = confirm("Click OK to confirm including special characters");
  var useLowercaseCharacters = confirm("Click OK to confirm including lowercase characters");
  var useUppercaseCharacters = confirm("Click OK to confirm including uppercase characters");
  var useNumericCharacters = confirm("Click OK to confirm including numeric characters");
  
  // Reminder: "||" means "or"
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

// Run for loop to generate a random character [input number] of times
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
