# [K6](https://k6.io/)
![](/images/k6_logo.png)

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

#### It integrates with various other tools/features:

- K6 using AWS CodeBuild Platform - https://k6.io/blog/integrating-k6-with-aws-codebuild/
- Chaos testing with xk6-disruptor - https://k6.io/blog/chaos-testing-microservices-with-xk6-disruptor/
- Load Testing SQL Databases with k6 - https://k6.io/blog/load-testing-sql-databases-with-k6/
- Load Testing with k6 using GitHub Actions - https://k6.io/blog/load-testing-using-github-actions/
- Deployment-time testing with Grafana k6 and Flagger - https://k6.io/blog/deployment-time-testing-with-grafana-k6-and-flagger/
- Debugging Using a Web Proxy - https://k6.io/blog/k6-load-testing-debugging-using-a-web-proxy/
- Rendezvous with k6 - https://k6.io/blog/rendezvous-with-k6/

#### Onboarding is easy if there are already existing performance tests as we have converters which will convert code to K6 ( not 100% and need script refactoring)

- Load Testing Your API with Postman - https://k6.io/blog/load-testing-with-postman-collections/
- Jmeter to K6 converter - https://k6.io/blog/ref-announcing-jmeter-to-k6-js-converter-tool/
- Load Testing Your API with Swagger/OpenAPI and k6 - https://k6.io/blog/load-testing-your-api-with-swagger-openapi-and-k6/ 

## How to use K6?
### Install K6 in mac:
```
brew install k6
```

### Run tests:

K6 supports 3 different execution modes - local, cloud, distributed.

#### 1. Local:
```
k6 run script.js
k6 run --vus 10 --duration 30s script.js
k6 run script --out script.js
K6_BROWSER_ENABLED=true k6 run script.js
```

![](/images/k6_local.png)

#### 2. Cloud:
```
k6 cloud script.js
```
![](/images/k6_cloud_tests.png)
  - For a free-tier subscription cloud account, we have only limited access as

  ![](/images/k6_cloud_subscription.png)
  - Also, please note that k6 cloud increments the count in your subscribed account for just streaming the results to cloud
  
![](/images/k6_cloud_results.png)

#### 3. Distributed:
```
kubectl apply -f /path/k6-resource.yaml
```

## Results ouput:
- K6 geneerates metrics that measure the performance of the system. These metrics can be customized as required. 
- For local execution, results are printed in console after test run. Also, they can be streamed to different outputs - K6 cloud, elasticsearch, New relic, Grafana, to different services, etc.. 

## Onboarding:

#### 1. From converters

If you already have some API tests developed previously and like to onboard quickly to use K6, K6 provides many extensions for such situations. Some extensions are HAR, Jmeter, Postman, Swagger etc.

#### Example Postman:
- Export & have your working [Postman collection](/K6.postman_collection.json) ready. 
- Install Node.js
- Install postman-to-k6 extension
```
npm install -g @apideck/postman-to-k6
```
- Convert postman collection to scripts
```
postman-to-k6 postman-collection.json -o postman-to-k6-script.js
```
- run the script in any of your preferred execution mode

#### 2. Recorder

K6 provides `k6 Browser Recorder` for chrome and firefox browser. So, we can get the extension and record browser actions and when saved, it generates a script in our cloud account. See [recorded-test.js](/recorded-test.js)

#### 3. Write tests from scratch

You may write tests from scratch in Javascript. Please see the [docs](https://k6.io/docs/using-k6/). We may also write in other languages like Typescript and Go. 

## Jmeter Vs K6:

There is no best tool that fits everyone. It all depends on situation in your team is in..

#### JMeter is best for:
- traditional testing teams
- those looking for a GUI-driven testing tool with tons of third-party tutorials and extensive protocol support
- previous users of commercial tools like LoadRunner and NeoLoad

#### k6 is best for:
- collaborative, cross-functional engineering teams where testing spans acrosss multiple roles
- those looking for a simple and lightweight, yet fully-featured load testing tool
- teams looking to integrate testing into existing development workflows and CI/CD pipelines

[Detailed table comparison - Jmeter Vs K6](https://k6.io/blog/k6-vs-jmeter/#comparison-table-jmeter-vs-k6-1)

## Browser testing:

Browser testing will be helpful to uncover some issues missed by the default K6 engine as it uses protocol level. K6 installation has built-in `K6 browser module` which is built on top of Playwright API. Using this module, we can interact with real browser and test application under test. 

- Example [ui-test.js](/ui-test.js)
- Example [hybrid-test.js](/hybrid-test.js)

Detailed [doc](https://k6.io/docs/javascript-api/k6-browser/get-started/)

## Using K6 to generate traffic on Canary wwhile deployments

Jmeter can be used along with K8's but there is not much info if it can be integrated with Flagger but on the otherside, we have a blog covering the integration of K6 with K8's and Flagger.

Kubernetes - main benefit of deploying apps using K8's is its ability to scale & manage containerized apps at scale

Flagger - Flagger can interact & analyze Kubernetes deployments. It enables canary or blue/green releases, A/B testing, and traffic mirroring (shadowing). It supports querying a variety of metrics sources to determine the canary’s health before, during, and after traffic is moved from the previous version.

https://github.concur.com/foundation/devfabric/blob/main/core/helm/devfabric/templates/canary.yaml

``` yaml
kind: Canary
metadata:
name: my-app
namespace: my-app
spec:
analysis:
   interval: 1m # How long between iterations
   iterations: 1 # How many iterations (increase traffic + analysis)
   threshold: 2 # How many failed analyses before canary fails
   metrics: ... # list of metrics to check at each iteration (not covered in this article)
service: # description of the service to be created by Flagger
   name: my-app
   port: 80
   targetPort: 80
targetRef: # reference to the workload managed by Flagger
   apiVersion: apps/v1
   kind: Deployment
   name: my-app
```

Problem: Flagger does not provide a testing solution that is suitable for all HTTP services. Its own load tester cannot reject a canary based on responses — it’s a fire-and-forget client. This means that all services that are tested must be suitably instrumented with metrics, and complex test cases cannot be implemented.

Combining Flagger & K6 solves this issue

``` yaml
apiVersion: flagger.app/v1beta1
kind: Canary
metadata:
name: my-app
namespace: my-app
spec:
analysis:
   interval: 1m
   iterations: 1
   threshold: 2 
   metrics: ...
   webhooks:
     - name: k6-load-test
       timeout: 5m
       type: pre-rollout
       url: http://k6-loadtester.flagger/launch-test
       metadata:
         slack_channels: flagger-test
         script: |
           import http from 'k6/http';
           import { sleep } from 'k6';
 
           export const options = {
               duration: '1m',
               vus: 1,
               thresholds: {
                   http_req_duration: ['p(95)<500'],
               },
           };
 
           export default function () {
               const res = http.get('https://test.k6.io');
               sleep(1);
           }
service: ...
targetRef: ...
```

Detailed blog [here](https://k6.io/blog/deployment-time-testing-with-grafana-k6-and-flagger/)



