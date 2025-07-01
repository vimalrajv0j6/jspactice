var cityInput = document.getElementById("cityInput");
var getWeatherBtn = document.getElementById("getWeatherBtn");
var cityName = document.getElementById("cityName");
var temp = document.getElementById("temp");
var windSpeed = document.getElementById("windSpeed");
var windDirection = document.getElementById("windDirection");
var weatherResult = document.getElementById("weatherResult");

getWeatherBtn.addEventListener("click", function () {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        const lat = data[0].lat;
        const lon = data[0].lon;
        console.log(data);
        

        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        )
          .then((res) => res.json())
          .then((weatherData) => {
            const report = weatherData.current_weather;
            const wind = report.winddirection;
            const dir = getCompassDirection(wind)
            // Update UI
            cityName.innerHTML = `City name :${city}`;
            temp.innerHTML = `🌡️ Temperature: ${report.temperature} °C`;
            windSpeed.innerHTML = `💨 Wind Speed: ${report.windspeed} km/h`;
            windDirection.innerHTML = `🧭 Wind Direction: ${dir} (${report.winddirection}°)`;
            console.log(weatherData);
            
            // Show weather result
            weatherResult.classList.remove("hidden");
          })
          .catch((error) => {
            console.log("Weather API Error:", error);
          });
      } else {
        alert("City not found.");
      }
    })
    .catch((err) => {
      console.log("Error fetching coordinates:", err);
    });
    function getCompassDirection(degree) {
  const directions = [
    "North", "North-East", "East", "South-East",
    "South", "South-West", "West", "North-West"
  ];
  const index = Math.round(degree / 45) % 8;
  return directions[index];
}
});
