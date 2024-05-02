
const loginBtn = document.getElementById("login");

loginBtn.onclick = function(){
    let email = document.getElementById("email").value; 
    console.log("Email: ", email);

    localStorage.setItem("email", email);

    let storedEmail = localStorage.getItem("email");
    console.log("Stored Email: ", storedEmail);

    alert("Logged in successfully!");
}
function getEmailFromLocalStorage() {
    return localStorage.getItem("email");
  }
  
