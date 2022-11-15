// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utlis/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'What is the title of the project?',
    name: 'title',
}, {
    type: 'input',
    message: 'What is the description of the project?',
    name: 'description',
}, {
    type: 'input',
    message: 'What are the steps for installation for the project?',
    name: 'installation',
}, {
    type: 'input',
    message: 'What is the usage for the project?',
    name: 'usage',
}, {
    type: 'list',
    message: 'What license does your project use?',
    name: 'license',
    choices: ['MIT', 'Apache', 'Artistic'],
}, {
    type: 'input',
    message: 'What are the contribution guidelines?',
    name: 'contribution',
}, {
    type: 'input',
    message: 'What were the steps taken to run tests?',
    name: 'tests',
}, {
    type: 'input',
    message: 'Questions?',
    name: 'questions',
}, {
    type: 'input',
    name: 'github',
    message: 'Enter your Github username',
}, {
    type: 'input',
    name: 'email',
    message: 'Enter you email address',
},
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses =>{
       const markdown = generateMarkdown(responses)

    fs.writeFile('./Output/readme.md', markdown, (err)=>{
        console.log(err)
        console.log('Readme has been generated')
    });
});
}

// Function call to initialize app
init();
