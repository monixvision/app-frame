import icoBurguer from '../assets/img/ico-burger.svg';
import icoCalendar from '../assets/img/ico-calendar.svg';
import icoHelp from '../assets/img/ico-help.svg';
import icoMovie from '../assets/img/ico-movie.svg';
import icoTicket from '../assets/img/ico-ticket.svg';

const BottomBar = () => (
    <nav className='justify-center flex fixed bottom-0 w-full p-4'>
        <ul className='py-3 px-6 gap-4 flex align-center justify-center rounded-full bg-indigo-600'> 
            <li><img src={icoCalendar} alt="Calendario" /></li>
            <li><img src={icoHelp} alt="Ayuda" /></li>
            <li><img src={icoBurguer} alt="Menú" /></li>
            <li><img src={icoMovie} alt="Películas" /></li>
            <li><img src={icoTicket} alt="Entradas" /></li>
        </ul>
    </nav>
);

export default BottomBar;