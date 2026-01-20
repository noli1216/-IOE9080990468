
# QA Capstone Project – Cypress & K6

![QA Automation](https://img.shields.io/badge/QA-Automation-blue) ![Performance](https://img.shields.io/badge/Performance-Testing-green)

This project demonstrates **end-to-end testing** and **performance testing** of the OrangeHRM demo website using **Cypress** and **K6**, simulating user interactions (login, candidate search) and measuring system performance under load.

---

## 🔧 Tools & Technologies

- **Cypress** – E2E automation testing
- **K6** – Load and performance testing
- **Node.js & NPM** – Project dependencies
- **GitHub** – Version control

---

## 📂 Project Structure


```text
QA-Capstone-Cypress/
├─ cypress/        # Cypress tests, fixtures, page objects
├─ k6/             # K6 performance test scripts
├─ package.json
├─ package-lock.json
└─ cypress.config.js



---

## 🚀 How to Run

### Cypress E2E Tests
```bash
npm install
npx cypress open    # Opens Cypress test runner
npx cypress run     # Runs all tests in CLI

k6 run k6/login_test.js                         # Run locally
k6 run --out json=results.json k6/login_test.js  # Save results

Kurabachew M. – QA Engineer / Automation Tester


