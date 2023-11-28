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

function getPasswordCriteria() {
    let passwordLength = parseInt(window.prompt("Enter desired length of the password (between 8 and 128 characters):"));

    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        passwordLength = parseInt(window.prompt("Please enter a valid password length between 8 and 128:"));
    }

    const includeLowercase = window.confirm("Would you like to include lowercase letters?");
    const includeUppercase = window.confirm("Would you like to include uppercase letters?");
    const includeNumeric = window.confirm("Would you like to include numbers?");
    const includeSpecial = window.confirm("Would you like to include special characters?");

    return {
        length: passwordLength,
        includeLowercaseCharacters: includeLowercase,
        includeUppercaseCharacters: includeUppercase,
        includeNumericCharacters: includeNumeric,
        includeSpecialCharacters: includeSpecial,
    };
}

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function generatePassword() {
    const options = getPasswordCriteria();

    const availableChars = [];
    if (options.includeLowercaseCharacters) availableChars.push(...lowerCasedCharacters);
    if (options.includeUppercaseCharacters) availableChars.push(...upperCasedCharacters);
    if (options.includeNumericCharacters) availableChars.push(...numericCharacters);
    if (options.includeSpecialCharacters) availableChars.push(...specialCharacters);

    if (availableChars.length === 0) {
        alert("You must select at least one character type.");
        return "";
    }

    let generatedPassword = "";
    for (let i = 0; i < options.length; i++) {
        const randomChar = getRandom(availableChars);
        generatedPassword += randomChar;
    }

    return generatedPassword;
}

function displayPassword(password) {
    const passwordTextArea = document.getElementById("password");
    if (passwordTextArea) {
        passwordTextArea.value = password;
    } else {
        console.error("Textarea with ID password not found."); 
    }
}

function writePassword() {
    var password = generatePassword();
    displayPassword(password); 
}

var generateBtn = document.querySelector('#generate');
if (generateBtn) {
    generateBtn.addEventListener("click", writePassword);
} else {
    console.error("#generate button not found.")
}

const passwordOutput = generatePassword();
if (passwordOutput !== "") {
    console.log("Generated Password: ", passwordOutput);
} else {
    console.error("Password failed to generate.")
}

function generateDisplayPassword() {
    if (passwordOutput !== "") {
        displayPassword(passwordOutput);
    } else {
        console.error("password failed to generate.");
    }
}

function displayPassword(password) {
    alert("Generated password: " + password);
    const passwordTextArea = document.getElementById("password");
    if (passwordTextArea) {
        passwordTextArea.value = password;
    } else {
        console.error("Textarea with ID password not found.");
    }
} 