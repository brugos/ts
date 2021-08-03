# Exercise

## 1. Requirements

- Build a couple of api endpoints in Node.js to manage a set of customer orders held in an SQLite database.
- Develop using typescript
- A sample sqlite3 is located under `./data` folder.
- The schema image is provided for reference below
- Ideally endpoints that both read from and write to the database.

TODO:

- Adding more tests (one per route)
- Mocking db response
- db migrations
- Centralise try/catch over the routes

## 2. Code Structure

The files follow the tree structure below:

- src
  - entity (ex: customers, order, etc)
    - interface.ts
    - router.ts
    - service.ts
- lib (shared functions)

## Instructions

To run the application:

- Get your sqlite db into ./data/customers.db
- `yarn && yarn dev`
