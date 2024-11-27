// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        name: `title`,
        message: `what is the title of your project`,
    },
    {
        type: `input`,
        name: `description`,
        message: `provide a description of your project:`,
    },
    {
        type: `input`,
        name: `installation`,
        message: `provide installation instructions:`
    },
    {
        type: `input`,
        name: `usage`,
        message: `provide usage information`,
    },
    {
        type: `input`,
        name: `contributing`,
        message: `provide contribution guidelines:`,
    },
    {
        type: `input`,
        name: `tests`,
        message: `provide test instructions:`,
    },
    {
        type: `list`,
        name: `license`,
        message: `choose a license for your project:`,
        choices: [`MIT`, `Apache 2.0`, `GPL`, `none`],
    },
    { 
        type: `input`,
        name: `github`,
        message: `enter your GitHub username:`,
    },
    {
        type: `input`,
        name: `email`,
        message: `enter your email address:`,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
    if (err) { console.error(`error writing to file`, err);
    } else {
        console.log(`${fileName} has been generated successfully!`);
    }});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateREADME(answers);
        writeToFile("README.md", readmeContent);
    });
}

// Function call to initialize app
init();
