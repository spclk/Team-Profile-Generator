function generateHTML(data){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employees</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    </head>
    <body>
    <div class="jumbotron navbar-fixed-top text-center shadow">
            <header class="display-1 my-2 pb-3">My Team</header>
        </div>
        <div class='container'>
        ${data}
        </div>
    </body>
    </html>
    `
};
module.exports = generateHTML;