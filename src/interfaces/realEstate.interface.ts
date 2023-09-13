import { z } from "zod";
import {
  createRealEstateSchemaCategories,
  createRealEstateSchemaRequest,
  createRealEstateSchemaResponse,
} from "../schemas/index";

type TrealEstateRequest = z.infer<typeof createRealEstateSchemaRequest>;
type TrealEstateResponse = z.infer<typeof createRealEstateSchemaResponse>;
type TrealEstateCategory = z.infer<typeof createRealEstateSchemaCategories>;

export { TrealEstateRequest, TrealEstateResponse, TrealEstateCategory };
