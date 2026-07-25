import {
    Field,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { personalInformationSchema } from "@/features/auth/schema/zod/personal-information";
import type z from "zod";
import { useFormContext } from "react-hook-form";

export default function NameField() {
    const {
        register,
        formState: { errors },
    } = useFormContext<z.infer<typeof personalInformationSchema>>();

    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                <Field className="flex-1">
                    <FieldLabel htmlFor="firstName">
                        First Name<span className="text-red-500">*</span>
                    </FieldLabel>

                    <Input
                        id="firstName"
                        type="text"
                        placeholder="Ahmed"
                        {...register("firstName")}
                    />

                    {errors.firstName && (
                        <p className="text-sm text-red-500">
                            {errors.firstName.message}
                        </p>
                    )}
                </Field>

                <Field className="flex-1">
                    <FieldLabel htmlFor="lastName">
                        Last Name<span className="text-red-500">*</span>
                    </FieldLabel>

                    <Input
                        id="lastName"
                        type="text"
                        placeholder="Ali"
                        {...register("lastName")}
                    />
                    {errors.lastName && (
                        <p className="text-sm text-red-500">
                            {errors.lastName.message}
                        </p>
                    )}
                </Field>
            </div >
        </div >
    )
}
