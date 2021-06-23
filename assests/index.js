// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project:'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What packages and programs need to be installed for your project?'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What will your application be used for?'
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Are there contribution instructions?'
    },

    {
        type: 'input',
        name: 'test',
        message: 'Please provide project test instructions'
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'What license covers your project?',
        choices: [
            '[GNU General Public License](GNU-GP-LIC.txt)',
            '[MIT License](MITLIC.txt)',
            '[Apache License](ApacheLic.txt)',
            '[Not Licensed]'
        ]
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter you gitHub username:'
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
