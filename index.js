// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a title for your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a project description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter your installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter your usage information'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter your contribution guidelines'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter your test instructions'
    },
    {
        type: 'list',
        name: 'userLicenses',
        message: "Please choose a license from this list",
        choices:
            [
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense',
            ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your desired username'
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Please enter your email address'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        } else {
            console.log('README file ready');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        const fileName = 'README.md'; 
        writeToFile(fileName, readmeContent);
    });
}

// Function call to initialize app
init();
