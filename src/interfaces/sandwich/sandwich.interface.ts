import { z } from "zod";
import {
  getSandwichReturnSchema,
  getSandwichSchema,
  sandwichReturnAllSchema,
} from "../../schemas";

export type tSandwichReq = z.infer<typeof getSandwichSchema>;

export type tSandwichRes = z.infer<typeof getSandwichReturnSchema>;

export type tSandwichResAll = z.infer<typeof sandwichReturnAllSchema>;
