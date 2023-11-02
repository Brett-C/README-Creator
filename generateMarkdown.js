const inquirer = require('inquirer');

const { default: Choices } = require("inquirer/lib/objects/choices");

const licenseMap = {
  'Apache': {
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: 'https://opensource.org/licenses/Apache-2.0'
  },
  'The MIT License': {
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: 'https://opensource.org/licenses/MIT'
  },
  'GNU GPL v3': {
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    link: 'https://www.gnu.org/licenses/gpl-3.0'
  },
  'GNU GPL v2': {
    badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  },
  'none': {
    badge: '',
    link: ''

  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return licenseMap[license].badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// [title](https://www.example.com)
function renderLicenseLink(license) {
  return `[${license}](${licenseMap[license].link})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for REඞDME
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  
# ${data.title} 

## Description: 
${data.description}

## Table of Contents: 

[Installation](#Installation)

[Usage](#Usage)

[Credits](#Credits)

[License](#License)

[Test](#Test)

[Features](#Features)

[GitHub](#GitHub)

[Questions](#Questions)

## Installation:
${data.installation}

## Usage:
${data.usage}

## Credits:
${data.credits}

## License:
${renderLicenseLink(data.license)}
Click this link for information on the license


## Test:


## Features:
${data.features}

## GitHub:
[Link to GitHub](github.com/${data.gitHub})

## Questions:
If you have additional questions please contact me at:
${data.additionalQuestions}`;
};


module.exports = generateMarkdown;

