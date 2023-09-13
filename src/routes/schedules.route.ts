import { Router } from "express";
import { verifyTokenValidGet } from "../middlewares.ts";
import { verifyBodyIsValid } from "../middlewares.ts";
import { scheduleSchemasRequest } from "../schemas/index";
import {
  createScheduleController,
  listScheduleRealEstateController,
} from "../controllers/index";
import { verifyAdmin } from "../middlewares.ts";
import { verifyIdRealEstate } from "../middlewares.ts";
import { verifyUserScheduleDateHour } from "../middlewares.ts";
import { verifyRealEstateScheduleDateHour } from "../middlewares.ts";
import { verifyHour } from "../middlewares.ts";
import { verifyDateAvailable } from "../middlewares.ts";

export const schedulesRoute: Router = Router();
schedulesRoute.post(
  "",
  verifyTokenValidGet,
  verifyBodyIsValid(scheduleSchemasRequest),
  verifyIdRealEstate,
  verifyUserScheduleDateHour,
  verifyRealEstateScheduleDateHour,
  verifyHour,
  verifyDateAvailable,
  createScheduleController
);
schedulesRoute.get(
  "/realEstate/:id",
  verifyTokenValidGet,
  verifyAdmin,
  verifyIdRealEstate,
  listScheduleRealEstateController
);
