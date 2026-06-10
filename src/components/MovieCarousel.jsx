import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'; 
import { CATALOGO_PELIS } from '../data/films';
import MoviePosterAPI from './MoviePosterAPI';

const MovieCarousel = () => {
  const pelis = CATALOGO_PELIS;

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1
  });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="w-full pb-8 relative overflow-hidden">
      
      {/* EL VIEWPORT DE EMBLA */}
      <div ref={emblaRef}>
        <div className="flex gap-6">
          {pelis.map((pelicula) => (
            <div 
              key={pelicula.id} 
              className="flex-[0_0_20rem] md:flex-[0_0_24rem] min-w-0 last:mr-6"
            >
              <Link 
                to={`/peliculas/${pelicula.slug}`} 
                className="block shadow-xs shadow-indigo-600 hover:shadow-lg transition-all duration-200"
              >
                <MoviePosterAPI movieTitle={pelicula.titulo} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* BOTONERA */}
      <div className="flex justify-between items-center w-full mt-6 px-2">
        
        {/* Flecha Izquierda */}
        <button 
          onClick={scrollPrev} 
          aria-label="Películas anteriores"
          className="p-3 rounded-full bg-zinc-800 hover:bg-indigo-600 cursor-pointer transition-all flex items-center justify-center text-white"
        >
          <ChevronLeftIcon className="w-6 h-6" strokeWidth={2.5} />
        </button>

        {/* Flecha Derecha */}
        <button 
          onClick={scrollNext} 
          aria-label="Siguientes películas"
          className="p-3 rounded-full bg-zinc-800 hover:bg-indigo-600 cursor-pointer transition-all flex items-center justify-center text-white"
        >
          <ChevronRightIcon className="w-6 h-6" strokeWidth={2.5} />
        </button>

      </div>

    </div>
  );
};

export default MovieCarousel;
