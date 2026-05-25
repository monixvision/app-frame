import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logoBlanco from '../assets/img/FRAME-logowhite.svg';
import BottomBar from './BottomBar';

const Header = () => (
    <header className="bg-zinc-700 p-2">
        <Link to="/">
            <img src={logoBlanco} alt="Logo de la empresa" className= {`${styles.cabecera__logo} mx-auto`} />
        </Link>
        <BottomBar />
    </header>
);

export default Header;