const express = require("express");
const mysql = require("mysql");
const escapeHtml = require("escape-html");
const views = require("./views");
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "task_saver_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Root get route
app.get("/", function(req, res) {
  connection.query("SELECT * FROM tasks;", function(err, data) {
    if (err) throw err;

    res.send(
      views.app(
        views.tasks({tasks: data})
      )
    )
  });
});

// Post route -> back to home
app.post("/", function(req, res) {
  // Escapes the input from the user to help avoid XSS attacks
  // https://www.wikiwand.com/en/Cross-site_scripting
  const escapedInput = escapeHtml(req.body.task);
  
  // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
  // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
  // https://en.wikipedia.org/wiki/SQL_injection
  
  connection.query("INSERT INTO tasks (task) VALUES (?)", [escapedInput], function(err, result) {
    if (err) throw err;
    res.redirect("/");
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
