const quoteView = require("./partial/viewQuote.js")

module.exports = function(data){
    const { quotes } = data;
    return `
    <h1>Quotes App</h1>
    <p>Manage quotes with this app</p>

    <!-- Pass in data from server.js -->
    <ul>
    ${
        quotes.map(quote => quoteView(quote)).join("")
    }
    </ul>

    <h2>Add a Quote</h2>

    <form class="create-form">

    <div class="form-group">
        <label for="auth">Author:</label>
        <input type="text" id="auth" name="author">
    </div>

    <div class="form-group">
        <label for="quo">Quote:</label>
        <textarea id="quo" name="quote" rows="8" cols="40"></textarea>
    </div>

    <button type="submit">Add Quote</button>
    </form>`
}