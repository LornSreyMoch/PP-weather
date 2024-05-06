document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let email = document.getElementById("email").value; 
    console.log("Email: ", email);

    if (isValidEmail(email)) {
        localStorage.setItem("email", email);
        window.location.href = "../pages/home/index.html";
    } else {
        alert("Login failed! Please enter a valid email address.");
        
    }
    
});

function isValidEmail(email) {
    return (email.includes("@") || email.includes("!") || email.includes("?")) && email.length >= 8;
}

window.onload = function() {
   localStorage.getItem("email");
};
