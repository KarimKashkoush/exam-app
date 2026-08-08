import { Button } from "@/components/ui/button/button";
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
        >
            {isSubmitting ? "Sending..." : "Next"}

            <RightArrow className="fill-current transition-colors group-hover:fill-white" />
        </Button>
    );
}