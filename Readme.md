# E2E Automation of Demo E-commerce Website with Cypress and Page Object Model (POM)

## Introduction

This project demonstrates end-to-end (E2E) automation of the [DemoBlaze e-commerce website](https://www.demoblaze.com) using Cypress and the Page Object Model (POM).

## Project Structure

The project is organized as follows:

project-root/
├── cypress/
│   ├── fixtures/
│   ├── integration/
│   │   ├── PageObjectModel/
│   │   │   ├── AddToCart.js
│   │   │   ├── Assert.js
│   │   │   ├── Contact.js
│   │   │   └── Login.js
│   │   ├── Setup/
│   │       └── HomePage.js
│   │   └── TestCases/
│   │       └── Add_to_Cart.cy.js
│   │       └── Contact_Ecom.cy.js
│   │       └── LoginTest.cy.js
│   └── support/
│       └── commands.js
└── README.md
## Key Features
Automated testing of various e-commerce functionalities
Utilizes Cypress for robust E2E testing framework
Implements Page Object Model for improved maintainability and readability
## Technologies Used
Cypress: JavaScript-based end-to-end testing framework
Page Object Model (POM): Design pattern for organizing test elements and actions
www.demoblaze.com: Demo e-commerce website for testing purposes
## Testing Capabilities
This suite covers essential e-commerce scenarios, including:

login page form and contact form 
Product selection and addition to cart
Checkout process
Order confirmation
Best Practices Implemented
Modular design using POM for better organization and reusability
Separation of concerns between page objects and test scripts
Use of Cypress commands for common actions
Parameterized tests for flexibility in test data
Running Tests
To execute the automated tests:

Clone the repository
Install dependencies: npm install
Start Cypress: npx cypress run
Future Improvements
Integration of parallel execution for faster test runs
Implementation of CI/CD pipeline for continuous testing
Addition of performance metrics and monitoring
