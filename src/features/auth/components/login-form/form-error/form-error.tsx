export default function FormError() {
    return (
        <div className="mt-10 relative flex h-9.5 items-center justify-center border border-red-200 bg-red-50 px-2.5">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-white rounded-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="red"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                </svg>
            </div>

            <p className="text-sm font-normal text-red-600">
                Something went wrong
            </p>
        </div>
    );
}