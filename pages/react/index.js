async function results() {
  const url = "https://weather-backend-kappa.vercel.app/reactions";
  const options = {
    method: "GET",
    headers: {
      "api-key":
        "321dd35cfdb912208ad17ff541fa5335170e957ef19362431897d25599b703d0",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    async function handleSubmit(event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const submittedData = {
        rating: formData.get("rating"),
        comment: formData.get("comment"),
      };

      const htmlContent = `
        <p style="font-size: 25px;">${submittedData.rating}</p>
        <p style="font-size: 25px;">${submittedData.comment}</p>
      
    `;

      const mresult = document.getElementById("result");
      mresult.innerHTML = htmlContent;
    }

    const form = document.querySelector(".form");
    form.addEventListener("submit", handleSubmit);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

results();



 







