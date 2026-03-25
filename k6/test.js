import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 1000 },    // ramp up to 1k VUs
    { duration: '2m', target: 3000 },    // ramp up to 3k VUs
    { duration: '2m', target: 6000 },    // ramp up to 6k VUs
    { duration: '2m', target: 9000 },    // ramp up to 9k VUs
    { duration: '3m', target: 12000 },   // peak load: 12k VUs
    { duration: '2m', target: 0 },       // ramp down
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],       // <1% failed requests
    http_req_duration: ['p(95)<500'],     // 95% requests < 500ms
  },
};

export default function () {
  let res = http.get('http://apisix:9080/hello');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response < 500ms': (r) => r.timings.duration < 500,
  });

  // Optional: minimal sleep to reduce VU churn if needed
   sleep(0.1);
}
