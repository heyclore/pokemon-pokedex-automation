# Playwright Portfolio Demo

This repository showcases a test automation suite built using **Playwright** with TypeScript. It demonstrates the ability to create robust, maintainable, and scalable automated tests for web applications. The suite focuses on end-to-end testing, page object modeling, and leveraging Playwright's features for efficient testing.

## Project Overview

This repository contains a collection of automated end-to-end tests for a sample web application, developed using Playwright and TypeScript. The primary goal is to demonstrate proficiency in building and structuring modern, reliable test automation suites.

## Key Features Tested

Based on the project structure (`src/tests/` and `src/pages/`), this demo likely covers:

*   **Navigation**: Testing navigation between different pages of the application (e.g., Home, Docs, Community, API).
*   **Search Functionality**: Validating the search input and results.
*   **Page Interactions**: Basic UI element interactions and assertions.

*(Note: Specific features tested are inferred from file names and structure. For precise details, please refer to the test files within `src/tests/`.)*

## Technologies Used

*   **Playwright**: For end-to-end test automation across major browsers.
*   **TypeScript**: For writing type-safe test scripts and page object definitions.
*   **Node.js**: The runtime environment for executing Playwright commands and managing project dependencies.

## Project Structure

The project is organized to promote clarity and maintainability using the Page Object Model (POM) for efficient test automation:

*   `playwright.config.ts`: Playwright configuration file, defining test directories, timeouts, viewport settings, and browser targets.
*   `package.json`: Manages project dependencies and defines scripts for running tests.
*   `src/`: Contains the source code for the test automation suite.
    *   `fixtures/`: Custom Playwright test fixtures for shared setup or teardown logic.
    *   `pages/`: This directory houses the Page Object Model (POM) classes. Each subdirectory represents a distinct part of the application or reusable UI elements:
        *   `pages/components/`: Contains page objects for reusable UI components (e.g., buttons, input fields) that can be shared across multiple pages.
        *   `pages/homepage/`: Houses the page object specifically for the application's homepage.
        *   `pages/pokedex/`: Contains the page object for the Pokedex page, encapsulating its elements and interactions.
    *   `tests/`: Contains the actual end-to-end test files (e.g., `pokedex-pikachu-flow.spec.ts`, `navigation.spec.ts`, `search.spec.ts`), written in TypeScript.
*   `test-results/`: Directory where Playwright generates test reports, traces, and screenshots upon test execution.

## Design Approach & Best Practices

This project adheres to modern test automation principles:

*   **Page Object Model (POM)**: Utilizes page objects (defined in `src/pages/`) to encapsulate UI elements and their interactions, enhancing test maintainability and reusability.
*   **Modularity**: Tests are organized into distinct spec files within `src/tests/`, making them easy to locate and manage.
*   **TypeScript Integration**: Leverages TypeScript for strong typing, improving code quality, reducing runtime errors, and enhancing developer productivity.
*   **Configuration Management**: `playwright.config.ts` centralizes configuration for test execution, including browser options and timeouts.

## Portfolio Value

This project demonstrates the ability to:

*   Set up and configure a Playwright testing environment from scratch.
*   Implement the Page Object Model (POM) for scalable and maintainable test automation.
*   Write effective end-to-end tests using TypeScript.
*   Organize test suites logically for efficient execution and reporting.
*   Utilize Playwright's features for managing test configurations and execution.

## Project Tree
```
.
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── playwright-report
│   └── index.html
├── playwright.config.ts
├── src
│   ├── fixtures
│   │   └── fixture.ts
│   ├── pages
│   │   ├── components
│   │   │   ├── navigationComponents.ts
│   │   │   └── topBar.ts
│   │   ├── homepage
│   │   │   └── homePage.ts
│   │   └── pokedex
│   │       └── pokedexPage.ts
│   └── test
│       └── pokedex-pikachu-flow.spec.ts
└── test-results
```
---

Feel free to reach out if you have any questions or would like to discuss this project further.
