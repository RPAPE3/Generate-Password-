var passwordOptions = ["abcdefghijklmopqrstuvxyz", "ABCDEFGHIJKLMOPQRSTUVWXYZ", "0123456789", "!@#$%^&*"];

function promptPassword() {
  var input1 = prompt("How long do you want your password to be?", "Enter value");
  if (input1 === "Enter value" || input1 === "" || !input1) {
    alert("See ya later, alligator!");
    alert("In a while, crocodile")
  }else if (input1 < 8 || input1 > 128 || isNaN(input1)) {
    alert("Please enter a number between 8 and 128");
    promptPassword();
  } else {
    var input2 = confirm("Would you like Lowercase Letters?");
    var input3 = confirm("Would you like Uppercase Letters?");
    var input4 = confirm("Would you like Numbers?");
    var input5 = confirm("Would you like Special Characters?");
    if (input2 === false && input3 === false && input4 === false && input5 === false) {
      alert("Please select one of (Lowercase, Uppercase, Numbers, Special Characters");
      promptPassword();
    }
  }
  var passwordCharacters = arrayPassword(input2, input3, input4, input5);

  var generateBtn = document.querySelector("#generate");

  function writePassword() {
    var password = generatePassword(input1, passwordCharacters);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  };

  generateBtn.addEventListener("click", writePassword());
};

function arrayPassword(lowercase, uppercase, number, special) {
  var passwordString = "";
  if (lowercase) {
    passwordString += passwordOptions[0];
  }
  if (uppercase) {
    passwordString += passwordOptions[1];
  }
  if (number) {
    passwordString += passwordOptions[2];
  }
  if (special) {
    passwordString += passwordOptions[3];
  }
  return passwordString;
}

function generatePassword(numCharacters, passwordList) {
  var password = " ";
  for (var i = 0; i < numCharacters; i++) {
    var passwordRandom = Math.floor(Math.random() * passwordList.length);
    password += passwordList[passwordRandom];
  }
  return password;
};

