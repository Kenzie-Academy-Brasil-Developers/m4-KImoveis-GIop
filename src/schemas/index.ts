import { addressSchema } from "./address.schema";
import {
  createCategoriesSchema,
  createCategoriesSchemaRequest,
  getCategoriesSchema,
} from "./category.schema";
import { createLoginSchema, createTokenResponseSchema } from "./login.schema";
import {
  createRealEstateSchema,
  createRealEstateSchemaCategories,
  createRealEstateSchemaRequest,
  createRealEstateSchemaResponse,
} from "./realEstate.schema";
import {
  schedulesSchemas,
  scheduleSchemasRequest,
  scheduleSchemasResponse,
} from "./schedules.schema";
import {
  allUserSchemaResponse,
  createUserSchema,
  createUserSchemaRequest,
  createUserSchemaResponse,
  updateUserSchemaRequest,
} from "./user.schema";

export {
  addressSchema,
  createCategoriesSchema,
  createCategoriesSchemaRequest,
  createLoginSchema,
  createRealEstateSchema,
  createRealEstateSchemaCategories,
  createRealEstateSchemaRequest,
  createRealEstateSchemaResponse,
  createTokenResponseSchema,
  createUserSchema,
  createUserSchemaRequest,
  createUserSchemaResponse,
  getCategoriesSchema,
  scheduleSchemasRequest,
  scheduleSchemasResponse,
  schedulesSchemas,
  allUserSchemaResponse,
  updateUserSchemaRequest,
};
