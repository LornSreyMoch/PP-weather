export default async function fet() {
  const url =
    "https://weatherapi-com.p.rapidapi.com/current.json?q=phnom%20penh";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a1bc00386fmshc7128e66cc6abb4p16bea9jsn72d4d40e48bc",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    let card = document.getElementById("box");
    card.innerHTML += `
        <div class="container text-center">
            <div class="row row-cols-2"
                style="width: 800px; margin: auto; margin-top: 30px; background-color: rgb(221, 220, 220); border-radius: 20px;">
                <div class="col1">Weather</div>
                <div class="col2">
                    Conditions</div>
                <div class="col3">
                    <p>${data.location.localtime}</p>
                    <div class="h2">
                        <img src="${data.current.condition.icon}" alt="" style="height: 120px; 
                        width: 120px; 
                        margin-top: 5px; 
                        margin-left: -35%;">
                    </div>
                    <div class="c">
                        <div class="h3">${data.current.temp_c}</div>
                        <p>&deg;C</p>
                    </div>
                    <div class="h4">
                    "${data.current.condition.text}
                    "</div>
                </div>
                <div style="padding: 30px; height: 400px; margin-left: -1%; font-size: 22px; font-weight: 400; text-align: left; line-height: 2;"
                    class="col4">
                    <div class="on">
                        <div class="b1">Feels Like<br> Humidity <br> Wind (Kph) <br> UV
                            <br> </div>
                        <div class="b2">
                        ${data.current.feelslike_c} C <br>
                        ${data.current.humidity}%<br>
                        ${data.current.gust_kph}<br>
                        ${data.current.uv}
                        </div>
                    </div>
                    <hr>
                    <div class="under">
                        <div class="m1">County <br> Zone</div>
                        <div class="m2">
                        ${data.location.country}<br>
                        ${data.location.tz_id}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="reaction">
            <button style="width: 220px; height: 55px; font-size: 22px; border-radius: 10px;margin: auto; " type="button"
                class="btn btn-primary">Share Reaction</button>
        </div>
        <div class="paragraph">3 Days Forecast Weathers</div>
        `;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
fet();
