# QA Engineer Technical Challenge

Welcome to the Investifi QA Engineer technical challenge! This challenge is designed to evaluate your ability to create a comprehensive test plan, write automated tests using Playwright, and demonstrate your approach to testing web applications. We’re excited to see how you approach this task!

## Challenge Description
In this challenge, you will be tasked with creating a **test plan** for a feature on our **dev environment** and writing automated Playwright scripts to validate your test scenarios.

The feature under test is the **Investifi's End User Experience (EUX)***, which allows users to manage buy and sell securities/cryptos.

The challenge will require you to:
1. Create a detailed test plan that outlines the test scenarios you will cover.
2. Write automated Playwright scripts to cover two test scenarios from your test plan.
3. Document your approach to testing, including any trade-offs or assumptions made.

This challenge should take **3-4 hours** to complete.

---

## Requirements
### Test Plan
- Write a **test plan** in **Markdown format** (`test-plan.md`) that includes the following:
  - Test Overview
  - Positive Test Cases
  - Negative Test Cases
  - Automation Scope
  - Assumptions & Risks

### Automation Scripts
- Use **Playwright** to automate **at least two** test scenarios from your test plan.
- Include both **positive** and **negative** scenarios.
- Use assertions to validate expected behavior.
- Your scripts should:
  - Launch the browser
  - Navigate to the dev environment URL
  - Perform interactions
  - Validate expected results

### Example Scenarios to Automate
1. Add a new favorite item for a user (Positive Test Case)
2. Prevent adding duplicate favorites for the same user (Negative Test Case)

---

## Getting Started
1. Clone this repository.
2. Create a new **private GitHub repository**.
3. Copy your work into the new private repository.
4. Install dependencies:

```bash
npm install
```

```bash
npx playwright test
```

## Submission Guidlines
1. Commit your changes to your private GitHub repository.

2. Invite hkussie1111 to your repository.

3. Include the following files:

    -   test-plan.md

    - Your Playwright test scripts in a /tests folder

    - A short README.md explaining your approach and any assumptions made.

    - Create a short [Loom](https://www.loom.com) video (3-5 mins) walking through your test plan and code.