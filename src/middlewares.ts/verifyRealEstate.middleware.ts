import { Request, Response, NextFunction } from "express";
import { RealEstate } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

export async function verifyIdRealEstate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id: number = parseInt(req.params.id);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  let realEstate: RealEstate | null = await realEstateRepository.findOne({
    where: { id: id },
  });

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }
  next();
}
