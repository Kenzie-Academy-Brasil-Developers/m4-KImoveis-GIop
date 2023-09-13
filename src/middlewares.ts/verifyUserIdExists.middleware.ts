import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

export async function verifyId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const id: number = parseInt(req.params.id);

  const user: User | null = await userRepository.findOne({
    where: { id: id },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  next();
}
