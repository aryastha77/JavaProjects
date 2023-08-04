var page = 1;
var totalMovies = 0;
var totalResponse = 0;

function ajaxOmdb() {
  var myinput = document.getElementById("myinput").value;
  var myapicaller = new XMLHttpRequest();
  myapicaller.open(
    "GET",
    "https://www.omdbapi.com/?apikey=fd161998&s=" + myinput + "&page=" + page
  );
  myapicaller.send();
  myapicaller.onload = () => {
    if (myapicaller.status === 200) {
      var wholedata = JSON.parse(myapicaller.response);
      var responsestatus = wholedata.Response;
      totalResponse = wholedata.totalResults;

      console.log(wholedata);

      document.getElementById("responsestatus").innerHTML = responsestatus;
      document.getElementById("totalResponse").innerHTML = totalResponse;

      if (page === 1) {
        // Clear existing data
        document.querySelector(".myalldata").innerHTML = "";

        // Show the Total Response
        var totalResponseElement = document.getElementById("totalResponse");
        totalResponseElement.style.display = "block";
        totalResponseElement.innerText = "Total Results: " + totalResponse;

        // Modify the search input and icon size and position
        var searchContainer = document.querySelector(".searching");
        searchContainer.classList.add("active");

        // Show the Load More button if there are more movies to load
        if (totalResponse > 0) {
          showLoadMoreButton();
        } else {
          hideLoadMoreButton();
        }
      }

      var movieData = "";
      for (var i = 0; i < wholedata.Search.length; i++) {
        var value = wholedata.Search[i];

        movieData +=
          '<div class="movie-item">' +
          '<img src="' + value.Poster + '" alt="' + value.Title + '" class="movie-image">' +
          '<div class="movie-details">' +
          '<p>Title: ' + value.Title + '</p>' +
          '<p>Year: ' + value.Year + '</p>' +
          '</div>' +
          '</div>';
      }

      document.querySelector(".myalldata").innerHTML = movieData; // Replace existing data with new data

      totalMovies = wholedata.Search.length;

      if (totalMovies >= totalResponse) {
        hideLoadMoreButton(); // Hide the "Load More" button if all movies are loaded
      }
    } else {
      console.log(myapicaller.statusText);
    }
  };
}



function hideLoadMoreButton() {
  var loadMoreBtn = document.getElementById("LoadMoreBtn");
  loadMoreBtn.style.display = "none";
}

function loadMore() {
  page++;
  ajaxOmdb(); // Fetch data for the next page
  
  // Calculate and display the updated moviesDisplayed count
  var moviesDisplayed = Math.min(totalMovies, totalResponse);
  var loadMoreBtn = document.getElementById("LoadMoreBtn");
  loadMoreBtn.innerText = "Load More (" + moviesDisplayed + "/" + totalResponse + ")";
}

function showLoadMoreButton() {
  var loadMoreBtn = document.getElementById("LoadMoreBtn");
  loadMoreBtn.style.display = "block";
  loadMoreBtn.style.visibility = "block";
  
  // Calculate and display the initial moviesDisplayed count
  var moviesDisplayed = Math.min(totalMovies, totalResponse);
  loadMoreBtn.innerText = "Load More (" + moviesDisplayed + "/" + totalResponse + ")";
}

