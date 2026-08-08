import type { REGISTER_STEPS } from "../constant/form-constant";
import type { registerSchema } from "../schema/zod/register-schema";

export type IRegisterStep = typeof REGISTER_STEPS[keyof typeof REGISTER_STEPS];

export type IRegisterFormValues = z.infer<typeof registerSchema>;

export interface IVerifyOtpResponse {
      massage: string;
}