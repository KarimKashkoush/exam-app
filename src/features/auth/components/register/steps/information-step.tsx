import { Input } from "@/components/ui/input";
import {
      Field,
      FieldLabel,
} from "@/components/ui/field";
import SubHeading from "../sub-heading";
import {
      Controller,
      useFormContext,
      type SubmitHandler,
} from "react-hook-form";
import { z } from "zod";
import { registerSchema } from "@/features/auth/schema/zod/register-schema";
import { PhoneInput } from "@/components/reui/phone-input";
import { Button } from "@/components/ui/button/button";
import type { IRegisterFormValues, IRegisterStep } from "@/features/auth/types/register";
import { REGISTER_STEPS } from "@/features/auth/constant/form-constant";

const informationSchema = registerSchema.pick({
      username: true,
      firstName: true,
      lastName: true,
      phone: true,
});

type InformationFormValues = z.infer<typeof informationSchema>;

interface InformationStepProps {
      setStep: React.Dispatch<React.SetStateAction<IRegisterStep>>;
}

export default function InformationStep({ setStep }: InformationStepProps) {

      const {
            control,
            register,
            handleSubmit,
            formState: { errors },
      } = useFormContext<IRegisterFormValues>();

      const onSubmit: SubmitHandler<InformationFormValues> = (values) => {
            console.log(values);
            setStep(REGISTER_STEPS.PASSWORD);
      };



      return (
            <div>
                  <SubHeading>
                        Tell us more about you
                  </SubHeading>

                  <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-4"
                  >

                        <div className="grid grid-cols-2 gap-4">

                              <Field className="flex-1">
                                    <FieldLabel htmlFor="firstName">
                                          First Name
                                          <span className="text-red-500">*</span>
                                    </FieldLabel>

                                    <Input
                                          id="firstName"
                                          type="text"
                                          placeholder="Ahmed"
                                          {...register("firstName")}
                                          aria-invalid={errors.firstName ? "true" : "false"}
                                    />

                                    {errors.firstName && (
                                          <p className="text-sm text-red-500">
                                                {errors.firstName.message}
                                          </p>
                                    )}
                              </Field>


                              <Field className="flex-1">
                                    <FieldLabel htmlFor="lastName">
                                          Last Name
                                          <span className="text-red-500">*</span>
                                    </FieldLabel>

                                    <Input
                                          id="lastName"
                                          type="text"
                                          placeholder="Ali"
                                          {...register("lastName")}
                                          aria-invalid={errors.lastName ? "true" : "false"}
                                    />

                                    {errors.lastName && (
                                          <p className="text-sm text-red-500">
                                                {errors.lastName.message}
                                          </p>
                                    )}
                              </Field>

                        </div>

                        <Field>
                              <FieldLabel htmlFor="username">
                                    Username
                                    <span className="text-red-500">*</span>
                              </FieldLabel>

                              <Input
                                    id="username"
                                    type="text"
                                    placeholder="ahmed123"
                                    {...register("username")}
                                    aria-invalid={errors.username ? "true" : "false"}
                              />

                              {errors.username && (
                                    <p className="text-sm text-red-500">
                                          {errors.username.message}
                                    </p>
                              )}
                        </Field>

                        <Field>
                              <FieldLabel htmlFor="phoneNumber">
                                    Phone
                                    <span className="text-red-500">*</span>
                              </FieldLabel>

                              <Controller
                                    name="phone"
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

                              {errors.phone && (
                                    <p className="text-sm text-red-500">
                                          {errors.phone.message}
                                    </p>
                              )}
                        </Field>

                        <Button
                              variant="outline"
                              type="submit"
                              className="w-full"
                        >
                              Next
                        </Button>

                  </form>
            </div>
      );
}