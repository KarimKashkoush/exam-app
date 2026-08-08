import { CircleQuestionMark } from "lucide-react"
import { Timer, MoveRight } from "lucide-react"
import { Link } from "react-router-dom"
export default function Exam({ exam }) {
    console.log("Exam component received exam:", exam);
    return (
        <section className="relative overflow-hidden flex gap-4 max-h-34 bg-blue-50 p-4.5 font-mono border border-transparent hover:border-blue-200 border-dotted">
            <section className="w-25 h-25 border border-blue-300 bg-blue-100 flex items-center justify-center">
                <img src={exam.image} alt="exam-photo" className="w-18.5 h-15.5"/>
            </section>
            <section>
                <section className="flex justify-between gap-1 items-center">
                    <p className="font-semibold text-blue-600 text-xl font-mono">{exam.title}</p>
                    <section className="flex gap-1.5 items-center">
                        <CircleQuestionMark className="w-4.5 h-4.5 text-gray-600" />
                        <p className="font-normal text-gray-800 text-sm">{exam.questionsCount} questions</p>
                        <span className="text-base text-gray-300">|</span>
                        <Timer className="w-4.5 h-4.5 text-gray-600" />
                        <p className="font-normal text-gray-800 text-sm">{exam.duration} minutes</p>
                    </section>
                </section>
                <section>
                    <p className="mt-2 text-sm text-gray-500 leading-6 line-clamp-3">
                        {exam.description}

                        <span className="font-semibold text-black cursor-pointer ml-1">
                            See More
                        </span>
                    </p>
                </section>

                <section className="absolute -bottom-8 right-2">
                    <Link to="/"
                        className="bg-blue-600 flex justify-between items-center text-white h-7.5 w-25.5 cursor-pointer rounded-none px-4 py-1 text-sm"
                    >
                        Start
                        <MoveRight className="ml-1 w-4 h-4" />
                    </Link>
                </section>
            </section>
        </section>
    )
}
