// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.license === 'The MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.license === 'The MIT License') {
    return 'https://opensource.org/licenses/MIT'
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.license === 'The MIT License') {
    return `Copyright (c) ${new Date().getFullYear()}, ${license.name}
\nPermission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
  } else {
    return '';
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}${renderLicenseBadge(data)}
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributers](#contributers)
- [Tests](#tests)
- [Questions](#questions)

## [Installation](#installation)
${data.installation}

## [Usage](#usage)
${data.usage}

## [License](#license)
\n${data.license}${renderLicenseBadge(data)}\n
\n${renderLicenseSection(data)}\n
\n${renderLicenseLink(data)}\n


## [Contributers](#contributers)
${data.contributions}

## [Tests](#tests)
${data.testing}

## [Questions](#questions)
If you have any further questions or would like you add to this project, contact me at ${data.email} or [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
