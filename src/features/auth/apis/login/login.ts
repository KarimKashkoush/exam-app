const API_LINK = import.meta.env.VITE_API_LINK;

import type { LoginFormData } from "@/features/types/login";

export const LoginApi = async (formData: LoginFormData) => {
    const response = await fetch(`${API_LINK}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
        throw {
            status: response.status,
            message: result.message,
            errors: result.errors,
        };
    }

    return result;
};