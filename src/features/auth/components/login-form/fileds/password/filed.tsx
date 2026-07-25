import {
    Field,
    FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import type { LoginFormData } from "@/features/types/login";
import { useFormContext } from "react-hook-form";
export default function Password() {
    const {
        register,
        formState: { errors },
    } = useFormContext<LoginFormData>();
    return (
        <Field className="flex-1">
            <FieldLabel htmlFor="password">
                Password<span className="text-red-500">*</span>
            </FieldLabel>

            <Input
                id="password"
                type="text"
                placeholder="* * * * * * * *"
                {...register("password")}
            />

            {errors.password && (
                <p className="text-sm text-red-500">
                    {errors.password.message}
                </p>
            )}
        </Field>
    )
}
