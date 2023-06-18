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

  if (userLength <= 7 || userLength >= 128) {
    alert("Try again. You MUST choose a character length between 8 and 128.")
    var userLength = prompt("Choose a password length betweeen 8 and 128 characters.")

  }

  // This code will alert the user of their choice
  alert(`You have choosen to use ${userLength} chacacters.`)
  // Need to use backticks " ` " to display a var in a string. aka template literals...

  // series of prommpt required by critia
  var userSelection = []

  var confirmLowerCase = confirm("Do you want lowercase characters?")
  var confirmUpperCase = confirm("DO you want uppercase characters?")
  var confirmNum = confirm("Do you want numbers?")
  var confirmSpecial = confirm("Do you want special characters?")

  if (confirmLowerCase) {
    userSelection = userSelection.concat(lowerCase)
  }

  if (confirmUpperCase) {
    userSelection = userSelection.concat(upperCase)
  }

  if (confirmNum) {
    userSelection = userSelection.concat(num)
  }

  if (confirmSpecial) {
    userSelection = userSelection.concat(specialCharacter)
  }

  // If no selection was made - return and run code again...
  if (confirmLowerCase != true && confirmUpperCase != true && confirmNum != true && confirmSpecial != true) {
    alert("ERROR! You must choose at least one selection. Try again.")
    var confirmLowerCase = confirm("Do you want lowercase characters?")
    var confirmUpperCase = confirm("DO you want uppercase characters?")
    var confirmNum = confirm("Do you want numbers?")
    var confirmSpecial = confirm("Do you want special characters?")

  }

  var randomPassword = ""

  for (var i = 0; i < userLength; i++) {
    randomPassword = randomPassword + userSelection[Math.floor(Math.random() * userSelection.length)];
    console.log(randomPassword)
  }
  return randomPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
