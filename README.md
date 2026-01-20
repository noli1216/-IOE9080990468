QA Capstone Project – Cypress & K6

This project demonstrates end-to-end testing and performance testing of the OrangeHRM demo website using Cypress and K6, simulating user interactions (login, candidate search) and measuring system performance under load.

Tools & Technologies

Cypress – E2E automation

K6 – Load and performance testing

Node.js & NPM – Project dependencies

GitHub – Version control

Project Structure
QA-Capstone-Cypress/
├─ cypress/        # Cypress tests, fixtures, page objects
├─ k6/             # K6 performance test scripts
├─ package.json
├─ package-lock.json
└─ cypress.config.js

How to Run

Cypress E2E Tests

npm install
npx cypress open    # Open Cypress test runner
npx cypress run     # Run all tests in CLI


K6 Performance Tests

k6 run k6/login_test.js                   # Run locally
k6 run --out json=results.json k6/login_test.js   # Save results

Reporting

Cypress generates screenshots & videos

K6 outputs metrics, response times, thresholds; can integrate with Grafana

Author

Kurabachew M. – QA Engineer / Automation Tester
