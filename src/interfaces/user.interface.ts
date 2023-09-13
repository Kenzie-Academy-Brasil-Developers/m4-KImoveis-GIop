import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  createUserSchema,
  createUserSchemaRequest,
  createUserSchemaResponse,
} from "../schemas/index";

type TuserRequest = z.infer<typeof createUserSchemaRequest>;
type TuserResponse = z.infer<typeof createUserSchemaResponse>;
type Tuser = z.infer<typeof createUserSchema>;
type TuserUpdateRequest = DeepPartial<TuserRequest>;

export { TuserRequest, TuserResponse, Tuser, TuserUpdateRequest };
