import { z } from "zod";
import {
  scheduleSchemasRequest,
  scheduleSchemasResponse,
  schedulesSchemas,
} from "../schemas/index";

type TscheduleRequest = z.infer<typeof scheduleSchemasRequest>;
type TscheduleResponse = z.infer<typeof scheduleSchemasResponse>;
type Tschedule = z.infer<typeof schedulesSchemas>;
interface TscheduleCreateResponse {
  message: string;
}
export {
  Tschedule,
  TscheduleRequest,
  TscheduleResponse,
  TscheduleCreateResponse,
};
