const apiKey = "33fc42d";
const getMovie = document.getElementById("getMovie");

getMovie.addEventListener("click", () => {
  const title = document.getElementById("movieInput").value.trim();
  const movieDetails = document.getElementById("movieDetails");

  if (!title) return alert("Please Enter the Movie Name!...");

  fetch(
    `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`
  )
    .then((res) => res.json())
    .then((movie) => {
      if (movie.Response === "False") {
        movieDetails.innerHTML = `<p>❌ Movie not found!</p>`;
        return;
      }

      const boxOffice = movie.BoxOffice || "$0";
      const usdAmount = parseFloat(boxOffice.replace(/[^0-9.]/g, ""));

      fetch("https://api.exchangerate-api.com/v4/latest/USD")
        .then((res) => res.json())
        .then((data) => {
          const inrRate = data.rates.INR;
          const inrAmount = Math.round(usdAmount * inrRate).toLocaleString();

          movieDetails.innerHTML = `
            <img src="${movie.Poster}" alt="Movie Poster" />
            <h2>${movie.Title} (${movie.Year})</h2>
            <p><strong>Genre:</strong> ${movie.Genre}</p>
            <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <p><strong>Box Office:</strong>  ₹${inrAmount}</p>
          `;
        });
    })
    .catch((err) => {
      movieDetails.innerHTML = `<p>⚠️ Error fetching data!</p>`;
      console.error(err);
    });
});
