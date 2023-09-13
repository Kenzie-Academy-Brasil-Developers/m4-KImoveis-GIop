import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { Category, User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

export async function verifyCategoryNameExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const bodyName: string | undefined = req.body.name;
  if (bodyName) {
    const category: Category | null = await categoryRepository.findOne({
      where: { name: bodyName },
    });
    if (category) {
      throw new AppError("Category already exists", 409);
    }
  }

  next();
}
