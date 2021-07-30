# Exercise

## 1. Requirements

We would like you to build a couple of api endpoints in Node.js to manage a set of customer orders held in an SQLite database.

Requirements:

Be developed using typescript
Use the data in the attached SQLite3 database file. (The schema image is provided for reference below)
We don't expect a full api but ideally we would like endpoints that both read from and write to the database.
We would like to see a good readme with instructions on how to run the application and suitable tests, how the application is delivered is up to you.

We understand that 1-2 hours is not a lot of time to do this in so don't feel pressured to spend days on it. Consider what you would add if you had more time and we can discuss.

## 2. Code Structure

The files follow the tree structure below:

- src
  - entity (ex: customers, order, etc)
    - interface.ts
    - router.ts
    - service.ts
- lib (shared functions)
