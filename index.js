const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHTML');

const runCode = function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'Managers name',
            message: 'What is the Team Managers name?'
        },
        {
            type: 'input',
            name: 'Employee Id',
            message: 'What is your employee id?'
        },
        {
            type: 'input',
            name: 'Email address',
            message: 'What is your employee email?'
        },
        {
            type: 'input',
            name: 'Office number',
            message: 'What is your office number?'
        },
        {
            type: 'list',
            name: 'What kind of employee',
            message: 'Pick one',
            choices: ['Engineer', 'Intern', 'Finish building team'],
        },
        {
            type: 'input',
            name: 'jggfkjyu',
            message: 'What is the Team Managers name?',
            validate: (answers) => answers.databasetype === 'Intern'
        },
        {
            type: 'input',
            name: 'hlkggflk',
            message: 'What is th',
            // when: (answers) => answers.databasetype === 'Intern'
        },
    ])
    .then((data) =>
      fs.writeFileSync('index.html', generateHtml(data)));
}
runCode();