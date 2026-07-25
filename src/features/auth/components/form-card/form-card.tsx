import FormCardFeature from "./form-card-feature";
import BrainIcon from "@/assets/svg/brain.svg?react"
import ExamIcon from "@/assets/svg/exam.svg?react"
import SmartFormIcon from "@/assets/svg/smart-form.svg?react"

export default function FormCard() {
    const FormFeatures = [
        {
            icon: BrainIcon,
            title: "Smart Exam Platform",
            description: "Our platform leverages advanced algorithms to provide personalized exam experiences, helping you focus on areas that need improvement."
        },
        {
            icon: ExamIcon,
            title: "Focused Exams",
            description: "Access topic-specific tests including HTML, CSS, JavaScript, and more."
        },
        {
            icon: SmartFormIcon,
            title: "Smart Multi-Step Forms",
            description: "Choose from specialized tracks like Frontend, Backend, and Mobile Development."
        }
    ]

    return (
        <section className="flex-1 items-center relative overflow-hidden bg-blue-50/75 min-h-screen">
            <div className="absolute -top-32 -right-20 w-120 h-100 bg-blue-300 rounded-full blur-[150px] opacity-50 pointer-events-none" />
            <div className="absolute -bottom-32 -left-20 w-100 h-100 bg-blue-200 rounded-full blur-[150px] opacity-40 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto px-8 py-28 flex flex-col gap-10">
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
                    <span className="text-xl">{'</>'}</span>
                    <span>Exam App</span>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                    Empower your learning journey with our smart exam platform.
                </h1>

                {FormFeatures.map((feature, index) => (
                    <FormCardFeature
                        key={index}
                        Icon={feature.icon}
                        FeatureTitle={feature.title}
                        FeatureDescription={feature.description}
                    />
                ))}
            </div>
        </section>
    )
}
