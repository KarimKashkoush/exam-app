import type z from "zod";
import type { registerSchema } from "../schemas/register.schema";

export type ILoginFormValues = z.infer<typeof registerSchema>;

export interface IEmailVerifyRequest {
      email: string;
}

export interface IEmailVerifyResponse {
      message: string;
}