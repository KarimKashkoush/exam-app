import { cn } from "@/lib/utils";

export default function SubHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
      return (
            <h2
            className={cn(
                  'text-blue-600 text-2xl font-bold font-inter mb-4',
                  className
            )}
            {...props}
            >
            </h2>
      )
}
