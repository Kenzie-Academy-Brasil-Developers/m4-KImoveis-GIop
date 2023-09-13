import { z } from "zod";
const createCategoriesSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
});
const createCategoriesSchemaRequest = createCategoriesSchema.omit({
  id: true,
});
const getCategoriesSchema = z
  .object({
    id: z.number(),
    name: z.string().max(45),
  })
  .array();
export {
  createCategoriesSchema,
  createCategoriesSchemaRequest,
  getCategoriesSchema,
};
