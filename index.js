// Dependencies
const inquirer = require("inquirer");
const fs = require('fs');
const { generateLogo } = require('./lib/logoGen');
// User input prompting
inquirer
  .prompt([
    // Logo Name Prompt
    {
      type: "input",
      name: "logoName",
      message: "Please enter 1-3 letters for your logo",
    },
    // Text Color Prompt
    {
      type: "input",
      name: "textColor",
      message: `Please enter text color (color keyword or hexadecimal #)`,
    },
    // Logo Shape Prompt
    {
      type: "list",
      name: "logoShape",
      message: `Please choose logo shape`,
      choices: ["triangle", "circle", "square"],
    },
    // Shape Color Prompt
    {
      type: "input",
      name: "logoColor",
      message: `Please enter shape color (color keyword or hexadecimal #)`,
    },

  ])