// script.js

// To access the stars
let stars = 
	document.getElementsByClassName("star");
let output = 
	document.getElementById("output");

// Funtion to update rating
function gfg(n) {
	remove();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one";
		else if (n == 2) cls = "two";
		else if (n == 3) cls = "three";
		else if (n == 4) cls = "four";
		else if (n == 5) cls = "five";
		stars[i].className = "star " + cls;
	}
	output.innerText = "Rating is: " + n + "/5";
}

// To remove the pre-applied styling
function remove() {
	let i = 0;
	while (i < 5) {
		stars[i].className = "star";
		i++;
	}
}

const formEl = document.querySelector('.form');

formEl.addEventListener('Submit', event => {
    event.preventDefault();

    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    
    fetch('https://weather-backend-kappa.vercel.app/reactions',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': '321dd35cfdb912208ad17ff541fa5335170e957ef19362431897d25599b703d0'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
});


fetch('https://weather-backend-kappa.vercel.app/reactions',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'api-key': '321dd35cfdb912208ad17ff541fa5335170e957ef19362431897d25599b703d0'
        },
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
