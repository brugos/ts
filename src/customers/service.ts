import { db } from "../lib/knex";
import { ICustomer } from "./interface";

const fields = ["id", "email", "given_name", "family_name"];
const table = db<ICustomer>("customers");

export const getCustomers = () => table.select(fields);

export const getCustomer = (id: string) => table.select(fields).where("id", id);

export const createCustomer = (customer: ICustomer) =>
  db("customers").insert(customer);

export const deleteCustomer = (customer_id: ICustomer["id"]) =>
  table.where("id", customer_id).del();

export const updateCustomer = (id: ICustomer["id"], customer: ICustomer) =>
  table.where("id", id).update(customer);
