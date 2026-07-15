import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logoBlanco from '../assets/img/FRAME-logowhite.svg';
import logoNegro from '../assets/img/FRAME-logoblack.svg';
import BottomBar from './BottomBar';
import MainMenu from './MainMenu';

const Header = () => (
    <div className="lg:container lg:mx-auto lg:px-4">
        <header className="bg-zinc-700 lg:bg-white shadow-[1'5rem_0_0_0_white,-1'5rem_0_0_0_white] py-4 lg:px-0 lg:flex lg:justify-between">

            {/* esto es así porque la cabecera del techer el interior está alineado con el container pero el header sobresale por la drch e izq entonces hemos pensado alternativas en tailwind como sombra en este caso pero tmb se podria border, after y before o hacer como teniamos antes una clase de css en un archivo module */}

            <Link to="/">
                <img src={logoBlanco} alt="Logo de la empresa" className={`${styles.cabecera__logo} mx-auto lg:hidden`} />
                {/* esto se hace si es hibrido entre css y tailwind */}
                <img src={logoNegro} alt="Logo de la empresa" className="w-[90px] hidden lg:block" />
            </Link>
            <div className="lg:hidden"><BottomBar /></div>
            {/* nunca poner el hidden dentro de donde metemos los componentes sino que envolvemos el componente en un div que tenga el hidden */}
            <div className="hidden lg:block"><MainMenu /></div>
        </header>
    </div>
);

export default Header;