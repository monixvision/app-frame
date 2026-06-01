import { useParams, Navigate } from 'react-router-dom';
import { CATALOGO_PELIS } from '../data/films';


const Articulo = () => {
    //1. Obtener el slug de la URL
    const { slug } = useParams(); // useParams es un hook de react-router-dom que nos permite acceder a los parámetros de la URL, en este caso el slug que definimos en la ruta dinámica

    //2. Buscamos en el array la pelicula que coincida con ese slug 
    const peliculas = CATALOGO_PELIS.find(item => item.slug === slug); // find es un método de los arrays que devuelve el primer elemento que cumple con la condición dada, en este caso que el slug del item sea igual al slug obtenido de la URL

    // 3. Condicional: ¿Que pasa si el usuario pone /pelicula/999?
    if (!peliculas) {
        return <Navigate to="/404" replace />; // Si no encontramos la película, redirigimos a la página de error 404 usando Navigate de react-router-dom

    }

    // 4. Si la película existe, mostramos su información
    const {titulo, sinopsis, autoria, creacion, genero, imagen} = peliculas;

    return (
        <article>
            <h1>{titulo}</h1>
            <p>{sinopsis}</p>
            <p>Autoria: {autoria}</p>
            <p>Creación: {creacion}</p>
            <p>Género: {genero}</p>
            <img src={imagen} alt={titulo} />
        </article>
    )


}
    export default Articulo;