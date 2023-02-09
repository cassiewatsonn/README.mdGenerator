// TODO: Include packages needed for this application
// DONE: installed inquirer modules using npm init -y 
// then npm i inquirer@8.2.4 in terminal 

const fs = require('fs')
const inquirer = require('inquirer')
const utils = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is the description for this project?',
        name: 'description',
      },

    {
        type: 'input',
        message: 'What are the steps required to install this project? Please provide step by step on how to get this program running',
        name: 'installation',
      },

    {
        type: 'input',
        message: 'Provide instructions and examples for use',
        name: 'usage',
      },

    {
        type: 'list',
        message: 'Choose a license',
        name: 'license',
        choices: ['MIT', 'GNU', 'Apache']
      },

    {
        type: 'input', 
        message: 'How can developers contribute to this repository?', 
        name: 'contribute'
    },

    {
        type: 'input', 
        message: 'How do you run a test of your project?', 
        name: 'test'
    },

    {
        type: 'input', 
        message: 'Please input your github username',
        name: 'github'
    },
        
    {
        type: 'input', 
        message: 'Please enter your email address',
        name: 'email'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  

        fs.writeFile(fileName, data, (err) => 
        err ? console.log(err): "Creating your README.md file!")
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response =>{
        let readText = utils(response)
        writeToFile('README.md', readText)
    }) 
}

// Function call to initialize app
init();
