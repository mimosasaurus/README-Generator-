// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMd = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {type: "input", name: "username", message: "What is your GitHub username?"},
    {type: "input", name: "email", message: "What is your email address?"},
    {type: "input", name: "title", message: "What is your project's title?"},
    {type: "input", name: "description", message: "Please write a short description of your project"},
    {type: "input", name: "license", message: "What license should be on your project?"},
    {type: "input", name: "dependencies", message: "What command should be run to install dependencies?"},
    {type: "input", name: "tests", message: "What command should run to run tests?"},
    {type: "input", name: "usage", message: "What does the user need to know about using the repository?"},
    {type: "input", name: "contributing", message: "What does the user need to know about contrubuting to the repository?"}
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(generateMd(answers))
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.error("Environment/TTY error", error)
      } else {
        // Something else went wrong
        console.error("unknown error", error)
      }
    });

}

// Function call to initialize app
init();
