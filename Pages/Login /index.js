let previousEmail = null; 

function checkEmail() {
  let email = document.getElementById("email").value;

  if (
    (email.includes("@") || email.includes("!") || email.includes("?")) &&
    email.length >= 8
  ) {
    if (email === previousEmail) {
      localStorage.setItem("isLoggedIn", true);
      alert("User is logged in.");
    } else {
      previousEmail = email;
      alert("Login successful!");
    }
  } else {
    alert("Login failed! Please enter a valid email address.");
  }
}

document.getElementById("loginButton").addEventListener("click", checkEmail);
