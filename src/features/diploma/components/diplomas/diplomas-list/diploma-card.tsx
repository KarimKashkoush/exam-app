import { Link } from "react-router-dom";
import type { Diploma } from "@/features/diploma/types/diplomas";


export default function DiplomaCard({ diploma }: { diploma: Diploma }) {
    
    return (
        <Link
            to={`/diplomas/${diploma.id}/exams`}
            className="relative flex items-end p-2.5 h-112 overflow-auto bg-cover bg-center"
            style={{
                backgroundImage: `url(${diploma.image})`,
            }}
        >
            <section className="w-full bg-[#155DFCBF] p-4 ">
                <h3 className="font-mono text-white font-semibold text-xl mb-1">
                    {diploma.title}
                </h3>

                <p className="font-normal text-sm font-mono text-white">
                    {diploma.description}
                </p>
            </section>
        </Link>
    )
}
