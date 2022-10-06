const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHTML');

const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the Team Managers name?'
        },
        {
            type: 'input',
            name: 'Id',
            message: 'What is your employee id?'
        },
        {
            type: 'input',
            name: 'Email',
            message: 'What is your employee email?'
        },
        {
            type: 'list',
            name: 'Role',
            message: 'Pick one',
            choices: ['Engineer', 'Intern', 'Manager'],
        },
    ];

    const team = [];
    const generateTeam = () => {
     inquirer
        .prompt(qs)
         .then((ans1) => {
         inquirer
        .prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their office number?',
            when: () => ans1.role === 'Manager',
        },
        {
            type: 'input',
            name: 'Schoolname',
            message: 'What is your Schools name?',
            when: () => ans1.role === 'Intern',
        },
        {
            type: 'input',
            name: 'Engineergit',
            message: 'What is your Gitbuh username?',
            when: () => ans1.role === 'Engineer',
        },
        {
            type: "confirm",
            message: "Would you like to add another team member?",
            name: "addMember",
          },
        ])

        