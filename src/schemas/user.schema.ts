import { z } from "zod";
const createUserSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullish(),
});

const createUserSchemaResponse = createUserSchema.omit({
  password: true,
});
const updateUserSchemaRequest = createUserSchema
  .omit({
    id: true,
    admin: true,
    createdAt: true,
    deletedAt: true,
    updatedAt: true,
  })
  .partial();
const allUserSchemaResponse = createUserSchema
  .omit({
    password: true,
  })
  .array();
const createUserSchemaRequest = createUserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
export {
  createUserSchema,
  createUserSchemaResponse,
  createUserSchemaRequest,
  allUserSchemaResponse,
  updateUserSchemaRequest,
};
