import styles from '../../src/components/Header.module.css'
import logo from '../assets/logo.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img className='logo' src={logo} alt="logotipo" />
            <p>Projeto</p>
        </header>
    );
}