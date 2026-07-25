import type { VerifyOtpFormData } from "../../schema/zod/verify-otp";

const API_LINK = import.meta.env.VITE_API_LINK;

export const otpVerification = async (
    { code, email }: VerifyOtpFormData & { email: string }
) => {
    const response = await fetch(`${API_LINK}/api/auth/confirm-email-verification`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            code,
        }),
    });

    return response.json();
};