const API_LINK = import.meta.env.VITE_API_LINK;

import type { RegisterFormData } from "@/features/types/register-interface";

export const register = async (formData: RegisterFormData) => {
    const response = await fetch(`${API_LINK}/api/register`, {
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