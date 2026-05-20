import peli1 from '../assets/img/figure-2001.webp';
import peli2 from '../assets/img/figure-alien.webp';
import peli3 from '../assets/img/figure-gravity.webp';
import peli4 from '../assets/img/figure-interestellar.webp';
import peli5 from '../assets/img/figure-martian.webp';
import peli6 from '../assets/img/figure-solaris.webp';
import peli7 from '../assets/img/figure-sunshine.webp';

export const CATALOGO_PELIS = [
  {
    id: 1,
    titulo: '2001: Una odisea del espacio',
    creacion: 1968,
    genero: 'Ciencia ficción',
    imagen: peli1,
    autoria: 'Stanley Kubrick',
    sinopsis: 'Una misteriosa señal encontrada en la Luna provoca una misión hacia Júpiter para descubrir su origen.'
  },
  {
    id: 2,
    titulo: 'Alien',
    creacion: 1979,
    genero: 'Ciencia ficción / Terror',
    imagen: peli2,
    autoria: 'Ridley Scott',
    sinopsis: 'La tripulación de la nave espacial Nostromo enfrenta a una criatura hostil y letal que se infiltra entre ellos.'
  },
  {
    id: 3,
    titulo: 'Gravity',
    creacion: 2013,
    genero: 'Ciencia ficción / Drama',
    imagen: peli3,
    autoria: 'Alfonso Cuarón',
    sinopsis: 'Dos astronautas quedan a la deriva tras un accidente orbital y luchan por sobrevivir y regresar a la Tierra.'
  },
  {
    id: 4,
    titulo: 'Interstellar',
    creacion: 2014,
    genero: 'Ciencia ficción / Aventura',
    imagen: peli4,
    autoria: 'Christopher Nolan',
    sinopsis: 'Un grupo de exploradores atraviesa un agujero de gusano en busca de un nuevo hogar para la humanidad.'
  },
  {
    id: 5,
    titulo: 'The Martian',
    creacion: 2015,
    genero: 'Aventura / Ciencia ficción',
    imagen: peli5,
    autoria: 'Ridley Scott',
    sinopsis: 'Un astronauta es dado por muerto y debe valerse por sí mismo en Marte mientras la NASA y su tripulación intentan rescatarlo.'
  },
  {
    id: 6,
    titulo: 'Solaris',
    creacion: 1972,
    genero: 'Ciencia ficción / Drama',
    imagen: peli6,
    autoria: 'Andrei Tarkovski',
    sinopsis: 'Un psicólogo es enviado a una estación espacial que orbita el planeta Solaris para investigar sucesos extraños y confrontar recuerdos del pasado.'
  },
  {
    id: 7,
    titulo: 'Sunshine',
    creacion: 2007,
    genero: 'Ciencia ficción / Thriller',
    imagen: peli7,
    autoria: 'Danny Boyle',
    sinopsis: 'Una tripulación debe reactivar el sol mediante una bomba nuclear para salvar a la Tierra de la extinción.'
  }
];

// Exportamos la constante para importarla en otros archivos (por ejemplo en App.jsx)