'use client';
import Footer from "./Footer.js";
import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/FooterVisibility.module.css';

export default function FooterVisibility() {
    const mainRef = useRef(null);
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const mainElement = document.querySelector('main');
        mainRef.current = mainElement;

        const handleScroll = () => {
            if (mainRef.current) {
                const mainBottom = mainRef.current.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;

                // Verifica se o footer deve ser mostrado
                const shouldShowFooter = mainBottom <= windowHeight || mainRef.current.clientHeight < windowHeight;
                setShowFooter(shouldShowFooter);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Executa a verificação na primeira renderização
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Renderiza o footer baseado na rolagem */}
            <div className={`${styles.footerContainer} ${showFooter ? styles.visible : ''}`}>
                {showFooter && <Footer />}
            </div>
        </>
    );
}