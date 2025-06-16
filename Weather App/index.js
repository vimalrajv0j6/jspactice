var cityInput = document.getElementById('cityInput');
  var getWeatherBtn = document.getElementById("getWeatherBtn");

  getWeatherBtn.addEventListener("click", function () {
    const city = cityInput.value.trim();
    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    // Step 1: Convert city name to coordinates
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          const lat = data[0].lat;
          const lon = data[0].lon;
          console.log(`Latitude: ${lat}, Longitude: ${lon}`);

          // Step 2: Get weather using coordinates
          fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
          )
            .then((res) => res.json())
            .then((weatherData) => {
              const weather = weatherData.current_weather;
              console.log("Weather:", weather);
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
  });