import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

export const registerSchema = z.object({
    email: z.email({ error: ((iss) => iss.code === "invalid_type" ? "Please enter your email" : "Invalid email address") }),

    username: z.string("please enter your username")
        .nonempty("Username is required")
        .min(2, "Username is required")
        .max(50, "Username must be less than 50 characters")
        .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),

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

    confirmPassword: z.string("Confirm password is required")
        .nonempty("Confirm password is required"),

    firstName: z.string()
        .nonempty("First name is required")
        .min(2, "First name is required")
        .max(50, "First name must be less than 50 characters"),

    lastName: z.string()
        .nonempty("Last name is required")
        .min(2, "Last name is required")
        .max(50, "Last name must be less than 50 characters"),

    phone: z.string("Please enter your phone number")
        .nonempty("Please enter your phone number")
        .min(10, "Phone number must be at least 10 digits")
        .refine(val => isValidPhoneNumber(val, { defaultCountry: "EG" }), "Invalid phone number"),

    country: z.string("Please select your country")
        .nonempty("Please select your country"),
});