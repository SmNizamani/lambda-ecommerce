# 🧪 LambdaTest Playground Automation

🚀 **Automating LambdaTest Playground using Playwright & Cucumber**

Welcome to the **LambdaTest Playground Automation** project! This repository contains the automation scripts for the [LambdaTest Playground](https://www.lambdatest.com/selenium-playground) website, using **Playwright** and **Cucumber** with the **Page Object Model (POM)** design pattern.

## 📋 Project Overview

The goal of this project is to create a robust, maintainable, and scalable automation framework for testing the LambdaTest Playground website. The framework leverages the power of **Playwright** for browser automation, **Cucumber** for BDD (Behavior-Driven Development), and **POM** to organize and manage the test code efficiently.

## 🛠️ Tech Stack & Tools

- **Playwright**: A Node.js library to automate Chromium, Firefox, and WebKit with a single API.
- **Cucumber**: A tool for running automated tests written in plain language.
- **Page Object Model (POM)**: A design pattern that creates an object repository for web elements.
- **JavaScript/TypeScript**: The language used for writing test scripts.
- **Node.js**: The runtime environment for executing the scripts.
- **GitHub Actions**: For continuous integration and testing.

## 🌟 Key Features

- **Behavior-Driven Development (BDD)**: Write tests in plain English using Gherkin syntax.
- **Cross-browser Testing**: Ensure compatibility across different browsers (Chromium, Firefox, WebKit).
- **Page Object Model (POM)**: Encapsulate page elements and actions to promote code reusability and maintainability.
- **Automated Test Reports**: Generate and view detailed test execution reports.

## 🗂️ Project Structure

lambda-playground-automation/ │ ├── features/ # Cucumber feature files (Gherkin syntax) │ └── example.feature # Example feature file │ ├── pages/ # Page Object Models │ └── homePage.js # Example page object │ ├── steps/ # Step definitions for Cucumber │ └── exampleSteps.js # Example step definition │ ├── reports/ # Test execution reports │ └── report.html # HTML report │ ├── utils/ # Utility functions │ └── helpers.js # Example helper function │ ├── playwright.config.js # Playwright configuration file ├── cucumber.js # Cucumber configuration file ├── package.json # Node.js dependencies and scripts └── README.md #


## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14.x or higher)
- **NPM** or **Yarn** (package manager)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/lambda-playground-automation.git
   cd lambda-playground-automation
2. Install the dependencies:
npm install
3. Run all tests:
-npm test
4. Run tests with a specific tag:
-npx cucumber-js --tags @tagname

### Key Sections:
- **Project Overview**: Brief introduction and objectives of the project.
- **Tech Stack & Tools**: Technologies used in the project.
- **Key Features**: Highlight what makes this project special.
- **Project Structure**: A clear breakdown of the folder and file structure.
- **Getting Started**: Instructions for setting up and running the project.
- **Example Scenario and Page Object**: Provide a sample of how the tests and page objects are structured.
