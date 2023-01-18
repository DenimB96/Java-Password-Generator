/*assignment code and event listener to start text prompts when the button is pushed*/
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
/*new variables */
var numbers = "01234567890123456789";
var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var low = "abcdefghijklmnopqrstuvwxyz";
var special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

var selectNumber;
var selectUppercase;
var selectLowercase;
var selectCharacter;
var selectLength = "";
/*new code*/
function generatePassword() {
    selectLength = parseInt(prompt("Between 8 and 128 how many characters would you like to have in your password?"));
    /*Validation of input*/
    if(selectLength <=7 || selectLength >=128) {
        alert ("You must choose a length between 8 and 128!");
        selectLength = parseInt(prompt("Between 8 and 128 how many characters would you like to have in your password?"));
    } /* Tell you how many characters you have chosen */
    alert(`Your password will have ${selectLength} characters`);
    
    selectCharacter = confirm("Do you want this password to contain special characters?");
    selectNumber = confirm("Do you want this password to contain numbers?");
    selectLowercase = confirm("Do you want this password to contain lowercase letters?");
    selectUppercase = confirm("Do you want this password to contain uppercase letters?");
    /*password paramaters */
     var passwordCharacters = []; 
     if (!selectNumber && !selectCharacter && !selectLowercase && !selectUppercase) {
        passwordCharacters = alert("You must choose between prompted critera!");
     }/* 4 postives */
     else if (selectNumber && selectCharacter && selectLowercase && selectUppercase) {
        passwordCharacters = numbers.concat(up, low, special);
    } /* 3 positives */
    else if (selectNumber && selectCharacter && selectUppercase) {
        passwordCharacters = numbers.concat(special, up);
    }
    else if (selectNumber && selectCharacter && selectLowercase) {
        passwordCharacters = numbers.concat(special, low);
    }
    else if (selectCharacter && selectUppercase && selectLowercase) {
        passwordCharacters = special.concat(up, low);
    }
    else if (selectNumber && selectUppercase && selectLowercase) {
        passwordCharacters = numbers.concat(up, low);
    } /* 2 positives */
    else if (selectNumber && selectCharacter) {
        passwordCharacters = numbers.concat(special);
    }
    else if (selectNumber && selectLowercase) {
        passwordCharacters = numbers.concat(low);
    }
    else if (selectNumber && selectUppercase) {
        passwordCharacters = numbers.concat(up);
    }
    else if (selectLowercase && selectCharacter) {
        passwordCharacters = low.concat(special);
    }
    else if (selectLowercase && selectUppercase) {
        passwordCharacters = low.concat(up);
    }
    else if (selectCharacter && selectUppercase) {
        passwordCharacters = special.concat(up);
    } /* 1 positive */
    else if (selectCharacter) {
        passwordCharacters = special;
    }
    else if (selectNumber) {
        passwordCharacters = numbers;
    }
    else if (selectLowercase) {
        passwordCharacters = low;
    }
    else if (selectUppercase) {
        passwordCharacters = up;
     }
     console.log(passwordCharacters)
     /*Empty string to loop random characters from the arrays*/
     var randomPassword = ""

     for (var i = 0; i < selectLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
     }
        return randomPassword;
}
/*Write password in the password input box*/
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}
     
     
     
