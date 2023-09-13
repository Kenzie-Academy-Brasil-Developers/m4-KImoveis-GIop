import { Router } from "express";
import { loginUserControllers } from "../controllers/login.controller";

export const loginRoute: Router = Router();
loginRoute.post("", loginUserControllers);
