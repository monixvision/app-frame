import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CATALOGO_PELIS } from '../data/films';
import Button from '../components/Button';
import StepIndicator from '../components/tickets/StepIndicator';
import TicketMovieRow from '../components/tickets/TicketMovieRow';
import { InformationCircleIcon } from '@heroicons/react/16/solid';

const PRECIO_ENTRADA = 3;

const Entradas = () => {
  const location = useLocation();
  const incomingId = location.state?.preselectedId;
  const incomingDia = location.state?.preselectedDia;
  const peliInicial = incomingId
    ? CATALOGO_PELIS.find(p => String(p.id) === String(incomingId))
    : null;
  const [step, setStep] = useState(1);
  const [tabDia, setTabDia] = useState(incomingDia ? String(incomingDia) : '1');
  const [selectedMovies, setSelectedMovies] = useState(peliInicial ? [peliInicial] : []);
  const [quantities, setQuantities] = useState(incomingId ? { [incomingId]: 1 } : {});


  // LÓGICA
  const handleMovieCheck = (movie) => {
    const yaSeleccionada = selectedMovies.some(item => item.id === movie.id);
    if (yaSeleccionada) {
      setSelectedMovies(selectedMovies.filter(item => item.id !== movie.id));
      const nuevasCantidades = { ...quantities };
      delete nuevasCantidades[movie.id];
      setQuantities(nuevasCantidades);
    } else {
      if (selectedMovies.length >= 3) {
        alert("Solo puedes seleccionar un máximo de 3 películas.");
        return;
      }
      setSelectedMovies([...selectedMovies, movie]);
      setQuantities({ ...quantities, [movie.id]: 1 });
    }
  };

  const updateMovieQuantity = (movieId, operation) => {
    const currentQty = quantities[movieId] || 1;
    let newQty = currentQty;
    if (operation === 'increment' && currentQty < 4) newQty = currentQty + 1;
    if (operation === 'decrement' && currentQty > 1) newQty = currentQty - 1;
    setQuantities({ ...quantities, [movieId]: newQty });
  };

  const totalGeneral = selectedMovies.reduce((acumulador, peli) => {
    const cantidad = quantities[peli.id] || 1;
    return acumulador + (cantidad * PRECIO_ENTRADA);
  }, 0);

  const pelisDelDia = CATALOGO_PELIS.filter(m => String(m.dia) === String(tabDia));

  return (
    <div className="container mx-auto p-4 text-zinc-800">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4 bg-zinc-200 border-2 border-zinc-800 rounded-2xl p-6">

          <StepIndicator currentStep={step} />

          {/* PASO 1: SELECCIÓN DE PELÍCULAS */}
          {step === 1 && (
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Elige tus películas</h2>
                <p className="text-zinc-800 text-sm mb-4 flex items-center">
                  <InformationCircleIcon className="w-4 h-4 inline-block mr-1" /> Puedes seleccionar un máximo de 3 películas por persona: {selectedMovies.length}/3 seleccionadas
                </p>

              </div>

              {/* Pestañas de días */}
              <div className="flex gap-2 bg-zinc-300 p-1 rounded-xl  mb-6">
                {['1', '2', '3'].map((d) => (
                  <button
                    key={d}
                    onClick={() => setTabDia(d)}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg cursor-pointer transition-colors ${tabDia === d ? 'bg-indigo-600 text-white' : 'text-zinc-800 hover:text-indigo-600'
                      }`}
                  >
                    Día {d}
                  </button>
                ))}
              </div>

              {/* Lista */}
              <div className="flex flex-col gap-3">
                {pelisDelDia.map((peli) => (
                  <TicketMovieRow
                    key={peli.id}
                    peli={peli}
                    mode="select"
                    checked={selectedMovies.some(item => item.id === peli.id)}
                    onCheck={() => handleMovieCheck(peli)}
                  />
                ))}
              </div>

              <div className="mt-8 flex justify-end">

                <Button
                  onClick={() => setStep(2)}
                  text="Número de entradas"
                  disabled={selectedMovies.length === 0}
                />

              </div>
            </div>
          )}

          {/* PASO 2: CONTADORES DE ENTRADAS */}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-2">¿Cuántas entradas quieres?</h2>
              <p className="text-zinc-800 text-sm mb-4 flex items-center">
                <InformationCircleIcon className="w-4 h-4 inline-block mr-1" /> Puedes añadir un máximo de 4 entradas por película.
              </p>

              <div className="flex flex-col gap-4">
                {selectedMovies.map((peli) => (
                  <TicketMovieRow
                    key={peli.id}
                    peli={peli}
                    mode="quantity"
                    quantity={quantities[peli.id] || 1}
                    onIncrement={() => updateMovieQuantity(peli.id, 'increment')}
                    onDecrement={() => updateMovieQuantity(peli.id, 'decrement')}
                  />
                ))}
              </div>

              <div className="mt-6 flex justify-end items-center text-base">
                <span className="text-zinc-800 pe-2">Precio total: </span>
                <span className="text-xl font-medium text-indigo-600">{totalGeneral}€</span>
              </div>

              <div className="mt-8 flex justify-between">
                <Button
                  onClick={() => setStep(1)}
                  variant="outline"
                  text="Volver"
                />
                <Button
                  onClick={() => setStep(3)}
                  text="Resumen"
                />
              </div>
            </div>
          )}

          {/* PASO 3: RESUMEN DE COMPRA */}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-2">Resumen de tu reserva</h2>
              <p className="text-zinc-800 text-sm mb-4 flex items-center">
                <InformationCircleIcon className="w-4 h-4 inline-block mr-1" /> Revisa el desglose de tus entradas antes de pagar.
              </p>

              <ul className="flex flex-col gap-3">
                {selectedMovies.map((peli) => {
                  const cant = quantities[peli.id] || 1;
                  return (
                    <li key={peli.id} className="text-base bg-white p-3 border-2 border-zinc-850 items-center">
                      <ul>
                        <li className="font-bold text-zinc-800">{peli.titulo}</li>
                        <li className="text-base text-zinc-800">Día {peli.dia} / {peli.cine} / {peli.sala} / {peli.hora}</li>
                        <li className="text-base text-indigo-500">Entradas: {cant}</li>
                      </ul>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 flex justify-end items-center text-base">
                <span className="text-zinc-800 pe-2">Precio final: </span>
                <span className="text-xl font-medium text-indigo-600">{totalGeneral}€</span>
              </div>


              <div className="mt-8 flex justify-between">
                <Button
                  onClick={() => setStep(2)}
                  variant="outline"
                  text="Volver"
                />
                <Button
                  onClick={() => {
                    alert(`¡Reserva completada con éxito por un valor de ${totalGeneral}€! Disfruta de Frame.`);
                    setStep(1);
                    setSelectedMovies([]);
                    setQuantities({});
                  }}
                  text="Pagar"
                />

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Entradas;
