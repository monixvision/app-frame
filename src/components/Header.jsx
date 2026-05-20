import styles from './Header.module.css';
import logoBlanco from '../assets/img/FRAME-logowhite.svg';
import BottomBar from './BottomBar';

const Header = () => (
    <header className="bg-zinc-700 p-2">
        <a href="/">
            <img src={logoBlanco} alt="Logo de la empresa" className= {`${styles.cabecera__logo} mx-auto`} />
        </a>
        <BottomBar />
    </header>
);

export default Header;