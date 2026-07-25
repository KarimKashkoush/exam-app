import { Button } from "@/components/ui/button";
import RightArrow from "@/assets/svg/right-arrow-svgrepo-com.svg?react";
import { useFormContext } from "react-hook-form";

export default function ButtonForm() {
    const {
        formState: { isSubmitting },
    } = useFormContext();
    
    return (
        <Button
            disabled={isSubmitting}
            variant="outline"
            type="submit"
            className="group mb-4 flex gap-4 items-center w-full h-11.5 cursor-pointer transition rounded-none text-gray-800 text-sm font-medium bg-[#EFF6FF] border border-blue-600 hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
            {isSubmitting ? "Sending..." : "Next"}

            <RightArrow className="fill-current transition-colors group-hover:fill-white" />
        </Button>
    );
}