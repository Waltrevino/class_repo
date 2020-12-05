// Dependencies
const express = require("express");

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Data
const icecreams = [
  {name: 'vanilla', price: 20, awesomeness: 3},
  {name: 'chocolate', price: 4, awesomeness: 8},
  {name: 'banana', price: 1, awesomeness: 1},
  {name: 'greentea', price: 5, awesomeness: 7},
  {name: 'jawbreakers', price: 6, awesomeness: 2},
  { name: "pistachio", price: 11, awesomeness: 15 }
];
const view = require("./views");
app.get("/", function(req, res){
  res.send(view.app(`
      <h1>Index</h1>
      <a href="/icecreams">Take me to the Icecreams</a>
    `
  ));
})
// Routes
app.get("/icecream/:name", function (req, res) {
  const name = req.params.name;
  const flavor = icecreams.find(icecream => icecream.name === name);
  //res.send(app(oneLunch(lunches[0])))
  if(flavor != null){
    res.send(
      view.app(
        view.oneFlavor(flavor)
      )
    );
  } else {
    res.send(view.app(`
      <h1>Flavor not found</h1>
      <a href="/icecreams">See a list of available icecreams here</a>
    `
  ));
  }
});
app.get("/icecreams", function (req, res) {
  const { allFlavors, app } = view;
  res.send(app(
    allFlavors({ flavors: icecreams})
  ))
  //res.send(app(oneLunch(lunches[0])))
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
