"use client";
import styles from '../styles/Header.module.css';
import { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu.js';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState();
    const [showSubMenu, setShowSubMenu] = useState();
    const [isMobile, setIsMobile] = useState();
    const [height, setHeight] = useState();

    // Verifica se a tela é menor que 600px e faz o ajuste no menu
    const checkIsMobile = () => {
        const isMobileView = window.innerWidth <= 600;
        setIsMobile(isMobileView);
        setIsMenuOpen(false);
        if (!isMobileView) {
            setShowSubMenu(true);
            setHeight('100px');
        } else {
            setShowSubMenu(false);
            setHeight('60px');
        }

    };

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

    useEffect(() => {
        checkIsMobile(); 

        // Adiciona um ouvinte de evento para verificar o tamanho da tela
        window.addEventListener('resize', checkIsMobile);

        // Remove o ouvinte quando o componente for desmontado
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);



    const btnClick = () => {
        setIsMenuOpen((prev) => {
            const isOpened = !prev;
    
            // Atualiza a altura com base no estado do menu
            setHeight(isOpened ? '110px' : '60px');
    
            // Fecha o submenu se o menu for fechado
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
                    <li className={styles.itemMenu}><Link href="/" onClick={btnClick}>Home</Link></li>
                    <li className={styles.itemMenu}><Link href="/sobre" onClick={btnClick}>Sobre</Link></li>
                    <li className={styles.itemMenu}><Link href="/contato" onClick={btnClick}>Contato</Link></li>
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