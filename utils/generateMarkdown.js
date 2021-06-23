// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'GNU General Public License v3.0') {

    return '[![License: GNU v3](https://img.shields.io/badge/license-GNU%20v3.0-orange)](https://www.gnu.org/licenses/gpl-3.0.en.html)';

  } else if (license === 'Apache-2.0') {
      return '[![License: Apache](https://img.shields.io/badge/license-Apache%2.0-blue)](https://http://www.apache.org/licenses/LICENSE-2.0)';

  } else if (license === 'MIT') {
      return '[![License: MIT] (https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)';

  } else {
      return "";
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'GNU General Public License v3.0') {
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';

  } else if (license === 'Apache 2.0') {
      return 'https://http://www.apache.org/licenses/LICENSE-2.0';

  } else if (license === 'MIT') {
      return 'https://opensource.org/licenses/MIT' 

  } else {
      return "";
  }

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `Project is Licensed Under [${license}](${renderLicenseLink
    (license)})`;
}
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contribution)
  - [Testing](#test)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Questions
  ${data.questions}

  `;
}

module.exports = generateMarkdown;
