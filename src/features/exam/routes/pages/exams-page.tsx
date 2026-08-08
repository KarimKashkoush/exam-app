import PageSubHeader from "@/shared/components/page-sub-header/page-sub-header";
import {BookOpenCheck} from "lucide-react"
import ExamLists from "../../components/exams/exam-lists";
export default function ExamsPage() {
    return (
        <section className="relative p-6 bg-[#f7f9fa] flex flex-col gap-6 min-h-[calc(100vh-56px)]">
            <PageSubHeader title={"Exams"} icon={BookOpenCheck}/>
            <ExamLists />
        </section>
    )
}
