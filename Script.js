const API_KEY = "29a24027b666fe8a59d64d41071277d8";

function getWeather() {
  const city = document.getElementById("cityInput").value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const weatherDiv = document.getElementById("weatherResult");
      weatherDiv.innerHTML = `
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerText = "City not found!";
    });
}
