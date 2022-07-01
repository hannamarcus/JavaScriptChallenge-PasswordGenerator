// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower = "abcdefghijklmnopqrstuvwxyz";
var confirmUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var confirmNumber = "0123456789";
var confirmSpecial = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var userChoices;

// Length of password 

function determineLength(){
  passwordLength = prompt("How many characters would you like your password to be? (Must be between 8-128 characters)");

    if (passwordLength<8){
      alert("Password length must be a number between 8-128 characters");
      determineLength();}
    else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }
    
    return passwordLength;
}

// Lowercase option

function determineLowercase(){
  lowercaseCheck = prompt("Do you want to include lowercase letters in your password? \n(Yes or No)");
      lowercaseCheck = lowercaseCheck.toLowerCase();
  
      if (lowercaseCheck === null || lowercaseCheck === ""){
        alert("Please answer Yes or No");
        determineLowercase();
  
      }else if (lowercaseCheck === "yes" || lowercaseCheck ==="y"){
        lowercaseCheck = true;
        return lowercaseCheck;
  
      }else if (lowercaseCheck === "no" || lowercaseCheck ==="n"){
        lowerCheck = false;
        return lowercaseCheck;
      
      }else {
        alert("Please answer Yes or No");
        determineLowercase();
      }
      
      return lowercaseCheck;
    }

// Uppercase option

function determineUppercase(){
uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    
    return uppercaseCheck;
}

// Number option

function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    
    return numberCheck;
}

// Special Character

function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}

// Generator function

function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineLowercase();
  console.log(lowercaseCheck);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return generatePassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
