// Importing required modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Setting up the output directory and the file path
const OUTPUT_DIR = path.resolve(__dirname, "output");

// Check if the 'output' directory exists, create it if it doesn't
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

const outputPath = path.join(OUTPUT_DIR, "team.html");

// Importing the HTML rendering function
const render = require("./src/page-template.js");

// Array to store team members
const teamArray = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Function to initialize the application
function init() {
  // Creating the manager
  createManager();
}

// Function to gather the information about the manager
function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What's your manger's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What's your manger's Id?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What's your manger's email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What's your manger's office number?",
      },
    ])
    .then((responses) => {
      // Creating the manager object and add it to the teamArray
      const manager = new Manager(
        responses.managerName,
        responses.managerId,
        responses.managerEmail,
        responses.managerOfficeNumber
      );
      teamArray.push(manager);
      // After creating the manager, move on to creating the team
      createTeam();
    });
}

// Function to create the Team
function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "What type of member do you like to add?",
        choices: ["Engineer", "Intern", "I am done"],
      },
    ])
    .then((userAns) => {
      switch (userAns.memberChoice) {
        case "Engineer":
          // If user choose Engineer, gather the information for an Engineer
          addEngineer();
          break;
        case "Intern":
          // If user choose Intern, gather the information for an Intern
          addIntern();
          break;
        default:
          // If user is done, generate HTML and write to file
          const html = render(teamArray);

          // Ensure the "output" directory exists
          if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
          }

          // Write the HTML file
          fs.writeFile(outputPath, html, (err) => {
            if (err) {
              console.error(`Error writing html file:`, err);
            } else {
              console.log(`HTML file written to ${outputPath}`);
              // Log the teamArray to the console for verification
              console.log(teamArray);
            }
          });
      }
    });
}

// Function to gather information about an Engineer
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What's your engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What's your engineer's Id?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What's your engineer's email?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What's your engineer's Github username?",
      },
    ])
    .then((responses) => {
      // Create an Engineer object and add it to the teamArray
      const engineer = new Engineer(
        responses.engineerName,
        responses.engineerId,
        responses.engineerEmail,
        responses.engineerGithub
      );
      teamArray.push(engineer);

      // After creating the engineer, return to the createTeam function
      createTeam();
    });
}

// Function to gather information about an Intern
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What's your intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What's your intern's Id?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What's your intern's email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What's your intern school name?",
      },
    ])
    .then((responses) => {
      // Create an Intern object and add it to the teamArray
      const intern = new Intern(
        responses.internName,
        responses.internId,
        responses.internEmail,
        responses.internSchool
      );
      teamArray.push(intern);

      // After creating the intern, return to the create function
      createTeam();
    });
}

// Starting the application by calling the function
init();
