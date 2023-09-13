import { z } from "zod";

const createRealEstateSchema = z.object({
  id: z.number(),
  value: z.number().or(z.string()).default(0),
  size: z.number().positive(),
  sold: z.boolean().default(false).optional(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  categoryId: z.number(),
  address: z.object({
    id: z.number(),
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.number().max(7).optional(),
    city: z.string().max(20),
    state: z.string().max(2),
  }),
});
const createRealEstateSchemaResponse = z.object({
  id: z.number(),
  value: z.number().or(z.string()).default(0),
  size: z.number(),
  sold: z.boolean().default(false).nullable(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  category: z.object({
    id: z.number(),
    name: z.string().max(45),
  }),
  address: z.object({
    id: z.number(),
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.number().max(7).optional(),
    city: z.string().max(20),
    state: z.string().max(2),
  }),
});
const createRealEstateSchemaCategories = z.object({
  id: z.number(),
  name: z.string().max(45),
  realEstate: z.object({
    value: z.number().or(z.string()).default(0),
    size: z.number(),
    sold: z.boolean().default(false).nullish(),
    createdAt: z.date().or(z.string()),
    updatedAt: z.date().or(z.string()),
  }),
});
const createRealEstateSchemaRequest = createRealEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  updatedAt: true,
});

export {
  createRealEstateSchema,
  createRealEstateSchemaRequest,
  createRealEstateSchemaCategories,
  createRealEstateSchemaResponse,
};
