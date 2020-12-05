module.exports = function(props){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Wishes</title>
    </head>
    <body>
        <h1>Wishes go here</h1>
        <ul>
        ${
            props.wishes.map(wish => {
                return `<li>id: ${wish.id} - ${wish.wish}</li>`
            }).join("")
        }
        </ul>
        <form action="/" method="POST">
            <textarea type="text" name="wish"></textarea>
            <button type="submit">Submit</button>
        </form>
    </body>
    </html>
    `
}