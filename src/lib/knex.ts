import { knex } from "knex";
import path from "path";

export const knexDev = knex({
  client: "sqlite3",
  connection: {
    filename: "./data/customers.db",
    //filename: path.join(__dirname, "./data/customers.db"),
  },
  useNullAsDefault: true,
});

export const knexLocal = knex({
  client: "sqlite3",
  connection: ":memory:",
  useNullAsDefault: true,
});

export const db = process.env.NODE_ENV === "local" ? knexLocal : knexDev;
