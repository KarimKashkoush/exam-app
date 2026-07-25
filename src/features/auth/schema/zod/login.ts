import * as z from "zod";

export const loginformationSchema = z.object({
    username: z
        .string()
        .min(1, "Username is required")
        .regex(
            /^[a-zA-Z0-9_]+$/,
            "Username can only contain letters, numbers, and underscores"
        ),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[A-Z]/, "Password must include at least one uppercase letter")
        .regex(/[a-z]/, "Password must include at least one lowercase letter")
        .regex(/[0-9]/, "Password must include at least one number")
        .regex(
            /[!@#$%^&*(),.?":{}|<>_\-+=\\[\]/`~';]/,
            "Password must include at least one special character"
        ),
});

