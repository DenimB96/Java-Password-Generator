// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
/* Hiding to test new code
function writePassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 8;
    var password = "";

for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
}
    document.querySelector("#password").value = password;
} */

/*new variables */
var enter;
var selectNumber;
var selectUppercase;
var selectLowercase;
var selectCharacter;
var choices;



/* Possible new code with new prompts */ 
function generatePassword() {
    enter = parseInt(prompt("Between 8 and 128 how many characters would you like in your password?"));
/*Validation of input*/
    if (!enter) {
        alert("This needs a value");
    } else if (enter <8 || enter >128) {
        enter = parseInt(prompt("You must choose a number between 8 and 128"));
    } else {
        selectNumber = confirm("Do you want this password to contain numbers?");
        selectCharacter = confirm("Do you want this password to contain special characters?");
        selectLowercase = confirm("Do you want this password to contain lowercase letters?");
        selectUppercase = confirm("Do you want this password to contain uppercase letters?");
    };
    if (!selectCharacter && !selectNumber && !selectUppercase && !selectLowercase) {
        choices = alert("You must choose between prompted critera!");
    }

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

/* New password code */ 





