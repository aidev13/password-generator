// Assignment Code
var generateBtn = document.querySelector("#generate");


// Arrays
var lowerCase = [..."abcdefghijklmnopqrstuvwxyz"]
var upperCase = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var num = [..."0123456789"]
var specialCharacter = [..."~!@#$%^&*<>?"]
var userLength = ""

// Function to create prompts
function generatePassword() {
  // Welcome Alert
  alert("Welcome. This Generator will ask you a series of questions. Answer them to best fit your preference. Lets begin!")
  // Length Prompt
  var userLength = prompt("Choose the character length for your password. Length must be between 8 and 128 characters.")

  if (userLength <= 7 || userLength >= 129) {
    alert("Try again. You MUST choose a character length between 8 and 128.")
    var userLength = prompt("Choose a password length betweeen 8 and 129 characters.")

  }

   // This code will alert the user of their choice
   alert(`You have choosen to use ${userLength} chacacters.`)
   // Need to use backticks " ` " to display a var in a string. aka template literals...

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
