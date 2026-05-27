import nosotros from '../assets/img/nosotros.webp';

const Nosotros = () => (
  <div className="container mx-auto p-4 md:grid grid-cols-12"> 
  {/* el md: es solo para que el grid se active cuanod está en la tablet recuerda los media en tailwind */}
  <article className="col-span-8 col-start-3">
    {/* quiere que el grid esté dentro del container y no al revés */}
    <h1 className="text-2xl font-bold mb-2">Conoce Frame</h1>
    <figure>
      <img src={nosotros} alt="Equipo Frame" className="mb-4 aspect-[4/3]" />
    </figure>
    <p className="mb-3">Bienvenidos a la primera edición de "Otros Mundos", el ciclo de cine de ciencia ficción de Málaga.</p>
    <p className="mb-3">Nacemos de una idea simple pero ambiciosa: convertir a Málaga en una ventana hacia el cosmos. En una ciudad que siempre ha mirado al mar como su única frontera, queremos invitar a los malagueños a levantar la vista y preguntarse qué hay más allá de las estrellas.</p>
    <h2 className="text-xl font-bold mb-2">¿Quiénes somos?</h2>
    <p className="mb-3">Somos un colectivo de apasionados por el cine, la tecnología y la narrativa especulativa. Creemos que la ciencia ficción no es solo naves espaciales y efectos especiales; es el espejo donde la humanidad refleja sus miedos, sus esperanzas y sus dilemas éticos más profundos.</p>
    <h2 className="text-xl font-bold mb-2">¿Por qué ahora?</h2>
    <p className="mb-3">Málaga se ha convertido en un referente tecnológico europeo, y creemos que ese crecimiento debe ir de la mano de una oferta cultural que hable el mismo idioma. Queremos que este ciclo sea el primer paso de un viaje largo, una odisea que crezca año tras año junto a nuestro público.
    Acompáñanos en este viaje. El futuro comienza aquí, a orillas del Mediterráneo.</p>
  </article>
  </div>
);

export default Nosotros;