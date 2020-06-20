
# SSR CI

[![solo474](https://circleci.com/gh/solo474/ssr-ci.svg?style=svg)](https://app.circleci.com/pipelines/github/solo474/ssr-ci?branch=master)

## Stack

### UI Framework
 - React
 - Jest unit testing

### Infrastructure
 - ECS with Fargate - with farget SSR task replicas and auto scaling will be easy and cost effective with good SSR performance.
 - CDN CloudFront - CloudFront points to Elastic Load Balancer that forwards requests to ECS replica service

### Continues Integration  
  - Circle CI will test and build the frontend source code
  - On a successful build will create a docker image and publishes to docker hub
 
## Demo

https://d1lm9ojeckj3z1.cloudfront.net/news/1

![alt text](https://raw.githubusercontent.com/solo474/ssr-ci/master/fargate.jpg "Diagram")

## Performance

 - Charts are lazy loaded using `@loadable/components`, loading and execution of this chart will not stop site being interactive and other high priority renders

 - Cloud Front is used as CDN. all get requests will be cached at edge locations based on origin headers. not API calls but static assets like CSS, JS and other stuff.

 - Content is being  gzip compressed by CloudFront

 - No render blocking external CSS used, CSS will be served by style tags, it sacrifices caching but utilizes main thread in critical rendering path

 - SSR performance at server side can be managed by auto scaling the replica service powered by fargagte

 ## HackerNews API

 - Hacker news API is abstracted into a react hook `useHackerNews`

 Example

 ```javascript

   const { data, actions } = useHackerNews();

   //Changing implementation of these functions can later speak to API

   actions.hide();

   actions.upVote();

 ```
