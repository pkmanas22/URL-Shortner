document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.body.querySelector('#name');
    const emailInput = document.body.querySelector('#signup-email');
    const newPasswordInput = document.body.querySelector('#new-password');
    const conPasswordInput = document.body.querySelector('#con-password');

    nameInput.addEventListener('input', function () {
        clearError(nameInput);
    });

    emailInput.addEventListener('input', function () {
        clearError(emailInput);
    });

    newPasswordInput.addEventListener('input', function () {
        clearError(newPasswordInput);
    });

    conPasswordInput.addEventListener('input', function () {
        clearError(conPasswordInput);
    });
});

function validateForm() {
    const nameInput = document.body.querySelector('#name');
    const emailInput = document.body.querySelector('#signup-email');
    const newPasswordInput = document.body.querySelector('#new-password');
    const conPasswordInput = document.body.querySelector('#con-password');
    const nameError = document.body.querySelector('#nameError');
    const emailError = document.body.querySelector('#emailError');
    const newPasswordError = document.body.querySelector('#newPasswordError');
    const conPasswordError = document.body.querySelector('#conPasswordError');

    removeErrorClass(nameInput);
    removeErrorClass(emailInput);
    removeErrorClass(newPasswordInput);
    removeErrorClass(conPasswordInput);

    clearErrorMessages(nameError, emailError, newPasswordError, conPasswordError);

    const name = nameInput.value;
    const email = emailInput.value;
    const newPassword = newPasswordInput.value;
    const conPassword = conPasswordInput.value;

    if (name.trim() === "") {
        showError(nameInput, nameError, "Name is required.");
        return false;
    }

    if (email.trim() === "") {
        showError(emailInput, emailError, "Email is required.");
        return false;
    } else if (!validateEmail(email)) {
        showError(emailInput, emailError, "Invalid email format.");
        return false;
    }

    if (newPassword.length < 8 || !isAlphanumeric(newPassword)) {
        showError(newPasswordInput, newPasswordError, "Password must be 8 characters or more and alphanumeric.");
        return false;
    }

    if (newPassword !== conPassword) {
        showError(conPasswordInput, conPasswordError, "Passwords do not match.");
        return false;
    }

    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isAlphanumeric(str) {
    const alphanumericRegex = /^[0-9a-zA-Z]+$/;
    return alphanumericRegex.test(str);
}

function showError(element, errorElement, message) {
    element.classList.add('error');
    errorElement.innerText = message;
}

function removeErrorClass(element) {
    element.classList.remove('error');
}

function clearError(element) {
    element.classList.remove('error');
}

function clearErrorMessages(...errorElements) {
    errorElements.forEach(element => {
        element.innerText = "";
    });
}