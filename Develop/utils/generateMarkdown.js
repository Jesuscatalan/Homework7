// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === `MIT`) {
    return `![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === `Apache 2.0`) {
    return `![license: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === `GPL 3.0`) {
    return `![license: GPL V3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === `BSD 3`) {
    return `![license: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === `MIT`) {
    return `https://opensource.org/license/MIT`;
  } else if (license === `Apache 2.0`) {
    return `https://opensource.org/license/apache-2-0`;
  } else if (license === `GPL 3.0`) {
    return `https://opensource.org/license/gpl-3-0`;
  } else if (license === `BSD 3`) {
    return `https://opensource.org/license/BSD-3-Clause`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === `None`) {
    return ``;
  } else {
    return `## License 
    This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of contents
  -[Installation](#installation)
  - [Usage](#usage)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[License](#license)
  -[Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License 
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions, please feel free to contact me at ${data.email}. You can also find me on GitHub at [${data.github}]

`;
}

export default generateMarkdown;
