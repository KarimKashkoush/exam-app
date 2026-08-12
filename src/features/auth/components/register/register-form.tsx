import { FormProvider, useForm } from "react-hook-form";
import type { IRegisterFormValues, IRegisterStep } from "../../types/register";
import EmailStep from "./steps/email-step";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schema/zod/register-schema";

import type { SetStateAction } from "react";
import { REGISTER_STEPS } from "../../constant/form-constant";
import OtpVerificationStep from "./steps/otp-verification-step";
import InformationStep from "./steps/information-step";
import PasswordStep from "./steps/password-step";

interface IRegisterFormProps {
      step: IRegisterStep;
      setStep: React.Dispatch<SetStateAction<IRegisterStep>>;
}

export default function RegisterForm({ step, setStep }: IRegisterFormProps) {
      const form = useForm<IRegisterFormValues>({
            defaultValues: {
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  firstName: "",
                  lastName: "",
                  phone: "",
            },
            resolver: zodResolver(registerSchema),
      });

      const render = () => {
            switch (step) {
                  case REGISTER_STEPS.EMAIL:
                        return <EmailStep setStep={setStep} />;
                  case REGISTER_STEPS.OTP:
                        return <OtpVerificationStep setStep={setStep} />;
                  case REGISTER_STEPS.INFORMATION:
                        return <InformationStep />;
                  case REGISTER_STEPS.PASSWORD:
                        return <PasswordStep />;
            }
      }

      return (
            <FormProvider {...form}>
                  {render()}
            </FormProvider>
      );
} 
