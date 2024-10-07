"use client";
import styles from '../styles/Header.module.css';
import { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu.js';


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
            setShowSubMenu(true);  // Fecha o submenu automaticamente se a tela ficar maior
            setIsMenuOpen(false); // Fecha o menu automaticamente se a tela ficar maior
            setHeight('100px');
        } else {
            setHeight('60px');
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

    const btnClick = () => {
        setIsMenuOpen((prev) => {
            const newState = !prev;
            setHeight(newState ? '110px' : '60px');
            if (!newState) {
                setShowSubMenu(false);
            }
            return newState;
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
                    <li className={styles.itemMenu}><a href="/">Home</a></li>
                    <li className={styles.itemMenu}><a href="/sobre">Sobre</a></li>
                    <li className={styles.itemMenu}><a href="/contato">Contato</a></li>
                    <li className={styles.itemMenu}>
                        <a href='#' onClick={toggleSubMenu}>Disciplinas</a>
                        {showSubMenu && (
                            <ul className={styles.listaSubMenu}>
                                <li className={styles.itemSubMenu}><a href='/front-end-i'>Front-end I</a></li>
                                <li className={styles.itemSubMenu}><a href='/frontii'>Front-end II</a></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;