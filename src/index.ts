import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { customersRouter } from "./customers/router";

export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/healthcheck", (req: Request, res: Response) => {
  return res.json({ msg: "Alive!" });
});

app.use("/customers", customersRouter);

const PORT: number = parseInt((process.env.PORT || 7000) as string, 10);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
