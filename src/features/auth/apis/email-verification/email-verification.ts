const VITE_API_BASE_UR = import.meta.env.VITE_API_LINK;

export const emailVerification = async (email: string) => {
    const response = await fetch(
        `${VITE_API_BASE_UR}/api/auth/send-email-verification`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        }
    );

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