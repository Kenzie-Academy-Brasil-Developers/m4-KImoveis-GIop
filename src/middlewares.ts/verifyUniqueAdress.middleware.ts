import { Repository } from "typeorm";
import { Address } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { Request, Response, NextFunction } from "express";

export async function verifyAdress(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const adressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  const body = req.body.address;

  const address: Address | null = await adressRepository.findOne({
    where: { street: body.street, zipCode: body.zipCode, number: body.number },
  });

  if (address) {
    throw new AppError("Address already exists", 409);
  }
  next();
}
