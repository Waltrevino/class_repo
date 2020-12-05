module.export = function(props){
    return `
        <h1>Update the quote with an id of ${props.id}</h1>

        <form data-id="${props.id}" class="update-form">
            <div class="form-group">
                <label for="auth">Author:</label>
                <input type="text" id="auth" name="author" value="${props.author}">
            </div>

            <div class="form-group">
                <label for="quo">Quote:</label>
                <textarea id="quo" name="quote" rows="8" cols="40">${props.quote}</textarea>
            </div>

            <button type="submit">Update Quote</button>
        </form>
    `
}