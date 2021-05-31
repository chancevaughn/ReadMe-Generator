// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown')
const util = require('util');


console.log(`
    Welcome to the README Generator!
    --------------------------------
    Enter your information and see your README file be generated.
`);
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What's your name?",
            name: 'name',
            default: 'Chance Vaughn'
        },
        {
            type: 'input',
            message: "What's your email address?",
            name: 'email',
            default: 'me@me.com'
        },
        {
            type: 'input',
            message: "What's your GitHub username?",
            name: 'github',
            default: 'RedSaber'
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            default: 'The Greatest Project'
        },
        {
            type: 'input',
            message: "Write a descrition for your project.",
            name: 'description',
            default: 'You are going to want to see where this goes!!'
        },
        {
            type: 'input',
            message: "Write the insallation instructions for your project.",
            name: 'installation',
            default: 'N/A'
        },
        {
            type: 'input',
            message: "What is the usage for your project.",
            name: 'usage',
            default: 'Make the world easier'
        },
        {
            type: 'input',
            message: "What are the testing instructions.",
            name: 'testing',
            default: 'None for this project'
        },
        {
            type: 'input',
            message: "Who all worked on the project?",
            name: 'contributions',
            default: 'Me, Myself, and I'
        },
        {
            type: 'list',
            message: "Select a license.",
            choices: ['The MIT License', 'None'],
            name: 'license',

        },
    ])

};

// TODO: Create a function to write README file
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((data) => writeFileAsync('./demo/README.md', generateMarkdown(data)))
        .then(() => console.log('Your README has successfully been generated'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
