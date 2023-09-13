import { Router } from "express";
import {
  createCategoriesControllers,
  listCategoriesControllers,
  listCategoriesControllersRealEstate,
} from "../controllers/index";
import { createCategoriesSchemaRequest } from "../schemas/index";
import { verifyTokenValidGet } from "../middlewares.ts";
import { verifyAdmin } from "../middlewares.ts";
import { verifyCategoryNameExists } from "../middlewares.ts";

import { verifyCategoryExists } from "../middlewares.ts";
import { verifyBodyIsValid } from "../middlewares.ts";

export const categoriesRoute: Router = Router();
categoriesRoute.post(
  "",
  verifyBodyIsValid(createCategoriesSchemaRequest),
  verifyTokenValidGet,
  verifyAdmin,
  verifyCategoryNameExists,
  createCategoriesControllers
);
categoriesRoute.get("", listCategoriesControllers);
categoriesRoute.get(
  "/:id/realEstate",
  verifyCategoryExists,
  listCategoriesControllersRealEstate
);
