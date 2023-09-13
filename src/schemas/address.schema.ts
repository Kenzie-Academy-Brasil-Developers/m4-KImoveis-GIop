import { z } from "zod";

const addressSchema = z.object({
  id: z.number(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.number().max(7).optional(),
  city: z.string().max(20),
  state: z.string().max(2),
});

export { addressSchema };
