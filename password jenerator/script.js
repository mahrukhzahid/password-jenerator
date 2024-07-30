var pwEl = document.getElementById("pw");
var copyEl = document.getElementById("copy");
var lenEl = document.getElementById("len");
var upperEl = document.getElementById("upper");
var lowerEl = document.getElementById("lower");
var numberEl = document.getElementById("number");
var symbolEl = document.getElementById("symbol");
var generateEl = document.getElementById("generate");

var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+=";

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    var len = lenEl.value;

 var password = "";
    if (upperEl.checked) {
        password += getUppercase();
    }

    if (lowerEl.checked) {
        password += getLowercase();
    }

    if (numberEl.checked) {
        password += getNumber();
    }
    if (symbolEl.checked) {
        password += getSymbol();
    }

    for (var i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}
function generateX() {
    var xs = [];
    if (upperEl.checked) {
        xs.push(getUppercase());
    }

    if (lowerEl.checked) {
        xs.push(getLowercase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbol());
    }
    
    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}
generateEl.addEventListener("click", generatePassword);
copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});