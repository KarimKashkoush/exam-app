import { Button } from "@/components/ui/button";

export default function ButtonForm() {


    return (
        <Button
            variant="outline"
            type="submit"
            className="group mt-10 mb-4 flex gap-4 items-center w-full h-11.5 cursor-pointer transition rounded-none text-sm font-medium bg-blue-600 border text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
            Create Account
        </Button>
    );
}