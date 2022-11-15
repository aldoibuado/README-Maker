// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}
 
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

  ## Description 
  ${data.description}

  ## Table of Contents (Optional)
  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contribution](#contribution)

  [Tests](#tests)

  [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen) <br/>
  This application is under the ${data.license}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, you can reach me at (https://github.com/aldoibuado) and or at email adresss aldo.ibuado@gmail.com <br/>
`;
}


module.exports = generateMarkdown;
