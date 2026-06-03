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
    const { titulo, sinopsis, autoria, creacion, genero, imagen, hora, cine, sala, dia, duracion } = peliculas;

    return (
        <article>
            <div style={{ backgroundImage: `url(${imagen})` }} className="h-160 bg-cover bg-center md:h-120">
                {/* imagen de fondo ponemos el h-160 al tamaño que veamos conveniente creemos que es en rem */}

                {/* 1º div con la imagen rellena todo el espacio */}
                <div className="flex flex-col justify-end h-full">
                    {/* 2º div se encarga de coger todo el espacio y con el unico hijo que tiene pegalo a la parte de abajo */}

                    <div className="container mx-auto md:px-4 md:grid grid-cols-12 lg:col-span-8">
                        {/* 3º div es lo que hace el container para sincronizar con el siguiente y hace grid para contar las mismas columnas que el cuerpo de abajo */}
                        <div className="col-span-7 bg-indigo-600 text-white text-3xl px-3 py-4">
                            {/* 4ºdiv ya del contenedor del titulo en color */}
                            <h1>{titulo}</h1>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container mx-auto md:px-4 grid grid-cols-12">
                <div className="col-span-12 md:col-span-7 lg:col-sapn-8 px-3 py-4">
                    <h2 className="text-2xl">Sinopsis</h2>
                    <p className="pb-4">{sinopsis}</p>
                    <div>
                        <h2 className="text-2xl pb-4">Ficha Técnica</h2>
                        <ul>
                            <li className="flex justify-between mb-3 pb-3 border-b">
                                <span>Autoria</span>  <span>{autoria}</span>
                            </li>
                            <li className="flex justify-between mb-3 pb-3 border-b">
                                <span>Año</span>
                                <span>{creacion}</span>
                            </li>
                            <li className="flex justify-between mb-3 pb-3 border-b">
                                <span>Duración</span> <span>{duracion}</span>
                            </li>
                            <li className="flex justify-between mb-3 pb-3 border-b">
                                <span>Género</span>
                                <span>{genero}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <aside className="order-first col-span-12 md:col-sapn-5 md:col-start-8 md:order-last lg:col-sapn-8">{/* etiqueta muy tipica en html y es para elemtnos laterales y el order solo funciona con elementos grid o flex*/}
                    <div className="bg-indigo-300 px-3 py-4">
                        <h2 className="text-2xl pb-4">Entradas</h2>
                        <ul className="flex flex-col gap-4">
                            <li className="flex justify-between pb-4 border-b">
                                <span>Día {dia}</span>
                                <span>Hora {hora}</span>
                                <span>Sala {sala}</span>
                                <span>Cine {cine}</span>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </article>
    )


}
export default Articulo;