import { PlusIcon } from '@heroicons/react/16/solid';
import { MinusIcon } from '@heroicons/react/16/solid';

const TicketMovieRow = ({
    peli,
    mode = 'select',
    checked = false,
    onCheck,
    quantity = 1,
    onIncrement,
    onDecrement
}) => {
    const isSelectMode = mode === 'select';

    return (
        <div
            onClick={isSelectMode ? onCheck : undefined}
            className={`flex items-center justify-between gap-2 p-4 border-2 border-zinc-700 transition-all ${isSelectMode
                    ? checked
                        ? 'bg-indigo-600 text-white cursor-pointer'
                        : 'bg-white cursor-pointer'
                    : 'bg-white'
                }`}
        >
            {/* LADO IZQUIERDO: Información de la película */}
            <div className="flex items-center gap-3">
                {isSelectMode && (
                    <input
                        type="checkbox"
                        checked={checked}
                        readOnly
                        className="w-4 h-4 accent-indigo-600 cursor-pointer hidden"
                    />
                )}
                <div>
                    <h3 className="text-base font-medium">{peli.titulo}</h3>
                    <p className="text-xs mt-1">
                        {peli.cine} / {peli.sala} / {peli.hora}
                    </p>
                </div>
            </div>

            {/* LADO DERECHO: Depende del modo */}
            {isSelectMode ? (
                <span className="text-xs text-center tracking-wider text-zinc-100 bg-zinc-900 w-16 px-3 py-1 rounded-full">
                    Día {peli.dia}
                </span>
            ) : (
                <div className="flex items-center gap-4 bg-zinc-900 px-3 py-1.5 rounded-xl">
                    <button
                        onClick={onDecrement}
                        className="text-zinc-400 hover:text-white flex items-center text-center cursor-pointer"
                    >
                        <MinusIcon className="w-5 h-5 inline-block" />
                    </button>
                    <span className="font-mono font-medium text-white w-4 text-center">{quantity}</span>
                    <button
                        onClick={onIncrement}
                        className="text-zinc-400 hover:text-white flex items-center text-center cursor-pointer"
                    >
                        <PlusIcon className="w-5 h-5 inline-block" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default TicketMovieRow;
