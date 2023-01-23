// Assignment Code
var generateBtn = document.querySelector("#generate");
// var writePassword = document.querySelector(".card-body");

// create arrays for the different criteria
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numeric = ['1','2','3','4','5','6','7','8','9','0'];
var specChar = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}'];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

    function writePassword() {
        document.getElementById("generate").prompt("Would you like to add lowercase letters to your password?")
    }



// create a user password input that will be passed 
passwordInput = [];


// write generatePassword function 
function generatePassword() {
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomChoice = [];
        password = password + passwordInput;
    }
}

// create a function that will prompt the user some questions
function prompts() {
    //passwordInput = [];
    passwordLength = prompt("Select between 8 and 128 characters for password")
    if(passwordLength >= 8 && passwordLength <= 128) {
        P1 = prompt("Would you like to include lowercase letters in your password? Please select OK for 'yes' and Cancel for 'no'.");
            if (P1 === true);
            var randomLowerCase = (Math.floor(Math.random() * lowerCase.length));
        
        P2 = prompt("Would you like to include uppercase letters in your password? Please select OK for 'yes' and Cancel for 'no'.");
            if (P2 === true);
            var randomUpperCase = Math.floor(Math.random() * upperCase.length);
       
        P3 = prompt("Would you like to include numbers in your password? Please select OK for 'yes' and Cancel for 'no'.");
            if (P3 === true);
            var randomNumeric = Math.floor(Math.random() * numeric.length);
            
        P4 = prompt("Would you like to include special characters in your password? Please select OK for 'yes' and Cancel for 'no'.");
            if (P4 === true);
            var randomSpecChar = Math.floor(Math.random() * specChar.length);
            
        }};
        
        
// Write password to the #password input 
function writePassword() {
    prompts();
        
    if(prompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
        
    } 
} 