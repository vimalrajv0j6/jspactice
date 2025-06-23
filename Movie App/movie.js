const apiKey = "33fc42d";
const getMovie = document.getElementById("getMovie");

getMovie.addEventListener("click", function () {
  const title = document.getElementById("movieInput").value.trim();
  const movieDetails = document.getElementById("movieDetails");

  if (!title) {
    return alert("Please Enter the Movie Name!...");
  }

  fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // For debugging

      if (data.Response === "False") {
        movieDetails.innerHTML = `<p>❌ Movie not found!</p>`;
        return;
      }

      movieDetails.innerHTML = `
        <img id="moviePoster" src="${data.Poster}" alt="Movie Poster" />
        <div class="info">
          <h2>${data.Title} (${data.Year})</h2>
          <p><strong>Genre:</strong> ${data.Genre}</p>
          <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
          <p><strong>Plot:</strong> ${data.Plot}</p>
          <p><strong>Rated:</strong> ${data.Rated}</p>
          <p><strong>Box Office:</strong> ${data.BoxOffice}</p>
          <p><strong>Director:</strong> ${data.Director}</p>
        </div>`;
    })
    .catch((err) => {
      movieDetails.innerHTML = `<p>⚠️ Error fetching data!</p>`;
      console.error(err);
    });
});
