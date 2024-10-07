"use client";
import styles from '@/styles/Front.module.css';
import HamburgerMenuContainer from '@/components/HamburgerMenuContainer.js';
import { useState, memo } from 'react';
import Link from 'next/link';

// Componente Memoizado para o iframe
const Frame = memo(({ url }) => {
    return <iframe src={url} className={styles.presentationIframe} />;
});

const FrontII = () => {
    const [frameSeted, setFrame] = useState(''); // URL do iframe
    const [maxHeights, setMaxHeights] = useState(['61px', '61px', '61px']); // Altura máxima de cada container
    const [openIndex, setOpenIndex] = useState(null); // Índice do container aberto
    const [iconStates, setIconStates] = useState([false, false, false]); // Estado dos ícones

    const changeIframe = (url) => {
        setFrame(url);
        setMaxHeights(['61px', '61px', '61px']); // Reseta todos os containers
        setIconStates([false, false, false]); // Reseta todos os ícones
        setOpenIndex(null); // Reseta o índice aberto
    };

    const toggleMaxHeight = (index) => {
        // Se o índice clicado já está aberto, fecha-o
        if (openIndex === index) {
            setMaxHeights(['61px', '61px', '61px']); // Reseta todos os containers
            setIconStates([false, false, false]); // Reseta todos os ícones
            setOpenIndex(null); // Reseta o índice aberto
        } else {
            // Abre o container clicado e fecha os outros
            setMaxHeights((prevMaxHeights) =>
                prevMaxHeights.map((_, i) => (i === index ? 'none' : '61px')) // Fecha os outros containers
            );
            setIconStates((prevIconStates) => {
                return prevIconStates.map((_, i) => (i === index ? true : false)); // Apenas o ícone do container aberto deve ser true
            });
            setOpenIndex(index); // Atualiza o índice do container aberto
        }
    };

    return (
        <>
            <h2 className='subtitulo'>Front-end II</h2>
            <div className={styles.mainContainer}>
                <div className={styles.coloredCard}>
                    <div className={styles.flexListContainer}>
                        <div className={styles.listContainer} style={{ maxHeight: maxHeights[0] }}>
                            <HamburgerMenuContainer
                                onClick={() => toggleMaxHeight(0)}
                                isOpen={iconStates[0]} // Passando o estado do ícone como prop
                            />
                            <ol className={styles.dropDownList}>
                                <p>3º Bimestre</p>
                                <li>
                                    <Link
                                        className={styles.listItemLink}
                                        href="#"
                                        onClick={() =>
                                            changeIframe('https://docs.google.com/presentation/d/1-hnGH-TOqlkWj4brO7Yt-cj9kzvT_oqU5VMzpiT1-cM/embed?start=false&loop=false&delayms=3000')
                                        }
                                    >
                                        CSS
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={styles.listItemLink}
                                        href="#"
                                        onClick={() =>
                                            changeIframe('https://docs.google.com/presentation/d/1I7WBEztmjNyVB58prMXwiFDn6Kn2lGZTSvqzBlLLqFg/embed?start=false&loop=false&delayms=3000')
                                        }
                                    >
                                        DOM
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={styles.listItemLink}
                                        href="#"
                                        onClick={() =>
                                            changeIframe('https://docs.google.com/presentation/d/1B5lLCUlkFIbDr2yzGcHnaooMON5GzhsRoX7WPojNWf4/embed?start=false&loop=false&delayms=3000')
                                        }
                                    >
                                        React
                                    </Link>
                                </li>
                            </ol>
                        </div>

                        <div className={styles.listContainer} style={{ maxHeight: maxHeights[1] }}>
                            <HamburgerMenuContainer
                                onClick={() => toggleMaxHeight(1)}
                                isOpen={iconStates[1]} // Passando o estado do ícone como prop
                            />
                            <ol className={styles.dropDownList}>
                                <p>4º Bimestre</p>
                            </ol>
                        </div>

                        <div className={styles.listContainer} style={{ maxHeight: maxHeights[2] }}>
                            <HamburgerMenuContainer
                                onClick={() => toggleMaxHeight(2)}
                                isOpen={iconStates[2]} // Passando o estado do ícone como prop
                            />
                            <ol className={styles.dropDownList}>
                                <p>Atividades</p>
                                <p>3º Bimestre</p>
                                <li>
                                    <a
                                        className={styles.listItemLink}
                                        href="https://drive.google.com/drive/folders/1GdhgdxPLpdLazkiRJ2MRuwwK4bNfb4Xf?usp=sharing"
                                        target="_blank"
                                    >
                                        Exercícios
                                    </a>
                                </li>
                                <p>4º Bimestre</p>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className={styles.coloredCard}>
                    <Frame url={frameSeted}/> {/* Passando o URL para o componente memoizado */}
                </div>
            </div>
        </>
    );
};

export default FrontII;