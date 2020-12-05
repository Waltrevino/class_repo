// Dependencies
const express = require("express");
const mysql = require("mysql");

// Create express app instance.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "dbpassword",
  database: "theOfficeDB"
});


function renderCharacters(props){
    const { title, characters} = props;
    return `
    <html>
        <head>
            <title>${title}</title>
        </head>
        <body>
            <h1>${title}</h1>
            <ul>
                ${
                    characters.map(character => {
                        return `
                            <li>
                                <p>ID: ${character.id}</p>
                                <p>Name: ${character.name}</p>
                                <p>Coolness Points: ${character.coolness_points}</p>
                                <p>Attitude: ${character.attitude}</p>
                            </li>
                        `
                    }).join("\n")
                }
            </ul>
        </body>
    </html>
`
}
// Routes go here
app.get("/", function(req, res){
    res.send("Welcome to The Office DB!")
});

app.get("/cast", function(req, res){
    connection.query("SELECT * FROM characters", function(err, characters){
        res.send(renderCharacters({title: "Cast", characters }));
    })
});

app.get("/coolness-chart", function(req, res){
    connection.query("SELECT * FROM characters ORDER BY coolness_points DESC", function(err, characters){
        res.send(renderCharacters({title: "Coolness Chart", characters }));
    })
});

app.get("/attitude-chart/:attitude", function(req, res){
    connection.query("SELECT * FROM characters WHERE attitude = ?", [req.params.attitude], function(err, characters){
        res.send(renderCharacters({title: req.params.attitude + " Chart", characters }));
    })
});
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});