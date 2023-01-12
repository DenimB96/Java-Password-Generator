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
numbers = [0,1,2,3,4,5,6,7,8,9];
up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
low = "abcdefghijklmnopqrstuvwxyz";
special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";


/* Possible new code with new prompts */ 
function generatePassword() {
    enter = parseInt(prompt("Between 8 and 128 how many characters would you like to have in your password?"));
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
    if (!selectNumber && !selectCharacter && !selectLowercase && !selectUppercase) {
        choices = alert("You must choose between prompted critera!");
    } /* 4 postives */
    else if (selectNumber && selectCharacter && selectLowercase && selectUppercase) {
        choices = numbers.concat(up, low, special);
    } /* 3 positives */
    else if (selectNumber && selectCharacter && selectUppercase) {
        choices = numbers.concat(special, up);
    }
    else if (selectNumber && selectCharacter && selectLowercase) {
        choices = numbers.concat(special, low);
    }
    else if (selectCharacter && selectUppercase && selectLowercase) {
        choices = special.concat(up, low);
    }
    else if (selectNumber && selectUppercase && selectLowercase) {
        choices = numbers.concat(up, low);
    } /* 2 positives */
    else if (selectNumber && selectCharacter) {
        choices = numbers.concat(special);
    }
    else if (selectNumber && selectLowercase) {
        choices = numbers.concat(low);
    }
    else if (selectNumber && selectUppercase) {
        choices = numbers.concat(up);
    }
    else if (selectLowercase && selectCharacter) {
        choices = low.concat(special);
    }
    else if (selectLowercase && selectUppercase) {
        choices = low.concat(up);
    }
    else if (selectCharacter && selectUppercase) {
        choices = special.concat(up);
    } /* 1 positive */
    else if (selectCharacter) {
        choices = special;
    }
    else if (selectNumber) {
        choices = numbers;
    }
    else if (selectLowercase) {
        choices = low;
    }
    else if (selectUppercase) {
        choices = up;
    }
};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);





