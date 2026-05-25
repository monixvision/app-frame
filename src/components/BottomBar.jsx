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
                <li><a href="#">Películas</a></li>
                <li><a href="#">Actividades</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Descargas</a></li>
            </ul>
        </div>

        <ul className="py-3 px-6 gap-6 flex align-center justify-center rounded-full bg-indigo-600">
            <li><img src={icoCalendar} alt="Calendario" /></li>
            <li><img src={icoHelp} alt="Ayuda" /></li>
            <li><img src={icoBurguer} alt="Menú" /></li>
            <li><img src={icoMovie} alt="Películas" /></li>
            <li><img src={icoTicket} alt="Entradas" /></li>
        </ul>
    </nav>
    </div>
);

export default BottomBar;