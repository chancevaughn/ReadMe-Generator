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
  return `# ${data.title}
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

## [Contributers](#contributers)
${data.contributions}

## [Tests](#tests)
${data.testing}

## [Questions](#questions)
If you have any further questions or would like you add to this project, contact me at ${data.email} or [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
