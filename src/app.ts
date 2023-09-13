import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import {
  userRoute,
  loginRoute,
  categoriesRoute,
  realEstateRoute,
  schedulesRoute,
} from "./routes/index";
import cors from "cors";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRoute);
app.use("/login", loginRoute);
app.use("/categories", categoriesRoute);
app.use("/realEstate", realEstateRoute);
app.use("/schedules", schedulesRoute);
app.use(handleErrors);
export default app;
