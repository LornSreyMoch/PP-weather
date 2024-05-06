const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    
    fetch('https://weather-backend-kappa.vercel.app/reactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': '321dd35cfdb912208ad17ff541fa5335170e957ef19362431897d25599b703d0'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));
});

