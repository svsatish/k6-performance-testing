Install K6 in mac:
- brew install k6

Run tests:

In Local:
- k6 run script.js
- k6 run --vus 10 --duration 30s script.js
- k6 run script --out script.js

In cloud:
- k6 cloud script.js

Distributed:
- kubectl apply -f /path/k6-resource.yaml

