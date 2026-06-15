
const FormInput = ({ label, placeholder, variant = 'bordered', ...props }) => {

    const basesStyles = 'w-full px-4 py-3 text-base text-zinc-900 placeholder-zinc-400 rounded-md transition-all outline-none'; // outline-none quita el borde feo al hacer focus

    const variantStyles = {
        bordered: 'border-2 border-zinc-700 bg-white focus:border-indigo-600',
        borderless: 'border-transparent bg-white focus:bg-indigo-200'
    }

    return (
        <div className="flex flex-col gap-1">
            <label className="text-base font-medium text-zinc-700">
                {label}
            </label>
            <input
                placeholder={placeholder}
                {...props}
                className={`${basesStyles} ${variantStyles[variant]}`}
            /> {/* el input no tiene cierre como total sino se autocierra sola en la etiqueta */}
        </div>
    )
}

export default FormInput;

// repasar la grabación pq no me he enterado de nada
