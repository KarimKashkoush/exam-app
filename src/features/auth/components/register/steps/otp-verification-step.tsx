import {
      Controller,
      useForm,
      useFormContext,
      type SubmitHandler,
} from "react-hook-form";

import {
      InputOTP,
      InputOTPGroup,
      InputOTPSlot,
} from "@/components/ui/input-otp";

import { Button } from "@/components/ui/button/button";
import OtpTimer from "../../otp/otp-timer/otp-timer";
import SubHeading from "../sub-heading";

import type {
      IRegisterFormValues,
      IRegisterStep,
} from "@/features/auth/types/register";

import type { SetStateAction } from "react";

import { REGISTER_STEPS } from "@/features/auth/constant/form-constant";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import useVerifyEmail from "@/features/auth/apis/mutation/verify-email";
import FormFeedback from "../../form-error/form-error";

interface IRegisterFormProps {
      setStep: React.Dispatch<SetStateAction<IRegisterStep>>;
}

const otpCodeSchema = z.object({
      code: z
            .string("OTP code is required")
            .length(6, "OTP code must be 6 digits long"),
});

type IOtpCodeValues = z.infer<typeof otpCodeSchema>;

export default function OtpVerificationStep({
      setStep,
}: IRegisterFormProps) {

      // الـ Form الرئيسي
      const { getValues } =
            useFormContext<IRegisterFormValues>();

      const email = getValues("email");

      // OTP Form
      const {
            control,
            handleSubmit,
      } = useForm<IOtpCodeValues>({
            defaultValues: {
                  code: "",
            },
            resolver: zodResolver(otpCodeSchema),
            mode: "onChange",
      });

      // Mutation
      const {
            isPending,
            error,
            mutate: verifyEmail,
      } = useVerifyEmail();

      const onSubmit: SubmitHandler<IOtpCodeValues> = (values) => {
            verifyEmail({
                  email,
                  code: values.code,
            },
                  {
                        onSuccess: () => {
                              setStep(REGISTER_STEPS.INFORMATION);
                        }
                  });
      };

      return (
            <>
                  <SubHeading>
                        Verify OTP
                  </SubHeading>

                  <p className="text-base text-gray-500 font-mono">
                        Please enter the 6-digits code we have sent to:
                  </p>

                  <span className="mb-6 block text-gray-800">
                        {email}

                        {" "}
                        <Button
                              type="button"
                              onClick={() =>
                                    setStep(REGISTER_STEPS.EMAIL)
                              }
                              variant="link"
                              className="underline p-0"
                        >
                              Edit
                        </Button>
                  </span>

                  <form onSubmit={handleSubmit(onSubmit)}>

                        <Controller
                              name="code"
                              control={control}
                              render={({ field }) => (
                                    <InputOTP
                                          maxLength={6}
                                          value={field.value}
                                          onChange={field.onChange}
                                          onBlur={field.onBlur}
                                    >
                                          <InputOTPGroup className="mb-6 mx-auto">
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                          </InputOTPGroup>
                                    </InputOTP>
                              )}
                        />

                        <OtpTimer email={email} />

                        <FormFeedback>
                              {error?.message}
                        </FormFeedback>

                        <Button
                              variant="outline"
                              type="submit"
                              className="w-full"
                              isLoading={isPending}
                        >
                              Verify Code
                        </Button>

                  </form>
            </>
      );
}