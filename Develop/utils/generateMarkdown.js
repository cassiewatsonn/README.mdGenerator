//Created a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {}

//Created a function that returns the license link

function renderLicenseLink(license) {
  if (license === 'MIT'){
    let licenseMIT = `[MIT License Link](https://choosealicense.com/licenses/mit)`
    return licenseMIT;
  }
  if (license === 'GNU'){
    let licenseMIT = `[GNU License Link](https://www.gnu.org/licenses/gpl-3.0.html)`
    return licenseMIT;
  }
  if (license === 'Apache'){
    let licenseMIT = `[Apache License Link](https://www.apache.org/licenses/LICENSE-2.0)`
    return licenseMIT;
    
  }
}

// Created a function that returns the license section of README

function renderLicenseSection(license) {
  if (license === 'MIT'){
    return `
MIT License

Copyright (c) [2023]
    
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
  }
  if (license === 'GNU'){
    return ` 
Copyright (C) <2023> 

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.`
  }
  if (license === 'Apache'){
    return `
    
Copyright [2023]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
  }
}

// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `![](https://img.shields.io/badge/license-${data.license}-blue)
  
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

## License Description

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

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
