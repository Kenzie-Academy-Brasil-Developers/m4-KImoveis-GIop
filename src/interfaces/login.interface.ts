import { z } from "zod";
import { createLoginSchema, createTokenResponseSchema } from "../schemas/index";

type TloginRequest = z.infer<typeof createLoginSchema>;
type TtokenLoginResponse = z.infer<typeof createTokenResponseSchema>;

export { TloginRequest, TtokenLoginResponse };
