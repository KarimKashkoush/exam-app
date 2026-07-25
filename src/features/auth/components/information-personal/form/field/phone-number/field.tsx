import { PhoneInput } from "@/components/reui/phone-input";
import {
    Field,
    FieldLabel,
} from "@/components/ui/field";
import { personalInformationSchema } from "@/features/auth/schema/zod/personal-information";
import { Controller, useFormContext } from "react-hook-form";
import { z } from "zod";

export default function PhoneNumber() {
    const {
        control,
        formState: { errors },
    } = useFormContext<z.infer<typeof personalInformationSchema>>();

    return (
        <Field className="flex-1">
            <FieldLabel htmlFor="phoneNumber">
                Phone
            </FieldLabel>

            <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                    <PhoneInput
                        id="phoneNumber"
                        placeholder="Enter phone number"
                        defaultCountry="US"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                    />
                )}
            />

            {errors.phoneNumber && (
                <p className="text-sm text-red-500">
                    {errors.phoneNumber.message}
                </p>
            )}
        </Field>
    );
}