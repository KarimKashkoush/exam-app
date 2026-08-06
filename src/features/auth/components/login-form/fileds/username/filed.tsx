import {
    Field,
    FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import type { LoginFormData } from "@/features/types/login";
import { useFormContext } from "react-hook-form";
export default function Username() {
    const {
        register,
        formState: { errors },
    } = useFormContext<LoginFormData>();
    return (
        <Field className="flex-1">
            <FieldLabel htmlFor="username">
                UserName<span className="text-red-500">*</span>
            </FieldLabel>

            <Input
                id="username"
                aria-invalid={errors.username ? "true" : "false"}
                type="text"
                placeholder="Ahmed@123"
                {...register("username")}
            />

            {errors.username && (
                <p className="text-sm text-red-500">
                    {errors.username.message}
                </p>
            )}
        </Field>
    )
}
