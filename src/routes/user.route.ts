import { Router } from "express";
import { verifyBodyIsValid } from "../middlewares.ts";
import {
  createUserSchemaRequest,
  updateUserSchemaRequest,
} from "../schemas/index";
import {
  createUserControllers,
  deleteUserControllers,
  listUsersControllers,
  updateUserControllers,
} from "../controllers/index";
import { verifyEmail } from "../middlewares.ts";
import { verifyAdmin } from "../middlewares.ts";

import { verifyTokenValidGet } from "../middlewares.ts";
import { verifyId } from "../middlewares.ts";
import { updateAdminPermission } from "../middlewares.ts";

export const userRoute: Router = Router();
userRoute.post(
  "",
  verifyBodyIsValid(createUserSchemaRequest),
  verifyEmail,
  createUserControllers
);
userRoute.get("", verifyTokenValidGet, verifyAdmin, listUsersControllers);
userRoute.patch(
  "/:id",
  verifyId,
  verifyBodyIsValid(updateUserSchemaRequest),
  verifyTokenValidGet,
  updateAdminPermission,
  updateUserControllers
);
userRoute.delete(
  "/:id",
  verifyId,
  verifyTokenValidGet,
  updateAdminPermission,
  deleteUserControllers
);
