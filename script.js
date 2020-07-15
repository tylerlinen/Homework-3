  // Assignment Code
var generateBtn = document.querySelector("#generate");

function passwordInput(){
//Characters
 characterInput="how many characters are in your password?"
passwordCount="minimum and maximum characters allowed"

while (passwordCount >8 || passwordCount<128); {
  characterInput = prompt("How many characters would you like in your passowrd? 8-128 characters");
}

var Cloud="";
var Sky="";
lower = "abcdefghijklmnopqrstuvwxyz";
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
special = "!@#$%^&*?";
numbers = "1234567890";

lowerOutput=confirm("Would you like your password to contain lower case letters?");
if (lowerOutput ==true){
  Sky= Sky.concat(lower);
  
}
upperOutput=confirm("Would you like your password to contain uppercase letters?");
if (upperOutput==true){
  Sky=Sky.concat(upper);
}
specialOutput=confirm("Would you like your password to contain special characters?");
if(specialOutput==true){
  Sky=Sky.concat(special);
}
numbersOutput=confirm("Would you like your password to contain numbers?");
if (numbersOutput==true){
  Sky=Sky.concat(numbers);
}

if (Sky==false){
  alert("Must choose one option!")
}

Endresult = "";

for (var x=0; x < characterInput; x++){
var y = Sky[Math.floor(Math.random() * Sky.length)];
  Endresult = Endresult.concat(y);
}


  return Endresult;
};






// Write password to the #password input


function writePassword() {
  var password = passwordInput();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);