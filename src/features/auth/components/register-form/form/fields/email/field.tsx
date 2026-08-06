import { useFormContext } from "react-hook-form";

import {
    Field,
    FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import { type RegisterFormData } from "../../../../../schema/zod/register-email";

export default function Email() {
    const {
        register,
        formState: { errors },
    } = useFormContext<RegisterFormData>();

    return (
        <Field className="mb-8">
            <FieldLabel htmlFor="email">
                Email
            </FieldLabel>

            <Input
                id="email"
                type="email"
                aria-invalid={errors.email ? "true" : "false"}
                placeholder="user@example.com"
                {...register("email")}
            />

            {errors.email && (
                <p className="text-sm text-red-500">
                    {errors.email.message}
                </p>
            )}
        </Field>
    );
}