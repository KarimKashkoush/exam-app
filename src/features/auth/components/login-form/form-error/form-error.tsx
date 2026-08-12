import { CircleX } from "lucide-react";
import { cn } from "@/lib/utils";
export default function FormFeedback({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    if (!children) return null;

    return (
        <div
                className={cn(
                    "mb-9 relative flex h-9.5 items-center justify-center border border-red-600 bg-red-50 text-sm text-red-500",
                    className,
                )}
            {...props}
        >
            {/* Icon */}
            <CircleX size={18} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />

            {/* Message */}
            {children}
        </div>
    );
}