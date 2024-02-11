function displayInput() {
    const mobileNumber = document.getElementById("mobile_number").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    // Perform basic input validation:
    if (!validateMobileNumber(mobileNumber)) {
        alert("Invalid mobile number. Please enter only digits.");
        return;
    }
    if (username.length < 6) {
        alert("Username must be at least 6 characters long.");
        return;
    }
    if (!validateEmail(email)) {
        alert("Invalid email format. Please enter a valid email address.");
        return;
    }

    // Construct formatted message:
    const message = `Mobile Number: ${mobileNumber}\nUsername: ${username}\nEmail: ${email}`;

    // Display entered values in an alert box:
    alert(message);
}

// Add optional input validation functions (can be customized):
function validateMobileNumber(mobileNumber) {
    // You can modify the regular expression to allow/disallow specific formats as needed:
    return /^\d+$/.test(mobileNumber);
}

function validateEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}