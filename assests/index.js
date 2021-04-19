// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: "What is the title of your project?",
        default: 'My Project Title'

    },
    {
        type: 'input',
        name: 'projectDescription',
        message: "Write a description of your project:",
        default: 'Project Description Goes Here!'
    },
    // {
    //     type: 'input',
    //     name: 'tableOfContents',
    //     Message:
    // },
    {
        type:'input',
        name: 'installation',
        message: "What installition steps are involved in using this application?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "Give instructions and examples off the functionality of your project:"
    },
    {
        type: 'list',
        name: 'license',
        message: "Select a license for your project",
        choices: []
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Give instructions on how others can contribute to this project:"
    },
    {
        type: 'input',
        name: 'tests',
        message: "Give information and instructions on any tests in your application and how to run them:"
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
