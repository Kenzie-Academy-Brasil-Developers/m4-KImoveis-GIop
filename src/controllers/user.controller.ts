import {
  TuserRequest,
  TuserResponse,
  TuserUpdateRequest,
} from "../interfaces/index";
import { Request, Response } from "express";
import {
  createUserService,
  listUserService,
  updateUserService,
  deleteUserService,
} from "../services/index";
import { User } from "../entities";

export const createUserControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TuserRequest = req.body;
  const newUser: TuserResponse = await createUserService(userData);
  return res.status(201).json(newUser);
};
export const listUsersControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listUser: TuserResponse[] = await listUserService();
  return res.status(200).json(listUser);
};
export const updateUserControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TuserUpdateRequest = req.body;
  const userid: number = parseInt(req.params.id);
  const updateUser: TuserResponse = await updateUserService(userData, userid);
  return res.status(200).json(updateUser);
};
export const deleteUserControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const deleteUser: User = await deleteUserService(id);
  return res.status(204).json(deleteUser);
};
