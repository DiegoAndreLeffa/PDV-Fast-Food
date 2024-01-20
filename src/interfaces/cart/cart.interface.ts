import { z } from "zod";
import { getCartReturnSchema, getCartSchema } from "../../schemas";

export type tCartReq = z.infer<typeof getCartSchema>;

export type tCartRes = z.infer<typeof getCartReturnSchema>;
