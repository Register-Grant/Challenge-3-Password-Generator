// Static variable
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const hasUppercaseLetters = uppercaseLetters.split("");
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const hasLowercaseLetters = lowercaseLetters.split("");
const numbers = "1234567890";
const hasNumbers = numbers.split("");
const symbols = "!@#$%^&*()[]{}:;',./<>?~`"
const hasSymbols = symbols.split("");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    let allCharacters = [];
    let createdPassword = "";

    // Dynamic variables

    var totalLengthPassword = prompt("How many characters long would you like your password to be?\n8-128");

    if (totalLengthPassword < 8 || totalLengthPassword > 128) {
      alert("Your password needs to be between 8 and 128 characters. Please try again."); 
    } 
    
    // Confirming password parameters
    else {
      if (confirm("Do you want your password to contain uppercase letters?")) {
        Array.prototype.push.apply(allCharacters, hasUppercaseLetters);
      }
     if (confirm("Do you want your password to contain lowercase letters?")) {
        Array.prototype.push.apply(allCharacters, hasLowercaseLetters);
      }
     if (confirm("Do you want your effing password to contain numerals?")) {
        Array.prototype.push.apply(allCharacters, hasNumbers);
      } 
    if (confirm("Do you want symbols in your password, ya punk?")) {
        Array.prototype.push.apply(allCharacters, hasSymbols);
    }
    if (allCharacters.length === 0) {
      alert("Not sure why this is so difficult for you to understand, but you gotta hit yes on one of those promts there, chief...");
    }
    // For loop to take all the available characters, shake 'em up like scrabble, and pull out a password
    else {
      for (var i = 0; i < totalLengthPassword; i++) {
      var random = Math.floor(Math.random() * allCharacters.length);
      createdPassword += allCharacters[random];
    }
  }
}
// Display the password
document.getElementById("password").innerHTML = createdPassword;
}