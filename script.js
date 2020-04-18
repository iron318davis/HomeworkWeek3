// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = ["uselowercase", "useuppercase", "usenumbers", "usespecchar", "length", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];

if (parseInt(characters[4]) <=7) {
  console.log("Less than 7")
};

var optionsused = ""

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  characters[0] = confirm("Use lowercase letters?");
  characters[1] = confirm("Use uppercase letters?");
  characters[2] = confirm("Use numbers?");
  characters[3] = confirm("Use special characters?");
  characters[4] = prompt("How many characters would you like?(Between 8 and 128)");

  if (characters[0] !== true && characters[1] !== true && characters[2] !== true && characters[3] !== true) {
    alert("Please retry and select at least one type of character.");
    return;
  }

  if (characters[4] < 8 || characters[4] > 128) {
    alert("Please retry and enter a number between 8 and 128");
    return;
  }

  for (var i = 0; i < 4; i++) {
    if (characters[i] == true) {
      optionsused += characters[(i + 5)];
      console.log(optionsused);
    }
  }
  
  var securitygoose = "" 
  console.log(characters[4])

  for (var n = characters[4]; n > 0; n--) {
    var rnum = Math.floor(Math.random() * optionsused.length);
    securitygoose += optionsused.substring(rnum, rnum+1);
    console.log(rnum);
    console.log(securitygoose);
  }

  resetarray();
  console.log(characters[0]);
  console.log(characters[1]);
  console.log(characters[2]);
  console.log(characters[3]);
  console.log(optionsused);
  return securitygoose;
};

function resetarray() {
  optionsused = ""
  characters[0] = "uselowercase";
  characters[1] = "useuppercase";
  characters[2] = "usenumbers";
  characters[3] = "usespecchar";
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
