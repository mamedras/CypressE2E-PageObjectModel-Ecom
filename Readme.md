# 🛒 E2E Automation of Demo E-commerce Website with Cypress and Page Object Model (POM)

# 📌 Introduction

This project demonstrates end-to-end (E2E) automation of the DemoBlaze e-commerce website using Cypress and the Page Object Model (POM) for better maintainability and readability of test scripts.

# Project Structure
 ```sh
CypressE2E-PageObjectModel-Ecom/
│── fixtures
│   ├── integration/
│   │   ├── TestCases/
│   │   │   ├── Add_to_Cart.cy.js         # Test cases for adding items to the cart
│   │   │   ├── Contact_Ecom.cy.js        # Test cases for the contact form
│   │   │   ├── LoginTest.cy.js           # Test cases for login functionality
│   │   ├── PageObjectModel/
│   │   │   ├── AddToCart.js              # Methods & locators for cart functionality
│   │   │   ├── Assert.js                 # Custom assertions for test validations
│   │   │   ├── Contact.js                # Methods for the contact form
│   │   │   ├── Login.js                  # Login functionality methods
│   │   ├── Setup/
│   │   │   ├── HomePage.js                 # Methods for interacting with the homepage
│   ├── support/                            # Cypress support files (commands and utilities)
│── README.md                               # Project documentation
```

# 🚀 Key Features

**✅End-to-End:** Testing of an e-commerce platform using Cypress
**✅Page Object Model (POM):** for structured and maintainable test scripts
**✅Automated User Flows:** including login, adding products to cart, and checkout
**✅Custom Assertions:** for precise test validations

# Technologies Used
We utilize the following technologies in our project:
**Cypress:** JavaScript-based end-to-end testing framework
**Page Object Model (POM):** Improves test maintainability
**Node.js & npm:** Package management
# 🔍 Test Coverage:
The test suite includes the following e-commerce functionalities:

**✅User Authentication:** Login and Logout validation
**✅Contact Form:** Testing form submission
**✅Product Selection:** Adding and removing items from the cart
**✅Checkout Process:** Validating order placement

# 💡 Best Practices Implemented
** ✔ Modular Test Design:** POM ensures easy maintenance
** ✔ Separation of Concerns:**  Page objects handle UI elements separately from test cases
** ✔ Reusable Components:** Functions and assertions to avoid duplication
# ▶️ Running the Tests:

Follow these steps to set up and execute the test suite:

1. 1️⃣ Clone the Repository:
   ```sh
   git clone https://github.com/mamedras/CypressE2E-PageObjectModel-Ecom.git
   cd CypressE2E-PageObjectModel-Ecom

2. 2️⃣ Install Dependencies:

   ```sh
      npm install
3. 3️⃣ Run Cypress Test Runner:
     ```sh
    Run tests in the interactive Cypress UI
    npx cypress open    
    Run tests in headless mode
    npx cypress run
    ```
    
