import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Schedule } from "../entities";
import { AppError } from "../errors";

export async function verifyRealEstateScheduleDateHour(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { realEstateId, date, hour } = req.body;

  const existingSchedule = await AppDataSource.getRepository(Schedule)
    .createQueryBuilder("schedule")
    .where("schedule.realEstateId = :realEstateId", { realEstateId })
    .andWhere("schedule.date = :date", { date })
    .andWhere("schedule.hour = :hour", { hour })
    .getOne();
  if (existingSchedule) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  next();
}
