const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./')

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
    type: "input",
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
        var response = generateHTML(answers);
        writeToFile("index.html", response)
    })

}
init();

// how to add more employees
// where to store answers. We can store them in our Constructor
// create an array to store emplyees
// create an inquire prompt to ask questions based on user's input
// if/else or switch 
// leave HTML to the very end. refer to 9 activity 28