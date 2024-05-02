async function weathers(){
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

for (let i = 0; i < 2; i++) {
  forecast.innerHTML+= `
       
      <div class="container text-center">
      <div class="row row-cols-2" style=" background-color: rgb(255, 249, 212); ">
        <!-- Existing weather box -->
        <div class="col">Weather</div>
        <div class="col">Conditions</div>
        <div class="col">
          <div class="h1">${result.forecast.forecastday[i].date}</div>
          <div class="h2">
            <img src= "//cdn.weatherapi.com/weather/64x64/day/176.png" style="width:130px;height:130px;" >
          </div>
          <div class="c">
            <div class="h3">${result.forecast.forecastday[i].day.maxtemp_c}</div>
            <p>&deg;C</p>
          </div>
          <div class="h4">"${result.forecast.forecastday[i].day.condition.text}"</div>
        </div>
        <div class="col1">
          <div class="on">
            <div class="b1">
              Feels Like<br />
              Humidity <br />
              Wind (Kph) <br />
              UV <br />
            </div>
            <div class="b2">
              ${result.forecast.forecastday[i].day.avgtemp_c}C<br />
              ${result.forecast.forecastday[i].day.avghumidity} % <br />
              ${result.forecast.forecastday[i].day.maxwind_kph}  <br />
              ${result.forecast.forecastday[i].day.uv}  <br />
            </div>
          </div>
          <hr />
          <div class="under">
            <div class="m1">
              County <br />
              Zone
            </div>
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
weathers();

