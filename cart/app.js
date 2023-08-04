function loadMovies() {
    fetch('http://localhost:3000/movies')//making request to fetch movies
        .then(response => response.json())//Converting movie details into json after response received
        .then(movies => {
            const moviesList = document.getElementById('moviesList'); //getting movielist
            moviesList.innerHTML = ''; //making movieList empty

            movies.forEach(movie => {
                const row = document.createElement('tr');//creating tr element for every movie
                row.innerHTML = ` 
                                <td>${movie.id}</td>
                                <td>${movie.title}</td>
                                <td>${movie.genre}</td>
                                <button onclick="editMovie(${movie.id})">Edit</button>
                                <button onclick="deleteMovie(${movie.id})">Delete</button>
                                </td>`;
                moviesList.appendChild(row); //appending tr element to movielist
            });
        })
        
        .catch(error => console.error(error)); //checking for error
}
// Add a new movie
function addMovie(event) {
    event.preventDefault(); //prevents default submission

    const form = document.getElementById('addMovieForm'); //getting dom element
    const title = form.title.value; //getting values in input field
    const genre = form.genre.value;

    fetch('http://localhost:3000/movies', { //releasing endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, genre })
    })
        .then(() => { //resetting and reloding form after request is successful
            form.reset();
            loadMovies();
        })
        .catch(error => console.error(error));//checking for error
}

// Edit a movie
function editMovie(movieId) { //getting movie info from user
    const newTitle = prompt('Enter the new title:');
    const newGenre = prompt('Enter the new genre:');

    fetch(`http://localhost:3000/movies/${movieId}`, { //making fetch request
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: newTitle, genre: newGenre })
    })
        .then(() => loadMovies()) //reloading new movies after the request
        .catch(error => console.error(error));
}

// Delete a movie
function deleteMovie(movieId) {
    if (confirm('Are you sure you want to delete this movie?')) {
        fetch(`http://localhost:3000/movies/${movieId}`, { //making delete request
            method: 'DELETE'
        })
            .then(() => loadMovies()) //reloading movies
            .catch(error => console.error(error)); //checking error
    }
}

// Load movies on page load
document.addEventListener('DOMContentLoaded', () => { //loading movie list on page reload
    loadMovies();
    const addMovieForm = document.getElementById('addMovieForm');
    addMovieForm.addEventListener('submit', addMovie);
});