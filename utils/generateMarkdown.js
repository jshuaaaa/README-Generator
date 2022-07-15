function generateMarkdown(response) {
  let TableOfContents = `## Table of Contents`;

  if (response.installation !== '') { TableOfContents += `
  * [Installation](#installation)` };

  if (response.usage !== '') { TableOfContents += `
  * [Usage](#usage)` };

  if (response.contributing !== '') { TableOfContents += `
  * [Contributing](#contributing)` };

  if (response.tests !== '') { TableOfContents += `
  * [Tests](#tests)` };
//Sends links to the corresponding values

  // Below is the layout for the readME
  let markdownDraft = 
  `# ${response.title}

  
  
  ## Description 
  
  
  
  ${response.description}
  `

  
  markdownDraft += TableOfContents;
 
  
  markdownDraft += `
  * [License](#license)`;
  

  
  if (response.installation !== '') {
  
  markdownDraft +=
  `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${response.installation}`
  };
  

  
  if (response.usage !== '') {
  
  markdownDraft +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${response.usage}`
  };
  
  
  
  if (response.contributing !== '') {

  markdownDraft +=
    
  `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${response.contributing}`
  };
  

  
  if (response.tests !== '') {
  
  markdownDraft +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${response.tests}`
  };


  
  markdownDraft +=
  `
  
  ## License
  
  ${response.license}
  `;




  //Returns draft
  return markdownDraft;
}

module.exports = generateMarkdown;
