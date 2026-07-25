import CapIcon from "@/assets/svg/graduation-cap.svg?react"
export default function DiplomasHeader() {
    return (
        <section className="p-4 bg-blue-600 flex items-center gap-4">
            <CapIcon className="w-11.25 h-11.25 text-white" strokeWidth={1.5}/>
            <p className="text-white text-[32px] font-inter font-semibold">Diplomas</p>
        </section>
    )
}
