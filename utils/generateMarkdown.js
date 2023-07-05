// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  const licenseBadges = {
    'Apache License 2.0': '![License Badge](https://img.shields.io/badge/License-Apache%20License%202.0-blue.svg)',
    'GNU General Public License v3.0': '![License Badge](https://img.shields.io/badge/License-GNU%20General%20Public%20License%20v3.0-blue.svg)',
    'MIT License': '![License Badge](https://img.shields.io/badge/License-MIT%20License-blue.svg)',
    'BSD 2-Clause "Simplified" License': '![License Badge](https://img.shields.io/badge/License-BSD%202--Clause%20%22Simplified%22%20License-blue.svg)',
    'BSD 3-Clause "New" or "Revised" License': '![License Badge](https://img.shields.io/badge/License-BSD%203--Clause%20%22New%22%20or%20%22Revised%22%20License-blue.svg)',
    'Boost Software License 1.0': '![License Badge](https://img.shields.io/badge/License-Boost%20Software%20License%201.0-blue.svg)',
    'Creative Commons Zero v1.0 Universal': '![License Badge](https://img.shields.io/badge/License-Creative%20Commons%20Zero%20v1.0%20Universal-blue.svg)',
    'Eclipse Public License 2.0': '![License Badge](https://img.shields.io/badge/License-Eclipse%20Public%20License%202.0-blue.svg)',
    'GNU Affero General Public License v3.0': '![License Badge](https://img.shields.io/badge/License-GNU%20Affero%20General%20Public%20License%20v3.0-blue.svg)',
    'GNU General Public License v2.0': '![License Badge](https://img.shields.io/badge/License-GNU%20General%20Public%20License%20v2.0-blue.svg)',
    'GNU Lesser General Public License v2.1': '![License Badge](https://img.shields.io/badge/License-GNU%20Lesser%20General%20Public%20License%20v2.1-blue.svg)',
    'Mozilla Public License 2.0': '![License Badge](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-blue.svg)',
    'The Unlicense': '![License Badge](https://img.shields.io/badge/License-The%20Unlicense-blue.svg)'
  }
  if (license && licenseBadges) {
    return `$(licenseBadges)`;
  } else {
    return ('')
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return 'https://img.shields.io/badge/License-Apache%20License%202.0-blue.svg';
  } else if (license === 'GNU General Public License v3.0') {
    return 'https://img.shields.io/badge/License-GNU%20General%20Public%20License%20v3.0-blue.svg';
  } else if (license === 'MIT License') {
    return 'https://img.shields.io/badge/License-MIT%20License-blue.svg';
  } else if (license === 'BSD 2-Clause "Simplified" License') {
    return 'https://img.shields.io/badge/License-BSD%202--Clause%20%22Simplified%22%20License-blue.svg';
  } else if (license === 'BSD 3-Clause "New" or "Revised" License') {
    return 'https://img.shields.io/badge/License-BSD%203--Clause%20%22New%22%20or%20%22Revised%22%20License-blue.svg';
  } else if (license === 'Boost Software License 1.0') {
    return 'https://img.shields.io/badge/License-Boost%20Software%20License%201.0-blue.svg';
  } else if (license === 'Creative Commons Zero v1.0 Universal') {
    return 'https://img.shields.io/badge/License-Creative%20Commons%20Zero%20v1.0%20Universal-blue.svg';
  } else if (license === 'Eclipse Public License 2.0') {
    return 'https://img.shields.io/badge/License-Eclipse%20Public%20License%202.0-blue.svg';
  } else if (license === 'GNU Affero General Public License v3.0') {
    return 'https://img.shields.io/badge/License-GNU%20Affero%20General%20Public%20License%20v3.0-blue.svg';
  } else if (license === 'GNU Lesser General Public License v2.1') {
    return 'https://img.shields.io/badge/License-GNU%20Lesser%20General%20Public%20License%20v2.1-blue.svg';
  } else if (license === 'Mozilla Public License 2.0') {
    return 'https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-blue.svg';
  } else if (license === 'The Unlicense') {
    return 'https://img.shields.io/badge/License-The%20Unlicense-blue.svg';
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  if (licenseLink && licenseBadge) {
    return `## License\nThis application is covered under the ${data.userLicense} license.\n\n${renderLicenseBadge(licenseBadge)}`;
  } else {
    return ('')
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseLink = renderLicenseLink(data.userLicense);
  const licenseBadge = licenseLink ? `![License Badge](${licenseLink})` : '';
  const licenseSection = renderLicenseSection(data.userLicense);

  return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.userLicenses}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## Questions
  For any questions or inquiries, please reach out to me:
  - GitHub: [${data.username}](https://github.com/${data.username})
  - Email: [${data.emailAddress}](mailto:${data.emailAddress})
  `;
}

module.exports = generateMarkdown;
