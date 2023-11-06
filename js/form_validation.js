function validateEmail(emailInput, emailError) {
    var email = emailInput.value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email) {
        emailError.textContent = "Please enter an email address.";
        emailError.style.display = "block";
        return false;
    }

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        return false;
    }

    emailError.style.display = "none";
    return true;
}

function validatePassword(passwordInput, passwordError) {
    var password = passwordInput.value;

    if (!password) {
        passwordError.textContent = "Please enter a password.";
        passwordError.style.display = "block";
        return false;
    }

    if (password.length < 8) {
        passwordError.textContent = "Password should be at least 8 characters long.";
        passwordError.style.display = "block";
        return false;
    }

    passwordError.style.display = "none";
    return true;
}

function validateConfirmPassword(passwordInput, confirmPasswordInput, confirmPasswordError) {
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.style.display = "block";
        return false;
    }

    confirmPasswordError.style.display = "none";
    return true;
}

function validateLoginForm() {
    var emailInput = document.querySelector(".login .input[type='email']");
    var emailError = document.querySelector(".login .email-error");
    var passwordInput = document.querySelector(".login .password");
    var passwordError = document.querySelector(".login .password-error");

    return validateEmail(emailInput, emailError) && validatePassword(passwordInput, passwordError);
}

function validateSignupForm() {
    var emailInput = document.querySelector(".signup .input[type='email']");
    var emailError = document.querySelector(".signup .email-error");
    var passwordInput1 = document.querySelector(".signup .input[type='password']");
    var passwordError1 = document.querySelector(".signup .password-error:first-of-type");
    var passwordInput2 = document.querySelectorAll(".signup .input[type='password']")[1];
    var passwordError2 = document.querySelector(".signup .password-error:last-of-type");

    var isValid = true;

    if (!validateEmail(emailInput, emailError)) {
        isValid = false;
    }

    if (!validatePassword(passwordInput1, passwordError1)) {
        isValid = false;
    }

    if (!validateConfirmPassword(passwordInput1, passwordInput2, passwordError2)) {
        isValid = false;
    }

    return isValid;
}