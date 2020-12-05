var generate_password = document.querySelector("#generate");

generate_password.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var lblPassword = document.querySelector("#password");
  lblPassword.value = password;
}

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function userInputs() {
  var password_length = prompt("how many characters for password length?");
  var useUpperCase = confirm("want upper case characters?");
  var useLowerCase = confirm("use lower case?");
  var useNumeric = confirm('want numeric characters?');
  var useSpecial = confirm("want special case character?");


  var userChoices = {
    password_length: password_length,
    useUpperCase: useUpperCase,
    useLowerCase: useLowerCase,
    useNumeric: useNumeric,
    useSpecial: useSpecial
  }

  return userChoices;
}

function generatePassword() {
  var result = [];
  var options = userInputs();
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (options.useUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(randomChar(upperCasedCharacters));;
    console.log("cool");
  }

  if (options.useLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(randomChar(lowerCasedCharacters));
  }

  if (options.useNumeric) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(randomChar(numericCharacters));
  }

  if (options.useSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(randomChar(specialCharacters));
  }

  for (var i = 0; i < options.password_length; i++) {
    var possibleCharacter = randomChar(possibleCharacters);
    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  console.log(possibleCharacters.length);
  console.log(possibleCharacters);
  console.log(guaranteedCharacters);
  console.log(result);
  console.log(result.join(""));

  return result.join("");


}

function randomChar(arr) {
  var randomIndex = Math.floor(Math.random() * (arr.length + 1));
  var randomElement = arr[randomIndex];
  return randomElement;
}