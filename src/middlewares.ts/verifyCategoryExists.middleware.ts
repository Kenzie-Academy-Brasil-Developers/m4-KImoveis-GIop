import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { Category } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

export async function verifyCategoryExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const id: number = parseInt(req.params.id);

  const category: Category | null = await categoryRepository.findOne({
    where: { id: id },
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }
  next();
}
