# jenkins_e2e_poc


## Run e2e locally

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
$ docker build -t jaimesalas/e2e --build-arg API_URL=http://e2e-back:4000 
```

5. Run e2e tests

```bash
$ docker run --rm jaimesalas/e2e npm run test:e2e:local -- api_url=http://e2e-back:4000
```

## References

> CI with cypress: https://docs.cypress.io/guides/guides/continuous-integration.html#Boot-your-server