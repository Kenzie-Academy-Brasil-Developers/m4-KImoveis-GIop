import { Router } from "express";
import {
  createRealEstateController,
  listRealEstateController,
} from "../controllers/index";
import { verifyAdmin } from "../middlewares.ts";
import { verifyTokenValidGet } from "../middlewares.ts";
import { verifyBodyIsValid } from "../middlewares.ts";
import { createRealEstateSchemaRequest } from "../schemas/index";
import { verifyAdress } from "../middlewares.ts";

export const realEstateRoute: Router = Router();
realEstateRoute.post(
  "",
  verifyTokenValidGet,
  verifyBodyIsValid(createRealEstateSchemaRequest),
  verifyAdmin,
  verifyAdress,
  createRealEstateController
);
realEstateRoute.get("", listRealEstateController);
