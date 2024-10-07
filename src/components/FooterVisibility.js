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

                // Gatilho para exibir o rodapé antes de chegar ao final da página
                const offset = 1; // Valor ajustável para exibir o rodapé 300px antes do final

                // Verifica se o footer deve ser mostrado quando o bottom está próximo ao final da tela
                const shouldShowFooter = mainBottom <= windowHeight + offset || mainRef.current.clientHeight < windowHeight;

                // Atualiza o estado de forma contínua com base na rolagem
                if (shouldShowFooter !== showFooter) {
                    setShowFooter(shouldShowFooter);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Executa a verificação na primeira renderização
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [showFooter]); // Adiciona o showFooter como dependência para garantir a atualização correta

    return (
        <>
            {/* Renderiza o footer baseado na rolagem */}
            <div className={`${styles.footerContainer} ${showFooter ? styles.visible : ''}`}>
                {showFooter && <Footer />}
            </div>
        </>
    );
}