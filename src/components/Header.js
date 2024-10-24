"use client";
import styles from '../styles/Header.module.css';
import { useState, useEffect, useCallback } from 'react';
import HamburgerMenu from './HamburgerMenu.js';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [height, setHeight] = useState('80px');

    // Verifica se a tela é menor que 600px e faz o ajuste no menu
    const checkIsMobile = useCallback(() => {
        const isMobileView = window.innerWidth <= 600;
        setIsMobile(isMobileView);
        setShowSubMenu(!isMobileView); // Controla o submenu diretamente com base na visualização
        setHeight(isMobileView ? '60px' : '80px'); // Ajuste inicial baseado no tipo de visualização
    }, []);

    const toggleSubMenu = (e) => {
        if (isMobile) {
            e.preventDefault();
            setShowSubMenu((prevState) => {
                const isOpened = !prevState;
                setHeight(isOpened ? '160px' : '110px');
                return isOpened;
            });
        }
    };

    const btnClick = () => {
        if (isMobile) {
            setHeight(height === '60px' ? '110px' : '60px');
            if (isMenuOpen) setShowSubMenu(false); // Fecha o submenu se o menu for fechado
            setIsMenuOpen(!isMenuOpen);
        }
    };


    useEffect(() => {
        checkIsMobile();

        // Adiciona um ouvinte de evento para verificar o tamanho da tela
        window.addEventListener('resize', checkIsMobile);

        // Remove o ouvinte quando o componente for desmontado
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, [checkIsMobile]);



    return (
        <header id={styles.header} style={{ height }}>
            <div className={styles.menuMobile}>
                <HamburgerMenu className={styles.hamburgerMenu} onClick={btnClick} isOpen={isMenuOpen} />

                <h1 className={styles.titulo}>Prof. Wagner Ferreira</h1>
            </div>
            <nav>
                <ul className={styles.listaMenu}>
                    <li className={styles.itemMenu}><Link href="/" onClick={btnClick}>Home</Link></li>
                    <li className={styles.itemMenu}><Link href="/about" onClick={btnClick}>Sobre</Link></li>
                    <li className={styles.itemMenu}><Link href="/contact" onClick={btnClick}>Contato</Link></li>
                    <li className={styles.itemMenu}>
                        <Link href='#' onClick={toggleSubMenu}>Disciplinas</Link>
                        {showSubMenu && (
                            <ul className={styles.listaSubMenu}>
                                <li className={styles.itemSubMenu}><Link href='/fronti' onClick={btnClick}>Front-end I</Link></li>
                                <li className={styles.itemSubMenu}><Link href='/frontii' onClick={btnClick}>Front-end II</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;