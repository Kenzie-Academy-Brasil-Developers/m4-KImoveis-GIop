import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

export async function verifyEmail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const bodyEmail: string | undefined = req.body.email;
  if (bodyEmail) {
    const user: User | null = await userRepository.findOne({
      where: { email: bodyEmail },
    });
    if (user) {
      throw new AppError("Email already exists", 409);
    }
  }

  next();
}
