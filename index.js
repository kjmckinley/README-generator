// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
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
            '[Apache License](ApacheLic.txt)',
            '[MIT License](MITLIC.txt)',
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

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            console.err(err);
            return;
        }
    });
}

// A function to initialize app
inquirer.prompt(questions)
.then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('generated_README.md', markdown);
})
.catch((error) => {
    if (error.isTtyError) {
    }else{
    }
});

// function init() {}

// // Function call to initialize app
// init();
