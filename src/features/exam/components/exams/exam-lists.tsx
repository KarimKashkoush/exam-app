import { getExams } from "../../apis/get-exams/get-exams";
import Exam from "./exam";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function ExamLists() {
    const [exams, setExams] = useState<any[]>([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchExams = async () => {
            try {
                const data = await getExams(id!);
                setExams(data.payload.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchExams();
    }, [id]);

    console.log("Exams state:", exams);

    return (
        <section className="bg-white p-6 flex flex-col gap-4">
            {exams.map((exam) => (
                <Exam key={exam.id} exam={exam} />
            ))}
        </section>
    );
}
