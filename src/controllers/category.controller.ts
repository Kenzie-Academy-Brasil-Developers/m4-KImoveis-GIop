import { Request, Response } from "express";
import { Tcategories, TcategoriesRequest } from "../interfaces/index";
import {
  createCategoryService,
  listCategorieService,
  listCategorieRealEstateService,
} from "../services/index";

import { Category } from "../entities";
const createCategoriesControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TcategoriesRequest = req.body;
  const newUser: Tcategories = await createCategoryService(userData);
  return res.status(201).json(newUser);
};
const listCategoriesControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listCategory: Tcategories[] = await listCategorieService();
  return res.status(200).json(listCategory);
};
const listCategoriesControllersRealEstate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const listCategoryRealEstate: Category = await listCategorieRealEstateService(
    id
  );
  return res.status(200).json(listCategoryRealEstate);
};

export {
  createCategoriesControllers,
  listCategoriesControllers,
  listCategoriesControllersRealEstate,
};
