const form = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const phoneNumberInput = document.getElementById('phoneNumber');
const addressInput = document.getElementById('address');
const birthdateInput = document.getElementById('birthdate');
const genderSelect = document.getElementById('gender');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const phoneNumberError = document.getElementById('phoneNumberError');
const addressError = document.getElementById('addressError');
const birthdateError = document.getElementById('birthdateError');
const genderError = document.getElementById('genderError');

// Regular expressions for various fields
const passwordRegex = /^\d{6,}$/; // Requires at least one uppercase, lowercase, number, and special character
const phoneNumberRegex = /^\d{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//objects for regex
const regex_pswd = new RegExp(passwordRegex);
const regex_ph_no = new RegExp(phoneNumberRegex);
const regex_email = new RegExp(emailRegex);


function validateUsername() {
    if (usernameInput.value === '') {
        usernameError.textContent = 'Username is required.';
        return false;
    } else {
        usernameError.textContent = '';
        return true;
    }
}

function validateEmail() {
    if (!emailInput.value.match(regex_email)) {
        emailError.textContent = 'Invalid email address.';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validatePassword() {
    if (!passwordInput.value.match(regex_pswd)) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return false;
    } else {
        passwordError.textContent = '';
        return true;
    }
}

function validateConfirmPassword() {
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        return false;
    } else {
        confirmPasswordError.textContent = '';
        return true;
    }
}

function validatePhoneNumber() {
    if (!   phoneNumberInput.value.match(regex_ph_no)) {
        phoneNumberError.textContent = 'Phone number must be 10 digits.';
        return false;
    } else {
        phoneNumberError.textContent = '';
        return true;
    }
}

function validateAddress() {
    if (addressInput.value === '') {
        addressError.textContent = 'Address is required.';
        return false;
    } else {
        addressError.textContent = '';
        return true;
    }
}

function validateBirthdate() {
    if (birthdateInput.value === '') {
        birthdateError.textContent = 'Birthdate is required.';
        return false;
    } else {
        birthdateError.textContent = '';
        return true;
    }
}

function validateGender() {
    if (genderSelect.value === '') {
        genderError.textContent = 'Gender must be selected.';
        return false;
    } else {
        genderError.textContent = '';
        return true;
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword() && validatePhoneNumber() && validateAddress() && validateBirthdate() && validateGender()) {
        alert('User Registered!');
    }
});

usernameInput.addEventListener('blur', validateUsername);
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePassword);
confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
phoneNumberInput.addEventListener('blur', validatePhoneNumber);
addressInput.addEventListener('blur', validateAddress);
birthdateInput.addEventListener('blur', validateBirthdate);
genderSelect.addEventListener('change', validateGender);