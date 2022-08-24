const nameValue = document.getElementById("fn");
const emailValue = document.getElementById("em");
const numberValue = document.getElementById("cn");
const messageValue = document.getElementById("ms");
const btnValue = document.getElementById("btn");

//Selecting error fields

const nameError = document.getElementById("fn-error");
const emailError = document.getElementById("em-error");
const numberError = document.getElementById("cn-error");
const messageError = document.getElementById("msg-error");

//Validation function for name field

function validateName() {
    const name = nameValue.value;
    if (name.length == 0) {
        fnError.innerHTML = "Name is required";
        addbtn.disabled = true;
        return false;
    }
    if (!name.match(/^[A-Za-z]{3,}[\s][A-Za-z]{1}[\s][A-Za-z]+$/)) {
        fnError.innerHTML = "Write full name";
        addbtn.disabled = true;
        return false;
    }
    fnError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`;
    addbtn.disabled = false;
    return true;
}
nameValue.addEventListener("keyup", validateName);
nameValue.addEventListener("blur", validateName);

//Validation function for email field

function validateEmail() {
    const email = emailValue.value;
    if (email.length == 0) {
        emError.innerHTML = "email is required";
        addbtn.disabled = true;
        return false;
    }
    if (!email.match(/^[A-Za-z0-9\._-]+[@][A-Za-z]+[\.][a-z]{2,3}$/)) {
        emError.innerHTML = "Write correct email";
        addbtn.disabled = true;
        return false;
    }
    emError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`;
    addbtn.disabled = false;
    return true;
}
emailValue.addEventListener("keyup", validateEmail);
emailValue.addEventListener("blur", validateEmail);

//Validation function for number field

function validateNumber() {
    const number = numberValue.value;
    if (number.length == 0) {
        cnError.innerHTML = "number is required";
        addbtn.disabled = true;
        return false;
    }
    if (!number.match(/^[6789][0-9]{9}$/)) {
        cnError.innerHTML = "Write correct number";
        addbtn.disabled = true;
        return false;
    }
    cnError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`;
    addbtn.disabled = false;
    return true;
}
numberValue.addEventListener("keyup", validateNumber);
numberValue.addEventListener("blur", validateNumber);

//Validation function for message field

function validateMessage() {
    const message = messageValue.value;
    if (message.length == 0) {
        msgError.innerHTML = "message is required";
        addbtn.disabled = true;
        return false;
    }
    if (!message.match(/^[A-Za-z\s]+$/)) {
        msgError.innerHTML = "Write correct message";
        addbtn.disabled = true;
        return false;
    }
    msgError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`;
    addbtn.disabled = false;
    return true;
}
messageValue.addEventListener("keyup", validateMessage);
messageValue.addEventListener("blur", validateMessage);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.defaultPrevented();
    validateName();
    validateEmail();
    validateNumber();
    validateMessage();
    if (
        !validateName() ||
        !validateEmail() ||
        !validateNumber() ||
        !validateMessage()
    ) {
        return false;
    }
    let obj = {
        name: nameValue.value,
        email: emailValue.value,
        number: numberValue.value,
        message: messageValue.value,
    };
    console.log(obj);

    //Reset

    nameValue.value = "";
    email.value = "";
    number.value = "";
    message.value = "";
});