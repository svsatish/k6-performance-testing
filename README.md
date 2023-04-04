## What is K6?
Grafana k6 is an open-source load testing tool that makes performance testing easy and productive for engineering teams. k6 is free, developer-centric, and extensible.
Using k6, you can test the reliability and performance of your systems and catch performance regressions and problems earlier. k6 will help you to build resilient and performant applications that scale.
This was launched in 2017 by LoadImpact and acquired by Grafana labs in 2021.

## Who can use K6?
k6 users are typically Developers, QA Engineers, SDETs, and SREs. They use k6 for testing the performance and reliability of APIs, microservices, and websites. Common k6 use cases are:

- Load testing
k6 is optimized for minimal resource consumption and designed for running high load tests (spike, stress, soak tests) .
- Browser testing
Through k6 browser, you can run browser-based performance testing and catch issues related to browsers only which can be skipped entirely from the protocol level.
- Chaos and resilience testing
You can use k6 to simulate traffic as part of your chaos experiments, trigger them from your k6 tests or inject different types of faults in Kubernetes with xk6-disruptor.
- Performance and synthetic monitoring
With k6, you can automate and schedule to trigger tests very frequently with a small load to continuously validate the performance and availability of your production environment.

## Why K6?
- It is a lightweight, developer-oriented, and super extensible application for performance, load testing, and even SRE tasks.
- Scripts developed using JavaScript on any text platform.
- It can reuse script sections as functions in other scripts.
- Lean solution with blazing performance.
- Natively supports HTTP 1 & 2, WebSockets, and gRPC.
- Increases support through org/community-built extensions (browser automations, results outputs, queue protocols, Kubernetes, tracing, chaos, etc.)
- Easy to integrate into CI/CD platforms through powerful command line options.
------------------------------------------------------------------------------------
### It integrates with various other tools/features:

- K6 using AWS CodeBuild Platform - https://k6.io/blog/integrating-k6-with-aws-codebuild/
- Chaos testing with xk6-disruptor - https://k6.io/blog/chaos-testing-microservices-with-xk6-disruptor/
- Load Testing SQL Databases with k6 - https://k6.io/blog/load-testing-sql-databases-with-k6/
- Load Testing with k6 using GitHub Actions - https://k6.io/blog/load-testing-using-github-actions/
- Deployment-time testing with Grafana k6 and Flagger - https://k6.io/blog/deployment-time-testing-with-grafana-k6-and-flagger/
- Debugging Using a Web Proxy - https://k6.io/blog/k6-load-testing-debugging-using-a-web-proxy/
- Rendezvous with k6 - https://k6.io/blog/rendezvous-with-k6/
------------------------------------------------------------------------------------
### Onboarding is easy if there are already existing performance tests as we have converters which will convert code to K6 ( not 100% and need script refactoring)

- Load Testing Your API with Postman - https://k6.io/blog/load-testing-with-postman-collections/
- Jmeter to K6 converter - https://k6.io/blog/ref-announcing-jmeter-to-k6-js-converter-tool/
- Load Testing Your API with Swagger/OpenAPI and k6 - https://k6.io/blog/load-testing-your-api-with-swagger-openapi-and-k6/ 

## How to use K6?
### Install K6 in mac:
- brew install k6

### Run tests:

In Local:
- k6 run script.js
- k6 run --vus 10 --duration 30s script.js
- k6 run script --out script.js

In cloud:
- k6 cloud script.js
  - For a free-tier subscription cloud account, we have only limited access as
  - Also, please note that k6 cloud increments the count in your subscribed account for just streaming the results to cloud

Distributed:
- kubectl apply -f /path/k6-resource.yaml