
import { api } from "@/shared/lib/axios";
import { AUTH_ENDPOINT } from "./auth.endpoint";
import type { ILoginFormValues, ILoginResponse } from "../types/login";
import type { ISuccessResponse } from "@/shared/types/api";
import type { IRegisterFormValues, IVerifyOtpResponse } from "../types/register";

export async function loginApi(values: ILoginFormValues) {
      const response = await api.post<ISuccessResponse<ILoginResponse>>(`${AUTH_ENDPOINT}/login`, values);

      return response.data;
}


export async function sendOtpApi(email: Pick<IRegisterFormValues, "email">) {
      const response = await api.post<IVerifyOtpResponse>(`${AUTH_ENDPOINT}/confirm-email-verification`, email);

      return response.data;
}

export async function verifyEmailApi(
      { email, code }: { email: Pick<IRegisterFormValues, "email">; code: string }
) { 
      const response = await api.post<IVerifyOtpResponse>(`${AUTH_ENDPOINT}/confirm-email-verification`, { email, code });

      return response.data;
}