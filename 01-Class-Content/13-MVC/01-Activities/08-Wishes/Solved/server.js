// AS A wishy person
// I WANT TO keep track of my wishes
// SO THAT John Cena can see them
const express = require("express");
const mysql = require("mysql");
const views = require("./views");
const PORT = process.env.PORT || 3000;

const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "dbpassword",
    database: "wishes_db"
});
connection.connect(err => {
    if(err){
        console.error("error connecting to DB", err);
        return;
    }

    console.log("connected to DB");
})

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", function(req, res){
    connection.query("SELECT * FROM wishes", function(err, data){
        if(err){
            throw err;
        }
        res.send(views.app({wishes: data }));
    });
    
})

app.post("/", function(req, res){
    const wish = req.body.wish;
    console.log(req.body);
    connection.query("INSERT INTO wishes (wish) VALUES (?)", [wish], function(err){
        if(err){
            throw err;
        }
        res.redirect("/");
    });
})



app.listen(PORT, () => console.log("Listening on PORT " + PORT));