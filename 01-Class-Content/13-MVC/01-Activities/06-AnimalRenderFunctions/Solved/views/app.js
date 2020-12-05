module.exports = function(body){
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>Animal Website</title>
            <style>
                .pet {
                    color:blue
                }
                .not-pet {
                    color:red
                }
            </style>
        </head>
        <body>
            ${ body }
        </body>
    </html>
    `
}