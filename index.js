const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/generateHTML");

const qs = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the Team Members name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your employee email?'
        },
        {
            type: 'list',
            name: 'role',
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
            name: 'school',
            message: 'What is your Schools name?',
            when: () => ans1.role === 'Intern',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Gitbuh username?',
            when: () => ans1.role === 'Engineer',
        },
        {
            type: "confirm",
            message: "Would you like to add another team member?",
            name: "addMember",
          },
        ])

        .then((ans2) => {
            if(ans1.role === 'Manager') {
                const manager = new Manager(ans1.name, ans1.id, ans1.email, ans1.role, ans1.officeNumber);
                team.push(manager);
            }

            if(ans1.role === 'Engineer') {
                const engineer = new Engineer(ans1.name, ans1.id, ans1.email, ans1.role, ans1.github);
                team.push(engineer);
            }

            if(ans1.role === 'Intern') {
                const intern = new Intern(ans1.name, ans1.id, ans1.email, ans1.role, ans1.school);
                team.push(intern);
            }

            if(ans2.addMember) {
                generateTeam();
            } else {
                team.forEach((team) => {
                    console.log(team);
                });
                fs.writeFile(outputPath, render(team), (err) => {
                    if (err) {
                      throw err;
                    }
                    console.log("Success, team HTML is created!");
                  });
                }
              });
          })
          .catch((err) => {
            if (err) {
              throw err;
            }
          });
      };
      
      generateTeam();

        