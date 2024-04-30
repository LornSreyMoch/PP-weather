
// let previousEmail = null; // Variable to store the previously used email

// function checkPassword() {
//     let email = document.getElementById("email").value;

//     // Check if the email meets the criteria directly inside the if condition
//     if ((email.includes("@") || email.includes("!") || email.includes("?")) && email.length >= 8) {
//         // If the email is the same as the previous one, directly log in the user
//         if (email === previousEmail) {
//             // Set isLoggedIn to true in localStorage
//             localStorage.setItem('isLoggedIn', true);
//             alert("User is logged in.");
//         } else {
//             // Set the previous email to the current one
//             previousEmail = email;
//             alert("Login successful!");
//         }
//     } else {
//         alert("Login failed! Please enter a valid email address.");
//     }
// }

// // Add event listener to the login button
// document.getElementById("loginButton").addEventListener("click", checkPassword);



function deleteEmailLoginFromLocalStorage() {
    try {
        // Attempt to remove the 'isLoggedIn' key from local storage
        localStorage.removeItem('isLoggedIn');
        
        // Log a message indicating successful deletion
        console.log("Email login information deleted from local storage.");
    } catch (error) {
        // If an error occurs during deletion, catch it and log an error message
        console.error("Error deleting email login information from local storage:", error);
    }
}

