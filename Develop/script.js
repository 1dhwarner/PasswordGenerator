// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  console.log("Hey! You clicked a button!");

  prompt("How many characters would you like your password to contain? Must be between 8 and 128.");

  confirm("Click OK to confirm including special characters");

  if 

// 1. Prompt the user for the password criteria. 
//     a. Password length 8 < 128 
//     b. Lowercase, uppercase, numbers, special characters 
// 2. Validate the input. 
// 3. Generate password based on criteria.


// 4. Display password to the page.


  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
