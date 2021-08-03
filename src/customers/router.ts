import express, { Request, Response, Router } from "express";
import {
  getCustomers,
  getCustomer,
  createCustomer,
  deleteCustomer,
} from "./service";
import { ICustomer } from "./interface";
import { v4 as getId } from "uuid";

export const customersRouter = express.Router();

customersRouter.get("/", async (req: Request, res: Response) => {
  try {
    const customers = await getCustomers();
    return res.json({ customers });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

customersRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log("### customer id: ", id);
    const customers = await getCustomer(id);

    if (customers.length > 0) return res.json({ customers });

    return res.status(404).json({ error: "customer not found" });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

function validateCustomer(customer: ICustomer): boolean {
  return true;
}

customersRouter.post("/", async (req: Request, res: Response) => {
  try {
    const bodyCustomer: ICustomer = req.body;
    console.log(bodyCustomer);
    // validateCustomer(bodyCustomer);
    bodyCustomer.id = getId();
    const newCustomerId = await createCustomer(bodyCustomer);
    return res.json({ newCustomerId });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

customersRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log("### deleting customer id: ", id);
    const deleted = await deleteCustomer(id);
    console.log({ deleted });
    // if (customers.length > 0) return res.json({ customers });

    // return res.status(404).json({ error: "customer not found" });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});
