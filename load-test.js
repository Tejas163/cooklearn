# CookLearn AI - Load Testing Script
# Run with: k6 run load-test.js

import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 },   // Ramp up to 10 users
    { duration: '1m', target: 10 },    // Stay at 10 users
    { duration: '30s', target: 50 },  // Ramp up to 50 users
    { duration: '2m', target: 50 },   // Stay at 50 users
    { duration: '30s', target: 100 },  // Ramp up to 100 users
    { duration: '2m', target: 100 },  // Stay at 100 users
    { duration: '1m', target: 0 },    // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],  // 95% of requests under 500ms
    http_req_failed: ['rate<0.01'],     // Less than 1% failure rate
  },
};

export default function () {
  // Test landing page
  const landingPage = http.get('https://euphonious-cat-2aeacd.netlify.app/');
  check(landingPage, {
    'landing page loads': (r) => r.status === 200,
    'landing page fast': (r) => r.timings.duration < 500,
  });

  sleep(1);

  // Test premium page
  const premiumPage = http.get('https://euphonious-cat-2aeacd.netlify.app/premium.html');
  check(premiumPage, {
    'premium page loads': (r) => r.status === 200,
    'premium page fast': (r) => r.timings.duration < 500,
  });

  sleep(1);

  // Test static assets (simulate)
  const staticAsset = http.get('https://euphonious-cat-2aeacd.netlify.app/');
  check(staticAsset, {
    'static assets': (r) => r.status === 200,
  });
}

// Alternative simple test without k6
export function simpleTest() {
  console.log('Testing https://euphonious-cat-2aeacd.netlify.app/');
}
