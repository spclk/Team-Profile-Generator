const cardsHTML = (answers) => {
 
    if (answers.getRole() === "Manager"){
        return `
        <section class="col-lg-4">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h5 class="card-title">${answers.getRole()}</h5>
                    <h5 class="card-title"><i class="fas fa-mug-hot"></i> ${answers.name}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${answers.id}</li>
                        <li class="list-group-item">Email: <a
                                href="mailto:${answers.email}">${answers.email}</a></li>
                        <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
                    </ul>
                </div>
            </div>
          </section>
          `
          
    }

  
    else if (answers.getRole() === "Engineer") {
        return `
        <section class="col-lg-4">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h5 class="card-title">${answers.getRole()}</h5>
                    <h5 class="card-title"><i class="fas fa-mug-hot"></i> ${answers.name}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${answers.id}</li>
                        <li class="list-group-item">Email: <a
                                href="mailto:${answers.email}">${answers.email}</a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${answers.gitHub}" target="_blank">${answers.gitHub}</a></li>
                    </ul>
                </div>
            </div>
          </section>
          `
    }

  
    else if (answers.getRole() === "Intern") {
        return `
        <section class="col-lg-4">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h5 class="card-title">${answers.getRole()}</h5>
                    <h5 class="card-title"><i class="fas fa-mug-hot"></i> ${answers.name}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${answers.id}</li>
                        <li class="list-group-item">Email: <a
                                href="mailto:${answers.email}">${answers.email}</a></li>
                        <li class="list-group-item">School: ${answers.school}</li>
                    </ul>
                </div>
            </div>
          </section>
          `
    }
};

module.exports = cardsHTML;
