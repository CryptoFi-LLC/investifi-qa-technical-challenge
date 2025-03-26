# QA Engineer Technical Challenge

Welcome to the Investifi QA Engineer technical challenge! This challenge is designed to evaluate your ability to create a comprehensive test plan, write/debug automated tests using Playwright, and demonstrate your approach to testing web applications. We're excited to see how you approach this task!

## Challenge Description
In this challenge, you will be tasked with creating a **test plan** for our **End User Experience (EUX)** and debugging an automated Playwright script to successfully execute a smoke test against Investifi's landing page.

The challenge will require you to:
1. Create a test plan that focuses on the buying and selling of assets.
2. Debugging automated smoke tests that validate static content on the EUX landing page.


## Requirements
### Test Plan
- Write a **test plan** in any file format you prefer that includes the following:
  - Test Overview
  - Positive Test Cases
  - Negative Test Cases
  - Automation Scope
  - Assumptions & Risks

### Automated Tests
- Use **Playwright** to debug our existing smoke test.
- Use assertions to validate expected behavior.
- The script should:
  - Launch the browser
  - Navigate to the dev environment URL
  - Perform interactions
  - Validate expected results
- Ensure that when you run `npm run test`, all tests pass successfully.

---

## Getting Started
1. Create a test username/login in our dev environment: [https://sales-demo-dev.app.investifi-app.co/](https://sales-demo-dev.app.investifi-app.co/)

2. Clone this repository.

3. Create a new **private GitHub repository**.

4. Copy your work into the new private repository.

5. Install dependencies:

```bash
npm install
```

```bash
npx playwright test
```

## Submission Guidelines
1. Commit your changes to your private GitHub repository.

2. Invite hkussie1111 to your repository.

3. Include the following files:

    - Your test plan (can be in any file format you want).

    - Your updated playwright tests.

    - A short README.md explaining your approach and any assumptions made.

    - Create a short [Loom](https://www.loom.com) video walking through your test plan and code.