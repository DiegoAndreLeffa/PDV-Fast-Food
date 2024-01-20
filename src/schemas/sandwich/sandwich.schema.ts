import { z } from "zod";

export const getSandwichSchema = z.object({
  name: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.string(),
  img: z.string(),
  extras: z
    .array(
      z.object({
        id: z.number(),
        name: z.string().optional(),
        price: z.string(),
        description: z.string(),
        img: z.string(),
      })
    )
    .optional(),
});

export const getSandwichReturnSchema = getSandwichSchema.extend({
  id: z.number(),
});

export const sandwichReturnAllSchema = z.array(getSandwichReturnSchema);
