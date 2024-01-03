import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Required",
  }),
  password: z.string().min(5, {
    message: "Password must contain at least 5 characters",
  }),
});
