const express = require("express");
const mysql = require("mysql");

const escapeHTML = require("escape-html");
const views = require("./views");

const app = express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve all the static files in the public folder
app.use(express.static("public"));


const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Serve the resulting html from `views.allQuotes` to the root route, populated with all quote data.
app.get("/", function(req, res) {
  // Note: take a look at the views/index.js file, how is it different from before?
});

// Serve the resulting html from `views.singleQuote` to the root route, populated with all quote data.
app.get("/:id", function(req, res) {
  // Note: take a look at the views/index.js file, how is it different from before?
});

// Create a new quote using the data posted from the front-end.
app.post("/api/quotes", function(req, res) {
  // Make sure to sanitize the input from the request by using escapeHTML
});

// Delete a quote based off of the ID in the route URL.
app.delete("/api/quotes/:id", function(req, res) {
  

});

// Update a quote.
app.put("/api/quotes/:id", function(req, res) {
  // Make sure to sanitize the input from the request by using escapeHTML
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
