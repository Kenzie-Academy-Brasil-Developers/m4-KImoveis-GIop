import { Request, Response } from "express";
import { TloginRequest, TtokenLoginResponse } from "../interfaces/index";
import { createLoginService } from "../services/index";

export const loginUserControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: TloginRequest = req.body;
  const token: TtokenLoginResponse = await createLoginService(loginData);
  return res.status(200).json(token);
};
