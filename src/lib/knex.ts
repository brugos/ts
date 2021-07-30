import { knex } from "knex";

export const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "customers.db",
  },
  useNullAsDefault: true,
});
