// let passwords = ["soychanleakhena@gmail.com","leakhena"]
// function checkPassword(password){
//     for(let i=0; i<password.length; i++){
//        if((password[i]===("@")||password[i]===("!")||password[i]===("?"))
//        &&(password[i]>=8)){
//           console.log(password[i]+" ",true);
//        }
//        else{
//           console.log(password[i]+" ",false);
//        }
//     }
    
   
 
//  }
//  checkPassword(passwords);
// function checkPassword(password) {
//     for (let i = 0; i < password.length; i++) {
//         if ((password[i].includes("@") || password[i].includes("!") || password[i].includes("?")) && password[i].length >= 8) {
//             console.log(password[i] + " ",true);
//         } else {
//             console.log(password[i] + " ",false);
//         }
//     }
// }

// // Example usage:
// let passwords = ["soychanleakhena@gmail.com", "leakhena"];
// checkPassword(passwords);






// function getEmailFromLocalStorage() {
//     // Check if local storage is supported
//     if (typeof(Storage) !== "undefined") {
//         // Retrieve email from local storage
//         let email = localStorage.getItem('email');
//         if (email) {
//             console.log("Email retrieved from local storage:", email);
//             return email;
//         } else {
//             console.log("No email found in local storage.");
//             return null;
//         }
//     } else {
//         console.log("Sorry, local storage is not supported in this browser.");
//         return null;
//     }
// }

// // Example usage
// let storedEmail = getEmailFromLocalStorage();
// if (storedEmail) {
//     console.log("Logged in with email:", storedEmail);
// } else {
//     console.log("No email login found.");
// }





// let passwords = ["soychanleakhena@gmail.com", "leakhena"];

// function checkPassword(password) {
//    for(let i=0; i<password.length; i++){
//       if((password[i]===("@")||password[i]===("!")||password[i]===("?"))
//           &&(password[i]>=8))
//         // Check if password contains '@', '!', or '?'
//         console.log(password[i] + " ",true);
//         } else  {
//           console.log(password[i] + " ",false)
//         }

        
//       }

// checkPassword(passwords);

// function checkPassword(password) {

//    // Regular expression pattern for validating email addresses
//    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
//    // Test if the email matches the pattern and return the result
//    return pattern.test(password);
// }

// // Example usage:
// let email1 = "user@example.com";
// let email2 = "invalid_email.com";

// console.log(checkPassword(email1)); // Output: true
// console.log((email2)); // Output: false




// let passwords = ["soychanleakhena@gmail.com", "leakhena"];

// function checkPasswords(passwords) {
//     for (let i = 0; i < passwords.length; i++) {
//         let password = passwords[i];
//         let isValid = false;
//         for (let j = 0; j < password.length; j++) {
//             if ((password[j] === "@" || password[j] === "!" || password[j] === "?") && password.length >= 8) {
//                 isValid = true;
//                 break;
//             }
//         }
//         console.log(`${password}: ${isValid}`);
//     }
// }

// checkPasswords(passwords);


// function isLoggedIn() {
//     // Retrieve the value of the session variable 'isLoggedIn'
//     let isLoggedInValue = sessionStorage.getItem('isLoggedIn');

//     // Check if the value is 'true' and return the corresponding boolean value
//     if (isLoggedInValue === 'true') {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Example usage:
// if (isLoggedIn()) {
//     console.log("User is logged in.");
// } else {
//     console.log("User is not logged in.");
// }



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