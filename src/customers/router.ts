import express, { Request, Response, Router } from "express";
import { getCustomers, getCustomer } from "./service";

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
