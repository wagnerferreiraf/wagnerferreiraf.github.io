"use client";
import styles from '../styles/Header.module.css';
import { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu.js';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [height, setHeight] = useState('100px');

    // Função para verificar se a tela é menor que 600px
    const checkIsMobile = () => {
        const isMobileView = window.innerWidth <= 600;
        setIsMobile(isMobileView);
        if (!isMobileView) {
            setShowSubMenu(true);  // Mostra o submenu automaticamente se a tela ficar maior
            setIsMenuOpen(false); // Fecha o menu automaticamente se a tela ficar maior
            setHeight('100px');
        } else {
            setShowSubMenu(false);
            setIsMenuOpen(false);
            setHeight('60px');
        }

    };

    const toggleSubMenu = (e) => {
        if (isMobile) {
            e.preventDefault();
            setShowSubMenu((prevState) => {
                const newState = !prevState;
                setHeight(newState ? '160px' : '110px');
                return newState;
            });
        }
    };

    useEffect(() => {
        checkIsMobile(); // Verifica o estado inicial

        // Adiciona um ouvinte para o redimensionamento da janela
        window.addEventListener('resize', checkIsMobile);

        // Remove o ouvinte quando o componente for desmontado
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);



    const btnClick = () => {
        setIsMenuOpen((prev) => {
            const isOpened = !prev;
            setHeight(isOpened ? '110px' : '60px');
            if (!isOpened) {
                setShowSubMenu(false);
            }
            return isOpened;
        });
    };

    return (
        <header id={styles.header} style={{ height }}>
            <div className={styles.menuMobile}>
                <HamburgerMenu className={styles.hamburgerMenu} onClick={btnClick} isOpen={isMenuOpen} />

                <h1 className={styles.titulo}>Prof. Wagner Ferreira</h1>
            </div>
            <nav>
                <ul className={styles.listaMenu}>
                    <li className={styles.itemMenu}><Link href="/">Home</Link></li>
                    <li className={styles.itemMenu}><Link href="/sobre">Sobre</Link></li>
                    <li className={styles.itemMenu}><Link href="/contato">Contato</Link></li>
                    <li className={styles.itemMenu}>
                        <Link href='#' onClick={toggleSubMenu}>Disciplinas</Link>
                        {showSubMenu && (
                            <ul className={styles.listaSubMenu}>
                                <li className={styles.itemSubMenu}><Link href='/fronti'>Front-end I</Link></li>
                                <li className={styles.itemSubMenu}><Link href='/frontii'>Front-end II</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;