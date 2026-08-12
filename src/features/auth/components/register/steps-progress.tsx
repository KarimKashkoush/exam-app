import { cn } from "@/lib/utils";
import type { IRegisterStep } from "../../types/register";
import { REGISTER_STEPS } from "../../constant/form-constant";

interface StepsProgressProps {
      step: IRegisterStep;
}

const steps = [
      REGISTER_STEPS.EMAIL,
      REGISTER_STEPS.OTP,
      REGISTER_STEPS.INFORMATION,
      REGISTER_STEPS.PASSWORD,
];

export default function StepsProgress({
      step,
}: StepsProgressProps) {
      const currentStep = steps.indexOf(step);

      return (
            <div className="flex items-center w-full mb-6">
                  {steps.map((item, index) => {
                        const isLast = index === steps.length - 1;

                        return (
                              <div
                                    key={item}
                                    className={cn(
                                          "flex items-center",
                                          !isLast && "flex-1"
                                    )}
                              >
                                    {/* Step */}
                                    <span
                                          className={cn(
                                                "relative z-10 size-3 shrink-0 rotate-45",
                                                "border",
                                                index < currentStep &&
                                                "border-blue-600 bg-blue-600",

                                                index === currentStep &&
                                                "border-blue-600 bg-blue-600 shadow-[0_0_0_0.3rem_var(--color-blue-100)]",

                                                index > currentStep &&
                                                "border-blue-600 bg-blue-50"
                                          )}
                                    />

                                    {/* Line */}
                                    {!isLast && (
                                          <span
                                                className={cn(
                                                      "flex-1 mx-2",
                                                      index < currentStep
                                                            ? "h-px bg-blue-600"
                                                            : "border-t-2 border-dotted border-blue-300"
                                                )}
                                          />
                                    )}
                              </div>
                        );
                  })}
            </div>
      );
}