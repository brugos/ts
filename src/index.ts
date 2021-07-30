import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { getAllCustomers } from "./customers/service";
dotenv.config();

const PORT: number = parseInt((process.env.PORT || 7000) as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
getAllCustomers().catch((err) => console.error(err));

// app.get("/customers", async (req, res) => {
//   const customers = await getAllCustomers();
//   console.dir(customers);
//   return res.json({ customers });
// });

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });
