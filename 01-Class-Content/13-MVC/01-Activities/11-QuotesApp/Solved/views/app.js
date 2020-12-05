module.exports = function(body){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
            <link rel="stylesheet" href="/assets/css/style.css" type="text/css" />
            <script src="https://code.jquery.com/jquery.js"></script>
            <script src="/assets/js/quotes.js"></script>
            <title>Quotes App</title>
        </head>
        <body>
            ${body}
        </body>
    </html>
    `
}