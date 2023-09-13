import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Schedule } from "../entities";
import { AppError } from "../errors";

export async function verifyUserScheduleDateHour(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { date, hour } = req.body;
  let userId = res.locals.decoded.sub;

  const existingSchedule = await AppDataSource.getRepository(Schedule)
    .createQueryBuilder("schedule")
    .where("schedule.userId = :userId", { userId })
    .andWhere("schedule.date = :date", { date })
    .andWhere("schedule.hour = :hour", { hour })
    .getOne();
  if (existingSchedule) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  next();
}
