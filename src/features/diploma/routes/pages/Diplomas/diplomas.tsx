import Diplomaslist from "@/features/diploma/components/diplomas/diplomas-list/diplomas-list";
import DiplomasHeader from "../../../components/diplomas/diplomas-header";
export default function DiplomasPage() {
    return (
        <section className="relative p-6 bg-[#f7f9fa] flex flex-col gap-6 min-h-[calc(100vh-56px)]">
            <DiplomasHeader />
            <Diplomaslist />
        </section>
    )
}
