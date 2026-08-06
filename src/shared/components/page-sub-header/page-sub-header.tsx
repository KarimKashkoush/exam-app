import { Link } from "react-router-dom"
import { ChevronLeft } from "lucide-react"
export default function PageSubHeader({ title, icon: Icon }: { title: string, icon: React.FC<React.SVGProps<SVGSVGElement>> }) {
    return (
        <section className="flex gap-2.5">
            <Link to="/diplomas" className="p-2 border border-blue-600 flex flex-col justify-center">
                <ChevronLeft className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
            </Link>
            <section className="flex-1 p-4 bg-blue-600 flex items-center gap-4">
                <Icon className="w-11.25 h-11.25 text-white" strokeWidth={1.5} />
                <p className="text-white text-[32px] font-inter font-semibold">{title}</p>
            </section>
        </section>
    )
}
