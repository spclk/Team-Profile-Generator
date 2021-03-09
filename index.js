const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML')
const cardsHTML = require('./src/cardsHTML');
const Employee = require('./lib/Employee');
const Manager = require ('./lib/Manager')
const Engineer = require ('./lib/Engineer')
const Intern = require ('./lib/Intern')

let allEmployees = [];

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
    message: "Please choose the employee's role:",
    choices: ['Manager', 'Engineer', 'Intern']
  },
];

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
          let newManager = new Manager(answers.name, answers.id, answers.email, answers.role, managerAnswers.officeNumber) 
          allEmployees.push(newManager);
          console.log(allEmployees);
          addEmloyees()
        })
      }
      else if (answers.role === "Engineer"){
        inquirer.prompt({
          type: "input",
          name: "gitHub",
          message: "Please enter the Engineer's GitHub user name:",
        })
        .then((engineerAnswers) => {
          let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.role, engineerAnswers.gitHub) 
          allEmployees.push(newEngineer);
          console.log(allEmployees);
          addEmloyees()
        })
      }
      else if (answers.role === "Intern"){
        inquirer.prompt({
          type: "input",
          name: "school",
          message: "Please enter the name of the school for the Intern:",
        })
        .then((internAnswers) => {
          let newIntern = new Intern(answers.name, answers.id, answers.email, answers.role, internAnswers.school) 
          allEmployees.push(newIntern);
          console.log(allEmployees);
          addEmloyees()
        })
      }
    })
}

function addEmloyees() {
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
      let employeeData = "";  // new array to hold data?
        for (var i = 0; i < allEmployees.length; i++) {
          const employeeCards = cardsHTML(allEmployees[i]);
          employeeData += employeeCards;
        };
        fs.writeFile(`${__dirname}/dist/team.html`, generateHTML(employeeData),(err) => {
          console.log(employeeData)
          if (err) {
              throw err;
          };
        });
    };
  })
  .catch((err) => console.error(err)); 
};
init();
