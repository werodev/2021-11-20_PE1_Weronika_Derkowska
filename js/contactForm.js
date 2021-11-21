const form = document.querySelector("#customerService");
const formPass = document.querySelector("#formPass");
const firstName = document.querySelector("#firstname");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email")
const emailError = document.querySelector("#emailError");
const columnContainer = document.querySelector(".column");

function validateForm(event) {
    event.preventDefault();
    if (checkLength(firstName.value, 0)) {
        firstnameError.style.displey = "none";
    } else {
        firstnameError.style.display = "block";
    }
    if (checkEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if ((checkLength(firstName.value, 0)) && (checkEmail(email.value))) {
        columnContainer.innerHTML = `<div class="rowContainer"><h3>We will contact you soon, thanks for writing!</h3></div>`;
    }
}

form.addEventListener("submit", validateForm);

function checkLength(input, length) {
    if (input.trim().length > length) {
        return true;
    } else {
        return false;
    }
}

function checkEmail(email) {
    const regExpression = /\S+@\S+\.\S+/;
    const patternMatch = regExpression.test(email);
    return patternMatch;
}