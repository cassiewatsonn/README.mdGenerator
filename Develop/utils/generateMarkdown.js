// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `![](https://img.shields.io/badge/licence-${data.licence}-blue)
  
# ${data.title}

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation 

${data.installation}

## Usage 

${data.usage}

## Licence Description



## Contributions

${data.contribute}

## Tests 

${data.test}

## Questions 

[GitHub Link](https://github.com/${data.github})

For any additional questions, please contact me by email at ${data.email} !
`;
}

module.exports = generateMarkdown;