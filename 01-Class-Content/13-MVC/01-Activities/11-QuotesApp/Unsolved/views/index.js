const app = require("./app.js"),
const allQuotes = require("./allQuotes.js");
const singleQuote = require("./singleQuote.js");
module.exports = {
    allQuotes: function(props){
        return app(allQuotes(props));
    },
    singleQuote: function(props){
        return app(singleQuote(props));
    },
}