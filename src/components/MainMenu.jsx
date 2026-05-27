import { Link } from 'react-router-dom';

const MainMenu = () => (
    <nav>
        <ul className="flex text-lg gap-8 justify-end">
            <li><Link to='/peliculas'>Películas</Link></li>
            {/* en el link to tiene que coincidir con la ruta definida en App.jsx */}
            <li><Link to='/actividades'>Actividades</Link></li>
            <li><Link to='/nosotros'>Nosotros</Link></li>
            <li><Link to='/preguntas'>Ayuda</Link></li>
            <li><Link to='/descargas'>Descargas</Link></li>
             <li><Link to='/entradas'>Entradas</Link></li>
        </ul>
    </nav>
)

export default MainMenu;