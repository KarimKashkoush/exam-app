import * as z from "zod";

export const registerEmailSchema = z.object({
    email: z
        .email("Please enter a valid email address")
        .min(1, "Email is required"),
});

export type RegisterFormData = z.infer<typeof registerEmailSchema>;