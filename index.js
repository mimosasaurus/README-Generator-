// TODO: Include packages needed for this application
import inquirer from 'inquirer';
// TODO: Create an array of questions for user input
const questions = [
    {type: "input", name: "A", default: "B", validate: false, message: "What is your GitHub username?"},
    {type: "input", name: "A", default: "B", validate: false, message: "What is your email address?"},
    {type: "input", name: "A", default: "B", validate: false, message: "What is your project's title?"},
    {type: "input", name: "A", default: "B", validate: false, message: "Please write a short description of your project"},
    {type: "input", name: "A", default: "B", validate: false, message: "What license should be on your project?"},
    {type: "input", name: "A", default: "B", validate: false, message: "What command should be run to install dependencies?"},
    {type: "input", name: "A", default: "B", validate: false, message: "What command should run to run tests?"},
    {type: "input", name: "A", default: "B", validate: false, message: "What does the user need to know about using the repository?"},
    {type: "input", name: "A", default: "B", validate: false, message: "What does the user need to know about contrubuting to the repository?"}
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });

}

// Function call to initialize app
init();
