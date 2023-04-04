import http from 'k6/http';
import { sleep } from 'k6';

// init section - you define the test config/options here
export const options = {
  vus: 10,
  duration: '30s',
};

// vu/default function - this is the entry point for execution
export default function () {
  http.get('http://test.k6.io');
  sleep(1);
}
