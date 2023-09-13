import { Request, Response } from "express";
import {
  createScheduleService,
  listScheduleRealEstateService,
} from "../services/index";
import { TscheduleCreateResponse, TscheduleRequest } from "../interfaces/index";
import { RealEstate } from "../entities";

export const createScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  let userId: number = parseInt(res.locals.decoded.sub);

  const body: TscheduleRequest = req.body;
  const newSchedule: TscheduleCreateResponse = await createScheduleService(
    body,
    userId
  );
  return res.status(201).json(newSchedule);
};
export const listScheduleRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const list: RealEstate = await listScheduleRealEstateService(id);
  return res.status(200).json(list);
};
