let email = document.getElementById("email");
let passwordLenght = document.getElementById("passwordLenght");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

function generatePassword(len) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"

    const data = lowerAlphabet + upperAlphabet + numeric
    let generator = "";
    for (let i=0; i<len; i++) {
        generator += data[Math.floor(Math.random()*data.length)];
    }

    return generator
};

function getPassword(){
    const newPassword = generatePassword(passwordLenght.value);
    password.value = newPassword;
};

function savePassword(){
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Email : ${email.value}, Password : ${password.value}`))
    saveButton.setAttribute('download', 'MyPassword.txt')

};