function checkPassword() {
    let email = document.getElementById("email").value;

    // Check if the email meets the criteria directly inside the if condition
    if ((email.includes("@") || email.includes("!") || email.includes("?")) && email.length >= 8) {
        alert("Login successful!");
    } else {
        alert("Login failed! Please enter a valid email address.");
    }
}

// Add event listener to the login button
document.getElementById("loginButton").addEventListener("click", checkPassword);

