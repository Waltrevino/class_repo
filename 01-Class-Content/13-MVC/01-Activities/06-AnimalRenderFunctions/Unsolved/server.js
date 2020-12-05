const express = require("express");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

const views = require("./views");

const animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/dog", function(req, res) {
  // We need to pass the dog object in animals[0] to the dog.js render function
  // We then need to pass resulting html string  to the app render function and return the whole html

  // 1. Send the total html rendered by dog.js and app.js to the front-end
});

app.get("/all-pets", function(req, res) {
  // We need to pass *some* of the members of the animals array to the allAnimals render function
  // We then need to pass the resulting html string to the app render function and return the whole html

  // 2. Send the the total (pet) html rendered by allAnimals.js and app.js to the front-end
  // Note: Remember that allAnimals is expecting an array and not an object. (you will need to use map and join)

});

app.get("/all-non-pets", function(req, res) {
  // We need to pass *some* of the members of the animals array to the allAnimals render function

  // 3. Send the the total (non-pet) html rendered by allAnimals.js and app.js to the front-end

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
