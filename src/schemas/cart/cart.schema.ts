import { z } from "zod";
import { getSandwichReturnSchema } from "../sandwich/sandwich.schema";

export const getCartSchema = z.object({
  customerName: z.string(),
  status: z.string(),
  observations: z.string().optional(),
  sandwiches: z.array(getSandwichReturnSchema),
});

export const getCartReturnSchema = getCartSchema.extend({
  id: z.number(),
});
