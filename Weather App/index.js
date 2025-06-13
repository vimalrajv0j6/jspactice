const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
const weatherBtn = document.getElementById("getWeatherBtn");

weatherBtn.addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("weatherResult").classList.remove("hidden");
      document.getElementById("cityName").textContent = `Weather in ${data.name}, ${data.sys.country}`;
      document.getElementById("temp").textContent = `🌡️ Temp: ${data.main.temp} °C`;
      document.getElementById("desc").textContent = `🌤️ Condition: ${data.weather[0].description}`;
      document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
    })
    .catch(error => {
      alert("Error: " + error.message);
      document.getElementById("weatherResult").classList.add("hidden");
    });
});
