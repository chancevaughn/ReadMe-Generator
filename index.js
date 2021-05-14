// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown')

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
        },
        {
            type: 'input',
            message: "What's your email address?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What's your GitHub username?",
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: "Write a descrition for your project.",
            name: 'description',
        },
        {
            type: 'input',
            message: "Write the insallation instructions for your project.",
            name: 'installation',
        },
        {
            type: 'input',
            message: "What is the usage for your project.",
            name: 'usage',
        },
        {
            type: 'input',
            message: "What are the testing instructions.",
            name: 'testing',
        },
        {
            type: 'input',
            message: "Who all worked on the project?",
            name: 'contributions',
        },
        {
            type: 'list',
            message: "Select a license.",
            choices: ['MIT License', 'None'],
            name: 'license',
        },
    ])

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  }
  
// TODO: Create a function to initialize app
const init = () => {
    questions().then((response) => {
        writeToFile('README.md', response)
    });
}

// Function call to initialize app
init();
