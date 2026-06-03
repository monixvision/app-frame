import Card from '../components/Card';
import { CATALOGO_PELIS } from '../data/films';
import { useState } from 'react';

const Category = () => {
  const [diaSeleccionado, setDiaSeleccionado] = useState('all');

  /* ESTO ES PARA CUANDO HAGAMOS CLICK en todos SE SELECCIONEN y muestren TODAS las peliculas*/

  const pelisFiltradas = CATALOGO_PELIS.filter((peli) => {
  if (diaSeleccionado === 'all') {
    return true;
  }
  return peli.dia === diaSeleccionado;
})

return (
  <div className="container mx-auto p-4 md:grid grid-cols-12 gap-4">
    <nav className="mb-4">
      <button className={`text-xs text-white bg-zinc-700 px-4 py-1 rounded-full ${
        diaSeleccionado === 1
          ? 'bg-indigo-700'
          : 'bg-zinz-700 hover:bg-indigo-700'}`} onClick={() => setDiaSeleccionado(1)}>
        Día 1
      </button>
    </nav>

    {/* hasta aquí hemos creado el filtro para día 1 */}

    {/* se puede usar nav pq estan usando filtros relacionados con el propio contenido */}

    {pelisFiltradas.map(peli => (
      <Card key={peli.id} info={peli} />
    ))}
  </div>

)}

export default Category;
