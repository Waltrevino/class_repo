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
  password: "dbpassword",
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
  console.log("You should be here");
  connection.query("SELECT * FROM quotes;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    // Since the "app" piece is already included in the function we call, we don't need to remember to use it here
    res.send(views.allQuotes({ quotes: data }));
  });
  
});

// Serve the resulting html from `views.singleQuote` to the root route, populated with all quote data.
app.get("/:id", function(req, res) {
  console.log("You should NOT be here");
  connection.query("SELECT * FROM quotes where id = ?", [req.params.id], function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    // the variable `quote` now contains the information in data[0] through destructuring
    // it could also be written `const quote = data[0];
    const [quote] = data;
    res.send(views.singleQuote(quote));
  });
});

// Create a new quote using the data posted from the front-end.
app.post("/api/quotes", function(req, res) {
  // Make sure to sanitize the input from the request by using escapeHTML
  const author = escapeHTML(req.body.author);
  const quote = escapeHTML(req.body.quote);
  connection.query("INSERT INTO quotes (author, quote) VALUES (?, ?)", [author, quote], function(
    err,
    result
  ) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }

    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// Delete a quote based off of the ID in the route URL.
app.delete("/api/quotes/:id", function(req, res) {
  connection.query("DELETE FROM quotes WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Update a quote.
app.put("/api/quotes/:id", function(req, res) {
  // Make sure to sanitize the input from the request by using escapeHTML
  const author = escapeHTML(req.body.author);
  const quote = escapeHTML(req.body.quote);
  connection.query(
    "UPDATE quotes SET author = ?, quote = ? WHERE id = ?",
    [author, quote, req.params.id],
    function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        console.log(err);
        return res.status(500).end();
      }
      else if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
