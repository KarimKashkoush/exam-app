
import { api } from "@/shared/lib/axios";
import { AUTH_ENDPOINT } from "./auth.endpoint";
import type { ILoginFormValues, ILoginResponse } from "../types/login";
import type { ISuccessResponse } from "@/shared/types/api";
import type { IRegisterFormValues, IVerifyOtpResponse } from "../types/register";


// Login API
export async function loginApi(values: ILoginFormValues) {
      const response = await api.post<ISuccessResponse<ILoginResponse>>(`${AUTH_ENDPOINT}/login`, values);

      return response.data;
}


// Send OTP API
export async function sendOtpApi(email: IRegisterFormValues["email"]) {
      const response = await api.post<IVerifyOtpResponse>(`${AUTH_ENDPOINT}/send-email-verification`, { email });

      return response;
}


// Verify Email API
export async function verifyEmailApi(
      { email, code }: Pick<IRegisterFormValues, "email"> & { code: string }
) { 
      const response = await api.post<IVerifyOtpResponse>(`${AUTH_ENDPOINT}/confirm-email-verification`, { email, code });

      return response.data;
}