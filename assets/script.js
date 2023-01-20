// Assignment Code
var generateBtn = document.querySelector("#generate");

// create a user password input that will be passed 
passwordInput = []; 

// create arrays for the different criteria
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numeric = ['1','2','3','4','5','6','7','8','9','0'];
var specChar = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}'];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword() )

// Write password to the #password input
function writePassword() {
    prompts();

    if(prompts) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

    } 
}

// write generatePassword function 
function generatePassword() {
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomChoice = 
        password = password + passwordInput[]; 
    }
}

// create a function that will prompt the user some questions
function prompts() {
    passwordInput = [];
    passwordLength = prompt("Select between 8 and 128 characters for password")
    if(passwordLength >= 8 && passwordLength <= 128) {
        return true;
    }
    if (confirm("Include lowercase letters?")) {
        passwordInput = passwordInput.concat(lowerCase);
    }
    if (confirm("Include uppercase letters?")) {
        passwordInput = passwordInput.concat(upperCase);
    } 
    if (confirm("Include numbers?")) {
        passwordInput = passwordInput.concat(numeric);
    }
    if (confirm("Include special characters?")) {
        passwordInput = passwordInput.concat(specChar);
    }
    return true;
}