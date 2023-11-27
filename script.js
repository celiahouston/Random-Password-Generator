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

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

// Function to prompt user for password options
function getPasswordOptions() {
    let passwordLength = parseInt(window.prompt("Enter desired length of your password, between 8 and 128 characters."));

    while (passwordLength < 8 || password > 128 || isNaN(passwordLength)) {
        passwordLength = praseInt(window.prompt("Please enter a valid password length between 8 and 128 characters:"));
    }

    const includeLowercase = window.confirm("Would you like to include lowercase letters?");
    const includeUppercase = window.confirm("Would you like to include uppercase letters?");
    const includeNumeric = window.confirm("Would you like to include numbers?");
    const includeSpecial = window.confirm("Would you like to include special characters?");

    return {
        length: passwordLength,
        includeLowercase: includeLowercase,
        includeUppercase: includeUppercase,
        includeNumeric: includeNumeric,
        includeSpecial: includeSpecial,
    };
}

// Function for getting a random element from an array
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
    const options = getPasswordOptions();

    const avaliableChars = [];
    if (options.includeLowercase) avaliableChars.push(...lowerCasedCharacters);
    if (options.includeUppercase) avaliableChars.push(...upperCasedCharacters);
    if (options.includeNumeric) avaliableChars.push(...numericCharacters);
    if (options.includeSpecial) avaliableChars.push(...specialCharacters);

    if (avaliableChars.length === 0) {
        alert("You must select at least one character type.");
        return " ";
    }

    let generatedPassword = " ";
    for (let i = 0; i < options.length; i++) {
        const randomChar = getRandom(avaliableChars);
        generatedPassword += randomChar;
    }

    return generatedPassword;
}
// Get references to the #generate element

function displayPassword(password) {
    alert("Generated Password: " + password);
    console.log("Generated Password: " + password);
    
}
var generateBtn = document.querySelector('#generate');
function generateDisplayPassword() {
    const passwordOutput = generatePassword();
    if (passwordOutput !== " ") {
        displayPassword(passwordOutput);
    } else {
        alert("Failed to generate password.");
    }
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

function displayPassword(password) {
    alert("Generated Password: " + password);

}

// Add event listener to generate button

// generateBtn.addEventListener('click', writePassword);