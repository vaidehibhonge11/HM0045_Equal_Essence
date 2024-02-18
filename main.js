var emailArray = [];
var passwordArray = [];
var nameArray = [];
var phoneArray = [];
var addressArray = [];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");

var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

// Log in Tab click function......................................
function loginTabFun() {
    regBox.style.display = "none";
    loginBox.style.display = "block";

    loginTab.style.backgroundColor = "#f5f5f5";
    regTab.style.backgroundColor = "#ddd";
}

// Sign Up Tab click function.......................................
function regTabFun() {
    regBox.style.display = "block";
    loginBox.style.display = "none";

    regTab.style.backgroundColor = "#f5f5f5";
    loginTab.style.backgroundColor = "#ddd";
}

// Sign up Function...................................................
function register() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("re").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var address = document.getElementById("address").value.trim();
    var password = document.getElementById("rp").value.trim();
    var passwordRetype = document.getElementById("rrp").value.trim();
    var regExpEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var regExpPhone = /^[0-9]{10}$/;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    alert(name)

    // Validate Name
    if (name.length === 0) {
        alert('Please enter your Name.');
        return;
    }

    // Validate Email
    if (email.length === 0 || !email.match(regExpEmail)) {
        alert('Invalid Email');
        return;
    }

    // Validate Phone
    if (phone.length === 0 || !phone.match(regExpPhone)) {
        alert('Invalid Phone number');
        return;
    }

    // Validate Address (assuming any non-empty string is valid for Address)
    if (address.length === 0) {
        alert('Please enter your Address.');
        return;
    }

    // Validate Password
    if (password.length === 0 || (password.length < 4) || (password.length > 15) || !password.match(numbers) || !password.match(upperCaseLetters) || !password.match(lowerCaseLetters)) {
        alert('Invalid Password');
        return;
    }

    // Validate Retype Password
    if (passwordRetype === "") {
        alert("Re-write Password required.");
        return;
    } else if (password !== passwordRetype) {
        alert("Passwords don't match. Please retype your Password.");
        return;
    }

    // Check if email is already registered
    if (emailArray.indexOf(email) === -1) {
        // If not, add the new user
        emailArray.push(email);
        passwordArray.push(password);
        nameArray.push(name);
        phoneArray.push(phone);
        addressArray.push(address);

        alert(name + ", thanks for registration. \n Try to log in now");

        // Hide registration form and show login form
        regBox.style.display = "none";
        loginBox.style.display = "block";

        // Make Empty input fields
        document.getElementById("name").value = "";
        document.getElementById("re").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("address").value = "";
        document.getElementById("rp").value = "";
        document.getElementById("rrp").value = "";
    } else {
        alert(email + " is already registered. Please use a different email.");
        return;
    }
}

// Rest of the code (login, showPass, bodyload) remains the same...
