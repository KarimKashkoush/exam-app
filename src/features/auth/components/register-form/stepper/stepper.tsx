// components/stepper/stepper.tsx

import { cn } from "@/lib/utils";

interface StepperProps {
    steps: number;
    currentStep: number;
}

export default function Stepper({
    steps,
    currentStep,
}: StepperProps) {
    return (
        <div className="flex items-center w-full mb-5">
            {Array.from({ length: steps }).map((_, index) => {
                const active = index + 1 <= currentStep;
                const completed = index + 1 < currentStep;

                return (
                    <div
                        key={index}
                        className="flex flex-1 items-center last:flex-none"
                    >
                        <div
                            className={cn(
                                "size-4 rotate-45 border-2 transition-all duration-300",
                                active
                                    ? "bg-blue-500 border-blue-500"
                                    : "bg-white border-blue-500"
                            )}
                        />

                        {index !== steps - 1 && (
                            <div
                                className={cn(
                                    "flex-1 mx-2 border-t-2",
                                    completed
                                        ? "border-solid border-blue-500"
                                        : "border-dashed border-blue-500"
                                )}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}