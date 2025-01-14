# E2E Automation of Demo E-commerce Website with Cypress and Page Object Model (POM)

## Introduction

This project demonstrates end-to-end (E2E) automation of the [DemoBlaze e-commerce website](https://www.demoblaze.com) using Cypress and the Page Object Model (POM).

## Project Structure

The project is organized as follows:
### PageObjectModel
- **AddToCart.js**: Methods and properties for adding items to the cart. 
- **Assert.js**: Custom assertions for test validations. 
- **Contact.js**: Methods for interacting with the contact form. 
- **Login.js**: Methods for handling the login functionality.
### Setup 
- **HomePage.js**: Methods and properties for the home page.
### TestCases 
- **Add_to_Cart.cy.js**: Test cases for adding items to the cart.
- **Contact_Ecom.cy.js**: Test cases for the contact form.
- **LoginTest.cy.js**: Test cases for the login functionality.
### README.md 
- The main documentation file for the project.
# Key Features

- Automated testing of various e-commerce functionalities
- Utilizes Cypress for robust E2E testing framework
- Implements Page Object Model for improved maintainability and readability

# Technologies Used

- **Cypress**: JavaScript-based end-to-end testing framework
- **Page Object Model (POM)**: Design pattern for organizing test elements and actions
- **www.demoblaze.com**: Demo e-commerce website for testing purposes

# Testing Capabilities

This suite covers essential e-commerce scenarios, including:

- **Login page form and contact form**
- **Product selection and addition to cart**
- **Checkout process**
- **Order confirmation**

# Best Practices Implemented

- **Modular design** using POM for better organization and reusability
- **Separation of concerns** between page objects and test scripts
- **Use of Cypress commands** for common actions
- **Parameterized tests** for flexibility in test data

# Running Tests

To execute the automated tests:

1. **Clone the repository**:

   ```sh
   git clone <repository_url>
   cd project-root
2. **Install dependencies**:
   npm install
3.**Start Cypress:**:
   npx cypress run
