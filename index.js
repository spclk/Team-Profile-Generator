const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML')
const Manager = require ('./lib/Manager')

var allEmplyees = [];

const questions = [
  {
    type: "input",
    name: "name",
    message: "Please enter the employee's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the employee's id number:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the employee's email:",
  },
  {
    type: "list",
    name: "role",
    message: "Please enter the employee's role:",
    choices: ['Manager', 'Engineer', 'Intern']
  },

];

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}
function init() { 
    inquirer.prompt(questions)
    .then((answers) => {
      console.log(answers)
      if (answers.role === "Manager"){
        inquirer.prompt({
          type: "input",
          name: "officeNumber",
          message: "Please enter the manager's office number:",
        })
        .then((managerAnswers) => {
          let newManager = new Manager(answers.name, answers.id, answers.email, managerAnswers.officeNumber) 
          allEmplyees.push(newManager);
          console.log(allEmplyees);
          addAnother()
        })
      }
      else if (answers.role === "Engineer"){
        inquirer.prompt({
          type: "input",
          name: "gitHub",
          message: "Please enter the Engineer's GitHub user name:",
        })
        .then((engineerAnswers) => {
          let newManager = new Engineer(answers.name, answers.id, answers.email, managerAnswers.officeNumber) 
          allEmplyees.push(newManager);
          console.log(allEmplyees);
        })
      }
      else if (answers.role === "Intern"){
        inquirer.prompt({
          type: "input",
          name: "school",
          message: "Please enter the name of the school for the Intern:",
        })
        .then((internAnswers) => {
          let newManager = new Manager(answers.name, answers.id, answers.email, managerAnswers.officeNumber) 
          allEmplyees.push(newManager);
          console.log(allEmplyees);
        })
      }
      
      
    })

}


function addAnother() {
  inquirer.prompt({
    type: "confirm",
    name: "newEmployee",
    message: "Would you like to add another employee?",
  })
  .then((anotherEmployee) => {
  if (anotherEmployee.newEmployee){
    init();
  }
  else {
    //var response = generateHTML(answers);
  //writeToFile("index.html", response)
  }
}) 


}
init();

// how to add more employees
// where to store answers. We can store them in our Constructor
// create an array to store emplyees
// create an inquire prompt to ask questions based on user's input
// if/else or switch 
// leave HTML to the very end. refer to 9 activity 28