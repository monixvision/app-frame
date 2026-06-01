import peli1 from '../assets/img/figure_2001.webp';
import peli2 from '../assets/img/figure_alien.webp';
import peli3 from '../assets/img/figure_gravity.webp';
import peli4 from '../assets/img/figure_interestellar.webp';
import peli5 from '../assets/img/figure_martian.webp';
import peli6 from '../assets/img/figure_solaris.webp';
import peli7 from '../assets/img/figure_sunshine.webp';

export const CATALOGO_PELIS = [
  {
    id: 1,
    dia: 1,
    hora: '20:00',
    cine: 'Albéniz',
    sala: 'Sala 1',
    titulo: '2001: Una odisea del espacio',
    slug: '2001-una-odisea-del-espacio',
    creacion: 1968,
    duracion: 120,
    genero: 'Ciencia ficción',
    imagen: peli1,
    autoria: 'Stanley Kubrick',
    sinopsis: 'Una misteriosa señal encontrada en la Luna provoca una misión hacia Júpiter para descubrir su origen.'
  },
  {
    id: 2,
    dia: 1,
    hora: '22:00',
    cine: 'Albéniz',
    sala: 'Sala 2',
    titulo: 'Alien',
    slug: 'alien',
    creacion: 1979,
    duracion: 117,  
    genero: 'Ciencia ficción / Terror',
    imagen: peli2,
    autoria: 'Ridley Scott',
    sinopsis: 'La tripulación de la nave espacial Nostromo enfrenta a una criatura hostil y letal que se infiltra entre ellos.'
  },
  {
    id: 3,
    dia: 2,
    hora: '20:00',
    cine: 'Albéniz',
    sala: 'Sala 1',
    titulo: 'Gravity',
    slug: 'gravity',
    creacion: 2013,
    duracion: 91,
    genero: 'Ciencia ficción / Drama',
    imagen: peli3,
    autoria: 'Alfonso Cuarón',
    sinopsis: 'Dos astronautas quedan a la deriva tras un accidente orbital y luchan por sobrevivir y regresar a la Tierra.'
  },
  {
    id: 4,
    dia: 2,
    hora: '21:00',
    cine: 'Albéniz',
    sala: 'Sala 2',
    titulo: 'Interstellar',
    slug: 'interstellar',
    creacion: 2014,
    duracion: 169,
    genero: 'Ciencia ficción / Aventura',
    imagen: peli4,
    autoria: 'Christopher Nolan',
    sinopsis: 'Un grupo de exploradores atraviesa un agujero de gusano en busca de un nuevo hogar para la humanidad.'
  },
  {
    id: 5,
    dia: 3,
    hora: '20:00',
    cine: 'Albéniz',
    sala: 'Sala 1',
    titulo: 'The Martian',
    slug: 'the-martian',
    creacion: 2015,
    duracion: 144,
    genero: 'Aventura / Ciencia ficción',
    imagen: peli5,
    autoria: 'Ridley Scott',
    sinopsis: 'Un astronauta es dado por muerto y debe valerse por sí mismo en Marte mientras la NASA y su tripulación intentan rescatarlo.'
  },
  {
    id: 6,
    dia: 3,
    hora: '20:00',
    cine: 'Albéniz',
    sala: 'Sala 1',
    titulo: 'Solaris',
    slug: 'solaris',
    creacion: 1972,
    duracion: 167,
    genero: 'Ciencia ficción / Drama',
    imagen: peli6,
    autoria: 'Andrei Tarkovski',
    sinopsis: 'Un psicólogo es enviado a una estación espacial que orbita el planeta Solaris para investigar sucesos extraños y confrontar recuerdos del pasado.'
  },
  {
    id: 7,
    dia: 3,
    hora: '20:00',
    cine: 'Albéniz',
    sala: 'Sala 1',
    titulo: 'Sunshine',
    slug: 'sunshine',
    creacion: 2007,
    duracion: 107,
    genero: 'Ciencia ficción / Thriller',
    imagen: peli7,
    autoria: 'Danny Boyle',
    sinopsis: 'Una tripulación debe reactivar el sol mediante una bomba nuclear para salvar a la Tierra de la extinción.'
  }
];

// Exportamos la constante para importarla en otros archivos (por ejemplo en App.jsx)