# jenkins_e2e_poc

## Run e2e locally

1. Start back on terminal, notice that publishes the app on referenced `PORT` on `.env`

2. Start front-end on terminal, notice that resolve its dependencies from `API_URL` on `.env`

3. Run cypress locally, select test

## Run e2e locally with Docker

1. Create a docker network

```bash
$ docker network create e2e
```

2. Build back image

```bash
$ docker build -t jaimesalas/e2e-back ./back
```

3. Run backend 

```bash
$ docker run -d --name e2e-back -e PORT=4000 --network e2e jaimesalas/e2e-back
```

4. Build front image

```bash
$ docker build -t jaimesalas/e2e --build-arg API_URL=http://e2e-back:4000 -f ./front/Dockerfile.e2e ./front
```

5. Run e2e tests

```bash
$ docker run --rm --network e2e jaimesalas/e2e npm run test:e2e:local -- api_url=http://e2e-back:4000
```

## References

> CI with cypress: https://docs.cypress.io/guides/guides/continuous-integration.html#Boot-your-server
> Running multiple docker containers in parallel: https://www.kabisa.nl/tech/running-multiple-docker-containers-in-parallel-with-jenkins/
> Ability to run Docker container in foreground mode (no detached): https://issues.jenkins-ci.org/browse/JENKINS-48417
> Asserting Network calls from Cypress Tests: https://www.cypress.io/blog/2019/12/23/asserting-network-calls-from-cypress-tests/