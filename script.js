// Assignment Code
var generateBtn = document.querySelector("#generate");


// Arrays
var lowerCase = [..."abcdefghijklmnopqrstuvwxyz"]
var upperCase = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var num = [..."0123456789"]
var specialCharacter = [..."~!@#$%^&*<>?"]
var userLength = ""

// Function to create prompts 
// This function was missing from starter code given
function generatePassword() {
  // Welcome Alert
  alert("Welcome. This Generator will ask you a series of questions. Answer them to best fit your preference. Lets begin!")
  // Length Prompt
  var userLength = prompt("Choose the character length for your password. Length must be between 8 and 128 characters.")


  // loop is a while loop. code goes until user makes correct selection
  // isNaN if number is not chosen rerun code
  while (userLength <= 7 || userLength >= 128 || isNaN(userLength)) {
    if (userLength === null){
      return('Press "Generate Password" to start over.')
    }
    if (isNaN(userLength)){
      alert("You must pick a NUMBER between 8 and 128.")
    } else
    alert("Try again. You MUST choose a character length between 8 and 128.")
    var userLength = prompt("Choose a password length betweeen 8 and 128 characters.")
  }




  // This code will alert the user of their choice
  alert(`You have choosen to use ${userLength} chacacters.`)
// Need to use backticks " ` " in place of quotes to display a var in a string. aka template literals... ${}

  // series of prompts required by criteria
  var userSelection = []

  var confirmLowerCase = confirm("Do you want lowercase characters? 'Ok' = Yes, 'Cancel' = No")
  var confirmUpperCase = confirm("Do you want uppercase characters? 'Ok' = Yes, 'Cancel' = No")
  var confirmNum = confirm("Do you want numbers? 'Ok' = Yes, 'Cancel' = No")
  var confirmSpecial = confirm("Do you want special characters? 'Ok' = Yes, 'Cancel' = No")
  // While Loop - If no selection was made - return and run code again until a section is made.
  while (confirmLowerCase != true && confirmUpperCase != true && confirmNum != true && confirmSpecial != true) {
    alert("ERROR! You must choose at least one selection. Try again.")
    var confirmLowerCase = confirm("Do you want lowercase characters? 'Ok' = Yes, 'Cancel' = No")
    var confirmUpperCase = confirm("Do you want uppercase characters? 'Ok' = Yes, 'Cancel' = No")
    var confirmNum = confirm("Do you want numbers? 'Ok' = Yes, 'Cancel' = No")
    var confirmSpecial = confirm("Do you want special characters? 'Ok' = Yes, 'Cancel' = No")

  }

  // Users makes confirmed selections
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




  var generatedPassword = ""

  for (var i = 0; i < userLength; i++) {
    generatedPassword = generatedPassword + userSelection[Math.floor(Math.random() * userSelection.length)];
    /* turning userSelection array into the length of the password - and using the random tag to choose random characters based on selection */
  }
  // returns the users selections
  return generatedPassword;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
