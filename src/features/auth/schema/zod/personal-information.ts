import * as z from "zod";

export const personalInformationSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    username: z
        .string()
        .min(1, "Username is required")
        .regex(
            /^[a-zA-Z0-9_]+$/,
            "Username can only contain letters, numbers, and underscores"
        ),
    phoneNumber: z.string().min(1, "Phone number is required")
});

