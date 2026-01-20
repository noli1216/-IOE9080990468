import http from "k6/http";
import { check, sleep } from "k6";

// Load users from external JSON file
const users = JSON.parse(open("./users.json"));

// K6 options (Performance thresholds)
export const options = {
  cloud: {
    projectID: 6295296,
    name: "QA Capstone Project - Login Test",
  },

  stages: [
    { duration: "10s", target: 10 }, // ramp up
    { duration: "20s", target: 20 }, // steady load
    { duration: "10s", target: 0 }, // ramp down
  ],

  thresholds: {
    http_req_duration: ["p(95)<2000"], // 95% of requests under 2s
    http_req_failed: ["rate<0.05"], // error rate < 5%
  },
};

// URL for login POST requests
const LOGIN_URL =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate";

export default function () {
  // Pick a random user from JSON
  const user = users[Math.floor(Math.random() * users.length)];

  // Payload for login
  const payload = {
    username: user.email,
    password: user.password,
  };

  const params = {
    headers: { "Content-Type": "application/json" },
  };

  // Send login request
  const res = http.post(LOGIN_URL, JSON.stringify(payload), params);

  // Checks
  if (user.type === "valid") {
    check(res, {
      "Valid login status is 200": (r) => r.status === 200,
      "Response time < 2s": (r) => r.timings.duration < 2000,
    });
  } else {
    // For invalid users, we just log that a response was received
    check(res, {
      "Invalid login attempted": (r) => r.status !== 200,
      "Response time < 2s": (r) => r.timings.duration < 2000,
    });
  }

  sleep(1);
}
