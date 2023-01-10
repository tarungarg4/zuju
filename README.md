## Description

Coding challenge for Zuju digital

## Installation

```bash
$ npm install
```

## Pre Requisite Install Mysql

```run mysql with following credentials
  user: root
  password: root
  database zuju
```

You can also change the credentials with your existing setup in `src/infra/typeorm.service.ts`

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Documentation

Once you have run the application successfully, you can find the documentation for this project at http://localhost:3000/swagger

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
