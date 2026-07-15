const StepIndicator = ({ currentStep }) => {
    const steps = [
        { number: 1, label: "Películas" },
        { number: 2, label: "Entradas" },
        { number: 3, label: "Resumen" }
    ];

    return (
        <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-6">
            {steps.map((s) => (
                <div key={s.number} className="flex flex-col items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs border transition-all ${currentStep === s.number
                            ? "bg-indigo-600 text-white scale-110"
                            : currentStep > s.number
                                ? "bg-emerald-600 text-white"
                                : "bg-zinc-800 border-zinc-800 text-zinc-100"
                        }`}>
                        {currentStep > s.number ? "✓" : s.number}
                    </div>
                    <span className={`text-xs font-medium sm:inline ${currentStep === s.number ? "text-indigo-600 font-medium" : "text-zinc-800"
                        }`}>
                        {s.label}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default StepIndicator;
