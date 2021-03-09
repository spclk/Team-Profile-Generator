const cardsHTML = (answers) => {
 
    if (answers) {
        return `
        <section class="col-lg-4">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h5 class="card-title">${answers}</h5>
                    <h5 class="card-title"><i class="fas fa-mug-hot"></i> ${answers}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${answers}</li>
                        <li class="list-group-item">Email: <a
                                href="mailto:${answers}">${answers}</a></li>
                        <li class="list-group-item">Office Number: ${answers}</li>
                    </ul>
                </div>
            </div>
          </section>
          `
    }

  
    // else if (answers.Engineer === "Engineer") {
    //     return `
    //     <section class="col-lg-4">
    //         <div class="card" style="width: 18rem;">
    //             <div class="card-header">
    //                 <h5 class="card-title">${answers.Manger.name}</h5>
    //                 <h5 class="card-title"><i class="fas fa-mug-hot"></i> ${answers.Manager}</h5>
    //             </div>
    //             <div class="card-body">
    //                 <ul class="list-group list-group-flush">
    //                     <li class="list-group-item">ID: ${answers.Manager.id}</li>
    //                     <li class="list-group-item">Email: <a
    //                             href="mailto:${answers.manager.email}">${answers.Manager.email}</a></li>
    //                     <li class="list-group-item">Office Number: ${answers.Manager.officeNumber}</li>
    //                 </ul>
    //             </div>
    //         </div>
    //       </section>
    //       `
    // }

  
    // else if (answers.Intern === "Intern") {
    //     return `
    //     <section class="col-lg-4">
    //         <div class="card" style="width: 18rem;">
    //             <div class="card-header">
    //                 <h5 class="card-title">${answers.Manger.name}</h5>
    //                 <h5 class="card-title"><i class="fas fa-mug-hot"></i> ${answers.Manager}</h5>
    //             </div>
    //             <div class="card-body">
    //                 <ul class="list-group list-group-flush">
    //                     <li class="list-group-item">ID: ${answers.Manager.id}</li>
    //                     <li class="list-group-item">Email: <a
    //                             href="mailto:${answers.manager.email}">${answers.Manager.email}</a></li>
    //                     <li class="list-group-item">Office Number: ${answers.Manager.officeNumber}</li>
    //                 </ul>
    //             </div>
    //         </div>
    //       </section>
    //       `
    //}
};

//console.log(answers)


module.exports = cardsHTML;
