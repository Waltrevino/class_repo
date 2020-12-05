// Dependencies
var express = require("express");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Data
var lunches = [
  {
    lunch: "Beet & Goat Cheese Salad with minestrone soup."
  }, {
    lunch: "Pizza, two double veggie burgers, fries with a Big Gulp"
  }
];
const view = require("./views");
app.get("/", function(req, res){
  res.send(view.app(`
      <h1>Index</h1>
      <a href="/weekday">Weekday Lunch</a>
      <a href="/weekend">Weekend Lunch</a>
      <a href="/lunches">All Lunches</a>
    `
  ));
})
// Routes
app.get("/weekday", function (req, res) {
  const { oneLunch, app } = view;

  res.send(app(oneLunch(lunches[0])))
});

app.get("/weekend", function (req, res) {
  const { oneLunch, app } = view;
  res.send(app(oneLunch(lunches[1])))
});

app.get("/lunches", function (req, res) {
  const { allLunches, app } = view;
  res.send(
    app(
      allLunches({
        eater: "david",
        foods: lunches
      })
    )
  );
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
