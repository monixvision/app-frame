import peli1 from '../assets/img/matrix.webp';
import peli2 from '../assets/img/dune.webp';

export const CATALOGO_PELIS = [
  {
    id: 1,
    titulo: 'Matrix',
    creacion: 1999,
    genero: 'Realidad virtual',
    miniatura: peli1,
    sinopsis: 'Un hacker descubre la realidad...'
  },
  {
    id: 2,
    titulo: 'Dune',
    creacion: 2021,
    genero: 'Exploración espacial',
    miniatura: peli2,
    sinopsis: 'Viaje a Arrakis...'
  }
];

// ya estmaos exportando la constante para luego poder importanrla en otros archivos, como por ejemplo en App.jsx