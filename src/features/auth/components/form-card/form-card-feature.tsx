export default function FormCardFeature({Icon, FeatureTitle, FeatureDescription}) {
    return (
        <section className="flex items-start gap-2.5 ">
            <section className="min-w-9 h-9 p-1 border-[1.5px] border-blue-600">
                <Icon />
            </section>
            <section className="font-mono">
                <h3 className="text-blue-600 font-semibold text-xl mb-2">{FeatureTitle}</h3>
                <p className="text-gray-700 font-normal text-base">{FeatureDescription}</p>
            </section>
        </section>
    )
}
