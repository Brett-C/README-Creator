// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your application?',
    'What is the description of your application?',
    'Do you have a Table of Contents?',
    'What are the instructions for installation?',
    'What instructions do you have to opporate this application?',
    'What credits do you want to give for this application?',
    'What licenses are used for this application?',
    'Do you have a list of features you want to include?',
    'To link your GitHub account, what is your GitHub Username?',
    'What is your email address for further questions?'

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log('no errors')
    })
};

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: questions[0],
        },
        {
            name: "description",
            type: "input",
            message: questions[1]
        },
        {
            name: "tableOfContents",
            type: "confirm",
            message: questions[2],

        },

        
        {
            name: "installation",
            type: "input",
            message: questions[3]
        },
        {
            name: "usage",
            type: "input",
            message: questions[4]
        },
        {
            name: "credits",
            type: "input",
            message: questions[5]
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of license were used?',
            choices: [
                'Apache',
                'GNU GPL v3',
                'GNU GPL v2',
                'The MIT License',
                'none']

        },

        {
            name: "features",
            type: "input",
            message: questions[7]
        },
        {
            name: "gitHub",
            type: "input",
            message: questions[8]
        },

        {
            name: "additionalQuestions",
            type: "input",
            message: questions[9]
        },


    ])
    .then((answer) => {
        console.log(answer.title);
        console.log(answer.description);
        console.log(answer.tableOfContents)
        console.log(answer.installation)
        console.log(answer.usage)
        console.log(answer.credits)
        console.log(answer.license)
        console.log(answer.features)
        writeToFile('README.md', generateMarkdown(answer))

});
}
// Function call to initialize app
init();