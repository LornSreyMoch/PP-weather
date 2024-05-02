


// let Emails = ["soychanleakhena@gmail.com", "leakhena"];

// function checkEmail(emails) {
//     for (let i = 0; i < emails.length; i++) {
//         if (emails[i].includes("@") && emails[i].length >= 8) {
//             console.log(emails[i] + " ", true);
//         } else {
//             console.log(emails[i] + " ", false);
//         }
//     }
// }

// // Example usage:
// checkEmail(Emails);


function isLoggedIn() {
    try {
       
        const loggedIn = localStorage.getItem('isLoggedIn');
        if (loggedIn === 'true') {
           
            return true;
        } else {
         
            return false;
        }
    } catch (error) {
       
        console.error('Error checking user login status:', error);
        return false;
    }
}







