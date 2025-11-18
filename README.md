

Markdown
### Playwright BDD Automation Project

This repository houses an end-to-end test suite built with **Playwright**, utilizing the **`playwright-bdd`** framework to implement Behavior-Driven Development (BDD) using Gherkin feature files.

---

### 1. Setup and Installation

### Prerequisites
Ensure you have Node.js and npm installed.

### Install Dependencies
All necessary packages, including `@playwright/test`, `playwright-bdd`, and `@cucumber/cucumber`, are listed in `package.json`.

### bash
npm install


Path,Content
**tests/features/**, "Contains the Gherkin feature files (.feature) defining test scenarios (e.g., login.feature, products.feature)."

**tests/steps/**, "Contains the step definition files (.ts) that map Gherkin steps (Given/When/Then) to Playwright code (e.g., loginsteps.ts, productsteps.ts)."

**/tests/pages/**, "Contains the Page Object Model (POM) classes (e.g., LoginPage.ts, ProductsPage.ts)."

**tests/fixtures/**, "Contains fixtures.ts, which sets up the BDD test context and initializes the Page Object Model classes."

**.features-gen/**, "Contains Generated directory created by playwright-bdd that contains the final executable Playwright spec files (.spec.js)."



## 3. Configuration (playwright.config.ts)
The playwright.config.ts file is configured to use playwright-bdd to map your features to step definitions and direct Playwright to the correct test files.

**Key BDD Configuration:**
The defineBddConfig specifies all BDD files:

const testDir = defineBddConfig({
  features: [
    'tests/features/login.feature',
    'tests/features/products.feature',
    'tests/features/cart.feature',
    'tests/features/completeorder.feature'
  ],
  steps: [
    'tests/fixtures/fixtures.ts',
    'tests/steps/loginsteps.ts',
    'tests/steps/productsteps.ts',
    'tests/steps/cartsteps.ts',
    'tests/steps/completeordersteps.ts'
  ]
});

export default defineConfig({
  // Use the `testDir` returned from defineBddConfig so playwright-bdd can find its config
  testDir,
  // Ensure Playwright only picks up spec files we care about (generated JS or existing TS specs)
  testMatch: [
    '**/.features-gen/**/*.spec.js',
    '**/tests/**/*.spec.ts',
    '**/*.spec.ts',
    '**/*.spec.js',
  ],
});

### 4. Running the Tests
Use the npm scripts defined in package.json to run your test suite.

### 5. Run All Tests (End to End)
This command first generates the Playwright test files from your features (bddgen) and then executes the tests.
### Bash
npm test

### 6. Generate Specs Only
To compile Gherkin files into executable Playwright specs without running the tests: 
### Bash
npm run test:gen

### 7. View HTML Report
After running the tests, view the comprehensive HTML report in your browser:

### (Bash)
npx playwright show-report