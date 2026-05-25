import { Link } from 'react-router-dom';
import icoBurguer from '../assets/img/ico-burger.svg';
import icoCalendar from '../assets/img/ico-calendar.svg';
import icoHelp from '../assets/img/ico-help.svg';
import icoMovie from '../assets/img/ico-movie.svg';
import icoTicket from '../assets/img/ico-ticket.svg';

const BottomBar = () => (
    <div className="flex justify-center w-full fixed bottom-0 mb-4">
    <nav className="flex flex-col gap-3">
        <div className="bg-indigo-600 rounded-xl p-4 shadow-xl">
            <ul className="text-center flex flex-col gap-4 text-white text-xl py-5">
                <li><Link to='/peliculas'>Películas</Link></li>
                {/* en el link to tiene que coincidir con la ruta definida en App.jsx */}
                <li><Link to='/actividades'>Actividades</Link></li>
                <li><Link to='/nosotros'>Nosotros</Link></li>
                <li><Link to='/descargas'>Descargas</Link></li>
            </ul>
        </div>

        <ul className="py-3 px-6 gap-6 flex align-center justify-center rounded-full bg-indigo-600">
            <li><Link to='/actividades'><img src={icoCalendar} alt="Calendario" /></Link></li>
            <li><Link to='/preguntas'><img src={icoHelp} alt="Ayuda" /></Link></li>
            <li><Link to='/menu'><img src={icoBurguer} alt="Menú" /></Link></li>
            <li><Link to='/peliculas'><img src={icoMovie} alt="Películas" /></Link></li>
            <li><Link to='/entradas'><img src={icoTicket} alt="Entradas" /></Link></li>
        </ul>
    </nav>
    </div>
);
export default BottomBar;