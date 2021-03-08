const HTMLtemplate = (answers) => {
 
    if (answers.constructor === "Manager") {
        return `
        <div class="card" style="width: 18rem">
            <div class="card-body">
            <h4 class="card-title" style="background-color: red; color: white"> ${answers.name} </h4>
                <h5 class="card-subtitle mb-2 text-muted"></h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> ID: ${answers.id} </li>
                    <li class="list-group-item"> Email: <a href="mailto:${answers.email}"> ${answers.email} </a> </li>
                    <li class="list-group-item"> Office number: ${answers.officeNumber} </li>
                </ul>
            </div>
        </div>`
    }

  
    else if (answers.constructor === "Engineer") {
        return `
        <div class="card" style="width: 18rem">
            <div class="card-body">
            <h4 class="card-title" style="background-color: green; color: white"> ${employee.name} </h4>
                <h5 class="card-subtitle mb-2 text-muted"> ${answers.constructor} </h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> ID: ${answers.id} </li>
                    <li class="list-group-item"> Email: <a href="mailto:${answers.email}"> ${answers.email} </a> </li>
                    <li class="list-group-item"> Github: <a href="https://github.com/${answers.gitHub}" target="_blank"> ${answers.gitHub} </a> </li>
                </ul>
            </div>
        </div>`
    }

  
    else if (answers.constructor === "Intern") {
        return `
        <div class="card" style="width: 18rem">
            <div class="card-body">
            <h4 class="card-title" style="background-color: blue; color: white"> ${answers.name} </h4>
                <h5 class="card-subtitle mb-2 text-muted"> ${answers.role} </h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> ID: ${answers.id} </li>
                    <li class="list-group-item"> Email: <a href="mailto:${answers.email}"> ${answers.email} </a> </li>
                    <li class="list-group-item"> School: ${answers.school} </li>
                </ul>
            </div>
        </div>`
    }
};


module.exports = HTMLtemplate;
