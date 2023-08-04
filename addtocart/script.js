const movieListElem = document.getElementById('movieList');
const movieDetailsElem = document.getElementById('movieDetails');
const searchInput = document.getElementById('searchInput');

// Replace this with your JSON server URL
const apiBaseUrl = 'http://localhost:3000/movies';

// Function to fetch movie data from the JSON server
async function fetchMovies() {
  try {
    const response = await fetch(apiBaseUrl);
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

// Function to render the list of movies
function renderMovieList(movies) {
  movieListElem.innerHTML = '';
  movies.forEach(movie => {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');
    movieItem.textContent = movie.title;
    movieItem.addEventListener('click', () => showMovieDetails(movie));
    movieListElem.appendChild(movieItem);
  });
}

// Function to show movie details
function showMovieDetails(movie) {
  movieDetailsElem.innerHTML = `
    <h2>${movie.title}</h2>
    <p>Director: ${movie.director}</p>
    <p>Year: ${movie.year}</p>
    <p>Genre: ${movie.genre}</p>
    <!-- Add more movie details here -->
  `;
}

// Function to handle search input
function handleSearchInput() {
  const searchTerm = searchInput.value.toLowerCase();
  fetchMovies().then(movies => {
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    renderMovieList(filteredMovies);
  });
}

// Event listener for search input
searchInput.addEventListener('input', handleSearchInput);

// Initial load - fetch and render movies
fetchMovies().then(renderMovieList);
