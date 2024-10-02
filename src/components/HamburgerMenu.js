import { useState } from 'react';
import styles from '../styles/HamburgerMenu.module.css';

const HamburgerMenu = ({ onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        onClick(); // Chama a função passada como prop para controlar o estado no Header
    };

    return (
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
            <div className={`${styles.line} ${isOpen ? styles.line1 : ''}`}></div>
            <div className={`${styles.line} ${isOpen ? styles.line2 : ''}`}></div>
            <div className={`${styles.line} ${isOpen ? styles.line3 : ''}`}></div>
        </div>
    );
};

export default HamburgerMenu;