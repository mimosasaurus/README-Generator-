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
function generateMarkdown(content) {
  return `# ${content.title}
  ${content.licenseBadge}

## Description

${content.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install dependencies, run the following:

\`
${content.dependencies}
\`

## Usage

${content.usage}

## License

This repository is licensed under the ${content.license} license.

## Contributing

${content.contributing}

## Tests

To run tests, run the following:

\`
${content.tests}
\`

## Questions

Questions about this repository? Please contact me at [$contenta.email}](mailto:${content.email}). View more of my work in GitHub at [${content.username}](https://github.com/${content.username})

`;
}

module.exports = generateMarkdown;
