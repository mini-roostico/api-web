# Subjekt - api-web

This repository hosts three NPM projects: `common`, `api` and `auth`.

- `common`: project containing the model classes, utilities and in general all that's used by both the `api` and `auth` projects.
- `api`: project containing a web API service for the management of *Sources* and Subjekt generation of results. Here the [`subjekt`](https://github.com/mini-roostico/subjekt) library is used.
- `auth`: project containing a web API service for authenticating users to the `api` service, taking care of the JWT authentication system.

Each of the projects has a `Dockerfile` that can be used to build a docker image out of it: for testing, a `docker-compose.yaml` file is available for setting up the whole application. 

These services are meant to be used together with a [frontend web application](https://github.com/mini-roostico/web-frontend): to deploy the whole ecosystem, use the [bootstrap repository](https://github.com/mini-roostico/bootstrap) 
and follow the instructions there.
