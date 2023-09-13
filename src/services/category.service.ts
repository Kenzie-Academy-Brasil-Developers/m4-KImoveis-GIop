import { Repository } from "typeorm";
import { Tcategories, TcategoriesRequest } from "../interfaces/index";
import { Category } from "../entities";
import { AppDataSource } from "../data-source";
import { createCategoriesSchema, getCategoriesSchema } from "../schemas/index";

const createCategoryService = async (
  userData: TcategoriesRequest
): Promise<Tcategories> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const category: Category = categoryRepository.create(userData);
  await categoryRepository.save(category);
  const returnUser: Tcategories = createCategoriesSchema.parse(category);
  return returnUser;
};

const listCategorieService = async (): Promise<Tcategories[]> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const category = await categoryRepository.find();
  const categoryResponse: Tcategories[] = getCategoriesSchema.parse(category);

  return categoryResponse;
};

const listCategorieRealEstateService = async (
  id: number
): Promise<Category> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category | null = await categoryRepository.findOne({
    where: { id: id },
    relations: {
      realEstate: true,
    },
  });

  return category!;
};

export {
  createCategoryService,
  listCategorieRealEstateService,
  listCategorieService,
};
