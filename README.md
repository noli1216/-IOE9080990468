
# QA Capstone Project – Cypress & K6

![Cypress](https://img.shields.io/badge/Test-Cypress-green)
![K6](https://img.shields.io/badge/Performance-K6-blue)
![Node](https://img.shields.io/badge/Node.js-18+-brightgreen)

This project demonstrates **End-to-End automation testing** and **Performance testing** of the OrangeHRM demo application using **Cypress** and **K6**.  
It validates core user flows (Login, Candidate Search) and measures system behavior under load.

---

## 🔧 Tools & Technologies

- **Cypress** – UI End-to-End Automation  
- **K6** – Load & Performance Testing  
- **Node.js & NPM** – Project dependencies  
- **GitHub** – Version control & portfolio

---

## 📁 Project Structure

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
npm install
npx cypress open
npx cypress run

k6 run k6/login_test.js
k6 run --out json=results.json k6/login_test.js


```
📊 Reporting

Cypress generates screenshots and video recordings.

K6 provides response time metrics, thresholds, and load statistics.

Results can be visualized using Grafana.
```

👤 Author
Kurabachew M.
QA Engineer | Automation Tester
Cypress • K6 • Manual & Performance Testing
