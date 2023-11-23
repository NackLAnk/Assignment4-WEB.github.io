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

function validateLoginForm() {
    var emailInput = document.querySelector(".login .input[type='email']");
    var emailError = document.querySelector(".login .email-error");
    var passwordInput = document.querySelector(".login .password");
    var passwordError = document.querySelector(".login .password-error");

    return validateEmail(emailInput, emailError) && validatePassword(passwordInput, passwordError);
}

var currentTab = 0;
showTab(currentTab);

function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    fixStepIndicator(n)
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length - 1) {
        document.getElementById("reloadMessage").style.display = "block";

        setTimeout(function () {
            move();
        }, 1800)

        setTimeout(function () {
            document.getElementById("reloadMessage2").style.display = "block";
        }, 2400)

        setTimeout(function () {
            location.reload();
        }, 3000);
        return false;
    }
    showTab(currentTab);
}

function validateInput(input, pattern, errorId) {
    var errorMessageElement = document.getElementById(errorId);
    if (!pattern.test(input.value)) {
        switch (errorId) {
            case 'errorFirstName':
                errorMessageElement.innerHTML = "First name should contain at least 4 letters";
                break;
            case 'errorLastName':
                errorMessageElement.innerHTML = "Last name should contain at least 4 letters";
                break;
            case 'errorEmail':
                errorMessageElement.innerHTML = "Enter a valid email address";
                break;
            case 'errorPhone':
                errorMessageElement.innerHTML = "Enter a valid 11-digit phone number";
                break;
            case 'errorLogin':
                errorMessageElement.innerHTML = "Use only letters and least 6 characters, numbers, and underscores for the login";
                break;
            case 'errorPassword':
                errorMessageElement.innerHTML = "Password should contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long";
                break;
            default:
                errorMessageElement.innerHTML = "Invalid input";
                break;
        }

        input.className = 'invalid';
    } else {
        errorMessageElement.innerHTML = "";
        input.className = '';
    }
}


function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");

    var patterns = {
        "fname": /^[a-zA-Z]{4,}$/,
        "lname": /^[a-zA-Z]{4,}$/,
        "email": /^\S+@\S+\.\S+$/,
        "phone": /^\d{11,}$/,
        "login": /^[a-zA-Z0-9_]{6,}$/,
        "password": /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    };

    for (i = 0; i < y.length; i++) {
        var inputType = y[i].placeholder.toLowerCase();
        var pattern = patterns[inputType] || /^[a-zA-Z]+$/;

        if (!pattern.test(y[i].value)) {
            y[i].className += " invalid";
            valid = false;
        }
    }

    return valid;
}

function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}

var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 3);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}