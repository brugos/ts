import { knexInstance as db } from "../lib/knex";
import { ICustomer } from "./interface";

// const db = knexInstance("customers");

export function createCustomer(customer: ICustomer) {
  return db("customers").insert(customer);
}

export async function getAllCustomers() {
  const customers = await db<ICustomer>("customers").select(
    "id, email, given_name, family_name"
  );
  console.log("customers", customers);
  return customers;
}

export function deleteCustomer(customer_id: ICustomer["id"]) {
  return db("customers").where("id", customer_id).del();
}

function updateCustomer(customer_id: ICustomer["id"], customer: ICustomer) {
  return db("customers").where("id", customer_id).update(customer_id);
}
