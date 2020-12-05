module.exports = function(movies){
return `
<h1>Movies To Watch</h1>

<ul>
  ${movies.map(movie => {
    return `
      <li>
        <p>
          ${movie.id}. ${movie.movie}

          <button data-movieid="${movie.id}" class="delmovie">Delete</button>
        </p>
      </li>
    `
  }).join("\n")}
</ul>

<h2>Add a Movie to Watch</h2>
<form id="addmovie" class="button-size">
	<textarea type="text" name="movie"></textarea>
	<button type="submit">Save Movie!</button>
</form>

<h2>Update a Movie</h2>
<form id="updatemovie" class="button-size">
  <input type="text" name="id" placeholder="id">
	<textarea type="text" name="movie" placeholder="what do you want to update this movie title to?"></textarea>
	<button type="submit">Update Movie!</button>
</form>

<script type="text/javascript">
  $(".delmovie").on("click", function(event) {
    var id = $(this).data("movieid");

    // Send the DELETE request.
    $.ajax("/api/movies/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#addmovie").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newMovie = {
      movie: $("#addmovie [name=movie]").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/movies", {
      type: "POST",
      data: newMovie
    }).then(
      function() {
        console.log("added new movie");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#updatemovie").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var id = $("[name=id]").val().trim();

    var updatedMovie = {
      movie: $("#updatemovie [name=movie]").val().trim()
    };

    // Send the PUT request.
    $.ajax("/api/movies/" + id, {
      type: "PUT",
      data: updatedMovie
    }).then(
      function() {
        console.log("updated id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
</script>
`
}