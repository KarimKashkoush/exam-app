import {
    Field,
    FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import type { personalInformationSchema } from "@/features/auth/schema/zod/personal-information";
import type z from "zod";
import { useFormContext } from "react-hook-form";

export default function UsernameField() {
    const {
        register,
        formState: { errors },
    } = useFormContext<z.infer<typeof personalInformationSchema>>();
    return (
        <Field className="flex-1">
            <FieldLabel htmlFor="username">Username<span className="text-red-500">*</span>
            </FieldLabel>

            <Input
                id="username"
                type="text"
                placeholder="ahmed123"
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
