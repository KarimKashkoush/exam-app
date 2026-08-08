import { Button } from "@/components/ui/button/button";

export default function ButtonForm() {


    return (
        <Button
            variant="outline"
            type="submit"
            className="group mb-4 flex gap-4 items-center w-full h-11.5 cursor-pointer transition rounded-none text-gray-800 text-sm font-medium bg-[#EFF6FF] border border-blue-600 hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
        Next
        </Button>
    );
}