// Array of special characters to be included in password
let specialCharacters = [
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
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
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
let upperCasedCharacters = [
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

// Function to prompt user for password options
// declare variables for global use
let passwordLength;
let includeSpecialCharacters;
let includeNumericCharacters;
let includeLowerCasedCharacters;
let includeUpperCasedCharacters;
let passwordOptions;
// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt(
    'Please enter the desired password lenght (minimum of 10 characters and a maximum of 64 characters)'
  );
  // check the input is within the range and is a number
  while (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)) {
    alert(
      'Your password length must be within range of 10 to 64 characters. Please try again.'
    );
    passwordLength = prompt(
      'Please enter the desired password length (minumum of 10 characters, maximum of 64)'
    );
  }
  includeSpecialCharacters = confirm(
    `Include special characters (@, %, +, \\, /, ', !, #, $, ^, ?, :, ,, ), (, }, {, ], [, ~, -, _, . in the password?`
  );
  includeNumericCharacters = confirm(
    `Include numeric characters (0-9) in the password?`
  );
  includeLowerCasedCharacters = confirm(
    `Include lowercased characters (a-z) in the password?`
  );
  includeUpperCasedCharacters = confirm(
    `Include uppercased characters (A-Z) in the password?`
  );
  // create object with corresponding arrays of characters for each prompt option
  passwordOptions = [
    { option: includeSpecialCharacters, array: specialCharacters },
    { option: includeNumericCharacters, array: numericCharacters },
    { option: includeLowerCasedCharacters, array: lowerCasedCharacters },
    { option: includeUpperCasedCharacters, array: upperCasedCharacters },
  ];
}



// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Function to generate password with user input
function generatePassword() {
  let password = '';
  getPasswordOptions();

    // create an array of all the characters to include in the password
    let passwordCharacters = [];
    if (includeSpecialCharacters)
      passwordCharacters = passwordCharacters.concat(specialCharacters);
      if (includeNumericCharacters)
      passwordCharacters = passwordCharacters.concat(numericCharacters);
      if (includeLowerCasedCharacters)
      passwordCharacters = passwordCharacters.concat(lowerCasedCharacters);
      if (includeUpperCasedCharacters)
      passwordCharacters = passwordCharacters.concat(upperCasedCharacters);
  
    // generate a random password of the desired length
    while (password.length < passwordLength) {
      let randomIndex = getRandom(passwordCharacters);
      password.push(passwordCharacters[randomIndex]);
    }
  
    return password.join('');
  }

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);