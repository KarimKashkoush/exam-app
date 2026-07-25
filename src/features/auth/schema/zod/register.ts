import { z } from "zod";

export const registerSchema = z
    .object({
        username: z
            .string()
            .min(1, "Username is required")
            .regex(
                /^[a-zA-Z0-9_]+$/,
                "Username can only contain letters, numbers, and underscores"
            ),
        email: z
            .string()
            .email("Invalid email address"),

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

        confirmPassword: z.string(),

        firstName: z.string().min(1, "First name is required"),

        lastName: z.string().min(1, "Last name is required"),

        phone: z.string().min(1, "Phone is required"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type RegisterFormData = z.infer<typeof registerSchema>;