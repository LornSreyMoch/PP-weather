async function weathers() {
  const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Phnom%20Penh&days=3';
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '3e172dab56msh805c36bcaf193d4p1733dbjsncbce39a46de1',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
  };

  try {
	const response = await fetch(url, options);
	const result = await response.json();

      const forecast = document.getElementById("weather");

      for (let i = 1; i < 3; i++) { 
          forecast.innerHTML += `
          <div class="container text-center">
              <div class="row row-cols-2"
                  style="width: 800px; margin: auto; margin-top: 30px; background-color: rgb(221, 220, 220); border-radius: 20px; background-color:rgb(255, 255, 216)">
                  <div class="col1">Weather</div>
                  <div class="col2">Conditions</div>
                  <div class="col3">
                      <p>${result.forecast.forecastday[i].date}</p>
                      <div class="h2">
                          <img src="${result.forecast.forecastday[i].day.condition.icon}" alt="" style="height: 120px; 
                          width: 120px; 
                          margin-top: 5px; 
                          margin-left: -35%;">
                      </div>
                      <div class="c">
                          <div class="h3">${result.forecast.forecastday[i].day.maxtemp_c}</div>
                          <p>&deg;C</p>
                      </div>
                      <div class="h4">
                          "${result.forecast.forecastday[i].day.condition.text}"
                      </div>
                  </div>
                  <div style="padding: 30px; height: 400px; margin-left: -1%; font-size: 22px; font-weight: 400; text-align: left; line-height: 2;"
                      class="col4">
                      <div class="on">
                          <div class="b1">Feels Like<br> Humidity <br> Wind (Kph) <br> UV
                              <br> </div>
                          <div class="b2">
                              ${result.forecast.forecastday[i].day.avgtemp_c}C<br />
                              ${result.forecast.forecastday[i].day.avghumidity}% <br />
                              ${result.forecast.forecastday[i].day.maxwind_kph}  <br />
                              ${result.forecast.forecastday[i].day.uv}  <br />
                          </div>
                      </div>
                      <hr />
                      <div class="under">
                          <div class="m1">County <br /> Zone</div>
                          <div class="m2">
                              ${result.location.country}<br />
                              ${result.location.tz_id}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          `;
      }
      console.log(result);
  } catch (error) {
      console.error(error);
  }
};

export default weathers; 
weathers();
